// middleware.ts
import { NextResponse } from "next/server";

export function middleware(request) {
  const url = new URL(request.url);
  const accessToken = request.cookies.get("accessToken");

  const isAuthPage = ["/login", "/register"].includes(url.pathname);

  if ((isAuthPage || url.pathname === "/") && accessToken) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (!accessToken && !isAuthPage) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register", "/"],
};
