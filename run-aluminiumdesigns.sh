#!/usr/bin/env bash
RELEASE_DIR="${ALUMINIUM_RELEASE_DIR:-/var/www/aluminiumdesigns-release-latest}"
set -a
. "$RELEASE_DIR/.env"
set +a
export NODE_ENV=production
export HOSTNAME=0.0.0.0
export PORT="${PORT:-3002}"

# Locate server.js (handles both direct standalone and nested project directory output)
if [ -f "$RELEASE_DIR/.next/standalone/server.js" ]; then
  SERVER_JS="$RELEASE_DIR/.next/standalone/server.js"
  SERVER_DIR="$RELEASE_DIR/.next/standalone"
else
  SERVER_JS=$(find "$RELEASE_DIR/.next/standalone" -maxdepth 3 -name "server.js" | head -n 1)
  SERVER_DIR=$(dirname "$SERVER_JS")
fi

if [ -z "$SERVER_JS" ] || [ ! -f "$SERVER_JS" ]; then
  echo "Error: server.js not found in $RELEASE_DIR/.next/standalone" >&2
  exit 1
fi

# Ensure static assets are copied to both standalone root and server directory
if [ -d "$RELEASE_DIR/.next/static" ]; then
  mkdir -p "$RELEASE_DIR/.next/standalone/.next"
  cp -r "$RELEASE_DIR/.next/static" "$RELEASE_DIR/.next/standalone/.next/"
  if [ "$SERVER_DIR" != "$RELEASE_DIR/.next/standalone" ]; then
    mkdir -p "$SERVER_DIR/.next"
    cp -r "$RELEASE_DIR/.next/static" "$SERVER_DIR/.next/"
  fi
fi

# Ensure public assets are copied to both standalone root and server directory
if [ -d "$RELEASE_DIR/public" ]; then
  cp -r "$RELEASE_DIR/public" "$RELEASE_DIR/.next/standalone/"
  if [ "$SERVER_DIR" != "$RELEASE_DIR/.next/standalone" ]; then
    cp -r "$RELEASE_DIR/public" "$SERVER_DIR/"
  fi
fi

exec node "$SERVER_JS"
