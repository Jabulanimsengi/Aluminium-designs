import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  isAdminConfigured,
  verifyAdminSessionToken,
} from "@/lib/admin-auth";

export function proxy(request: NextRequest) {
  const isLoginPage = request.nextUrl.pathname === "/admin/login";

  if (!isAdminConfigured()) {
    return new NextResponse("Admin access has not been configured.", {
      status: 503,
      headers: { "Cache-Control": "no-store" },
    });
  }

  const hasSession = verifyAdminSessionToken(
    request.cookies.get(ADMIN_SESSION_COOKIE)?.value,
  );
  if (isLoginPage && hasSession) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }
  if (!isLoginPage && !hasSession) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  const response = NextResponse.next();
  response.headers.set("Cache-Control", "private, no-store");
  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  return response;
}

export const config = {
  matcher: "/admin/:path*",
};
