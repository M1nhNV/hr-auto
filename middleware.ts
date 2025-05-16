import { NextResponse, NextRequest } from "next/server";
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: "/admin/:path*",
};
