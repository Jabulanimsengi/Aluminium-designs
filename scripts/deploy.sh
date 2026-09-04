#!/usr/bin/env bash
# ==============================================================================
# Automated Single-Step Deployment Script for Aluminium Designs
# ==============================================================================
# Usage:
#   ./scripts/deploy.sh [git-ref]
# Example:
#   ./scripts/deploy.sh main
#   ./scripts/deploy.sh 855e0a9
# ==============================================================================

set -euo pipefail

REPO_URL="https://github.com/Jabulanimsengi/Aluminium-designs.git"
BASE_DIR="/var/www"
APP_NAME="aluminiumdesigns"
CURRENT_LINK="${BASE_DIR}/${APP_NAME}-current"
PORT="${PORT:-3002}"
TARGET_REF="${1:-main}"

echo "=================================================="
echo " Starting deployment for ${APP_NAME} (${TARGET_REF})"
echo " Time: $(date)"
echo "=================================================="

# Ensure prerequisites
command -v git >/dev/null 2>&1 || { echo "Error: git is not installed." >&2; exit 1; }
command -v node >/dev/null 2>&1 || { echo "Error: node is not installed." >&2; exit 1; }
command -v npm >/dev/null 2>&1 || { echo "Error: npm is not installed." >&2; exit 1; }
command -v pm2 >/dev/null 2>&1 || { echo "Error: pm2 is not installed." >&2; exit 1; }

# Step 1: Create a temporary work tree or clone to resolve target commit
TMP_CLONE=$(mktemp -d /tmp/aluminium-deploy-XXXXXX)
trap 'rm -rf "$TMP_CLONE"' EXIT

echo "--> Fetching repository references..."
git clone --quiet "$REPO_URL" "$TMP_CLONE"
cd "$TMP_CLONE"
git checkout --quiet "$TARGET_REF"
COMMIT_HASH=$(git rev-parse --short HEAD)
FULL_HASH=$(git rev-parse HEAD)
echo "--> Target commit: ${COMMIT_HASH} (${FULL_HASH})"

RELEASE_DIR="${BASE_DIR}/${APP_NAME}-release-${COMMIT_HASH}"

# Step 2: Prepare Release Directory
if [ -d "$RELEASE_DIR" ]; then
  echo "--> Release directory already exists: ${RELEASE_DIR}"
  echo "    Cleaning previous build artifacts in existing release folder..."
  rm -rf "${RELEASE_DIR}/.next"
else
  echo "--> Creating new release directory: ${RELEASE_DIR}"
  mkdir -p "$RELEASE_DIR"
fi

# Move cloned repository contents to the release directory
cd /
cp -a "${TMP_CLONE}/." "${RELEASE_DIR}/"
cd "$RELEASE_DIR"

# Step 3: Copy Environment Variables
if [ -f "${CURRENT_LINK}/.env" ]; then
  echo "--> Copying .env from current release (${CURRENT_LINK})..."
  cp "${CURRENT_LINK}/.env" "${RELEASE_DIR}/.env"
elif [ -f "${BASE_DIR}/.env.aluminiumdesigns" ]; then
  echo "--> Copying .env from base directory..."
  cp "${BASE_DIR}/.env.aluminiumdesigns" "${RELEASE_DIR}/.env"
elif [ -f "${RELEASE_DIR}/.env" ]; then
  echo "--> Using existing .env in release folder."
else
  echo "Error: No .env file found in ${CURRENT_LINK} or ${BASE_DIR}." >&2
  exit 1
fi

# Step 4: Install Dependencies
echo "--> Installing dependencies (npm ci)..."
npm ci --prefer-offline --no-audit

# Step 5: Build Next.js Application
echo "--> Running Next.js build..."
npm run build

# Step 6: Standalone Asset Copy (Fix Next.js standalone missing static/public assets)
echo "--> Copying static and public assets to standalone directory..."
if [ -d "${RELEASE_DIR}/.next/static" ]; then
  mkdir -p "${RELEASE_DIR}/.next/standalone/.next"
  cp -r "${RELEASE_DIR}/.next/static" "${RELEASE_DIR}/.next/standalone/.next/"
fi

if [ -d "${RELEASE_DIR}/public" ]; then
  mkdir -p "${RELEASE_DIR}/.next/standalone"
  cp -r "${RELEASE_DIR}/public" "${RELEASE_DIR}/.next/standalone/"
fi

# Ensure runner script is executable
if [ -f "${RELEASE_DIR}/run-aluminiumdesigns.sh" ]; then
  chmod +x "${RELEASE_DIR}/run-aluminiumdesigns.sh"
fi

# Step 7: Atomically Update Symlink
echo "--> Switching active release symlink to ${RELEASE_DIR}..."
ln -sfn "$RELEASE_DIR" "$CURRENT_LINK"

# Step 8: Update / Restart PM2
echo "--> Reloading application via PM2..."
if pm2 describe "$APP_NAME" >/dev/null 2>&1; then
  pm2 restart "$APP_NAME" --update-env
else
  pm2 start "${CURRENT_LINK}/run-aluminiumdesigns.sh" --name "$APP_NAME" --cwd "$CURRENT_LINK"
fi
pm2 save --force

# Step 9: Health Check
echo "--> Verifying application health on http://127.0.0.1:${PORT}/ ..."
HEALTHY=false
for i in {1..15}; do
  HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "http://127.0.0.1:${PORT}/" || echo "000")
  if [ "$HTTP_STATUS" = "200" ]; then
    HEALTHY=true
    break
  fi
  echo "    Attempt $i/15: got HTTP $HTTP_STATUS, waiting 2s..."
  sleep 2
done

if [ "$HEALTHY" = true ]; then
  echo "? Application is HEALTHY (HTTP 200)!"
else
  echo "? Health check failed! PM2 logs:" >&2
  pm2 logs "$APP_NAME" --lines 30 --nostream >&2
  exit 1
fi

# Verify static asset loading
STATIC_FILE=$(find "${CURRENT_LINK}/.next/standalone/.next/static" -type f \( -name "*.css" -o -name "*.js" \) | head -n 1)
if [ -n "$STATIC_FILE" ]; then
  REL_PATH=${STATIC_FILE#${CURRENT_LINK}/.next/standalone/.next/static}
  STATIC_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "http://127.0.0.1:${PORT}/_next/static${REL_PATH}" || echo "000")
  echo "--> Static asset check (/_next/static${REL_PATH}): HTTP ${STATIC_STATUS}"
fi

# Step 10: Automatic Cleanup of Old Releases
echo "--> Cleaning up old releases..."
for dir in "${BASE_DIR}/${APP_NAME}-release-"*; do
  if [ -d "$dir" ] && [ "$dir" != "$RELEASE_DIR" ]; then
    echo "    Removing old release directory: $dir"
    rm -rf "$dir"
  fi
done

echo "=================================================="
echo " Deployment COMPLETE for ${APP_NAME} (${COMMIT_HASH})"
echo " Symlink: ${CURRENT_LINK} -> ${RELEASE_DIR}"
echo " Status: ONLINE"
echo "=================================================="
