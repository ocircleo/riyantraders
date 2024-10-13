import { NextResponse } from "next/server";
import { API } from "./app/utls/api/API";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  let accessToken = request.cookies.get("accessToken");
  if (!accessToken)
    return NextResponse.redirect(new URL("/login", request.url));
  let res, result;
  try {
    res = await fetch(API + "auth/auto_login", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `${accessToken?.value}`,
      },
    });
    result = await res.json();
  } catch (error) {
    if (error) NextResponse.redirect(new URL("/error", request.url));
  }
  if (!result?.error) return NextResponse.next();
  return NextResponse.redirect(new URL("/login", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/dashboard/:path*",
};
