import { NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE } from "@/lib/admin-auth";

export async function POST(request: Request) {
  const response = NextResponse.redirect(new URL("/admin/login", request.url), 303);
  response.cookies.set(ADMIN_SESSION_COOKIE, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 0,
    path: "/admin",
  });
  response.headers.set("Cache-Control", "no-store");
  return response;
}
