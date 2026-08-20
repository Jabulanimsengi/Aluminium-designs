import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  ADMIN_SESSION_MAX_AGE,
  createAdminSessionToken,
  isAdminConfigured,
  validateAdminCredentials,
} from "@/lib/admin-auth";

export const runtime = "nodejs";

const MAX_ATTEMPTS = 5;
const ATTEMPT_WINDOW = 15 * 60 * 1000;
const attempts = new Map<string, { count: number; resetAt: number }>();

function clientIdentifier(request: NextRequest) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

function isRateLimited(identifier: string) {
  const now = Date.now();
  const current = attempts.get(identifier);
  if (!current || current.resetAt <= now) {
    attempts.set(identifier, { count: 0, resetAt: now + ATTEMPT_WINDOW });
    return false;
  }
  return current.count >= MAX_ATTEMPTS;
}

function recordFailure(identifier: string) {
  const current = attempts.get(identifier);
  if (current) current.count += 1;
}

export async function POST(request: NextRequest) {
  if (!isAdminConfigured()) {
    return NextResponse.json(
      { message: "Admin access has not been configured." },
      { status: 503 },
    );
  }

  const identifier = clientIdentifier(request);
  if (isRateLimited(identifier)) {
    return NextResponse.json(
      { message: "Too many login attempts. Please try again in 15 minutes." },
      { status: 429 },
    );
  }

  let username = "";
  let password = "";
  try {
    const body = (await request.json()) as { username?: unknown; password?: unknown };
    username = typeof body.username === "string" ? body.username.trim() : "";
    password = typeof body.password === "string" ? body.password : "";
  } catch {
    return NextResponse.json({ message: "Invalid login request." }, { status: 400 });
  }

  if (!validateAdminCredentials(username, password)) {
    recordFailure(identifier);
    return NextResponse.json(
      { message: "The username or password is incorrect." },
      { status: 401 },
    );
  }

  attempts.delete(identifier);
  const response = NextResponse.json({ success: true });
  response.cookies.set(ADMIN_SESSION_COOKIE, createAdminSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: ADMIN_SESSION_MAX_AGE,
    path: "/admin",
    priority: "high",
  });
  response.headers.set("Cache-Control", "no-store");
  return response;
}
