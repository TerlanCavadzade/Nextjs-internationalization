import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname == "/") {
    // to the default lang
    return NextResponse.redirect(new URL("/en", request.url));
  }
  return NextResponse.next();
}
