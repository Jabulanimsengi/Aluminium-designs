import { createHash, createHmac, timingSafeEqual } from "node:crypto";

export const ADMIN_SESSION_COOKIE = "apex_admin_session";
export const ADMIN_SESSION_MAX_AGE = 8 * 60 * 60;

function safeEqual(left: string, right: string) {
  const leftDigest = createHash("sha256").update(left).digest();
  const rightDigest = createHash("sha256").update(right).digest();
  return timingSafeEqual(leftDigest, rightDigest);
}

function getAdminConfig() {
  const username = process.env.ADMIN_USERNAME?.trim() || "";
  const password = process.env.ADMIN_PASSWORD || "";
  const sessionSecret = process.env.ADMIN_SESSION_SECRET?.trim() || password;

  return { username, password, sessionSecret };
}

function signature(value: string, secret: string) {
  return createHmac("sha256", secret).update(value).digest("base64url");
}

export function isAdminConfigured() {
  const { username, password, sessionSecret } = getAdminConfig();
  return Boolean(username && password && sessionSecret);
}

export function validateAdminCredentials(username: string, password: string) {
  const expected = getAdminConfig();
  if (!expected.username || !expected.password) return false;

  return safeEqual(username, expected.username) && safeEqual(password, expected.password);
}

export function createAdminSessionToken() {
  const { sessionSecret } = getAdminConfig();
  if (!sessionSecret) throw new Error("Admin session secret is not configured");

  const expiresAt = Math.floor(Date.now() / 1000) + ADMIN_SESSION_MAX_AGE;
  const payload = `v1.${expiresAt}`;
  return `${payload}.${signature(payload, sessionSecret)}`;
}

export function verifyAdminSessionToken(token: string | undefined) {
  if (!token) return false;

  const { sessionSecret } = getAdminConfig();
  const [version, expiresAtValue, providedSignature, ...extra] = token.split(".");
  const expiresAt = Number(expiresAtValue);
  if (
    !sessionSecret ||
    version !== "v1" ||
    extra.length ||
    !providedSignature ||
    !Number.isInteger(expiresAt) ||
    expiresAt <= Math.floor(Date.now() / 1000)
  ) {
    return false;
  }

  const payload = `${version}.${expiresAt}`;
  return safeEqual(providedSignature, signature(payload, sessionSecret));
}
