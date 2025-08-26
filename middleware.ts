import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  if (token && pathname === "/login") {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  if (!token && pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", req.url));
  }


  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/home", "/dashboard"],
};
