import { NextRequest, NextResponse } from "next/server";

// Kept in sync with lib/auth.ts by hand — inlined (rather than imported)
// because Vercel's Edge Function bundler fails to resolve the "@/" path
// alias from middleware.ts.
const ADMIN_SESSION_COOKIE = "iia_admin_session";
const ADMIN_SESSION_VALUE = "authenticated";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  const session = request.cookies.get(ADMIN_SESSION_COOKIE);

  if (session?.value !== ADMIN_SESSION_VALUE) {
    const loginUrl = new URL("/admin/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
