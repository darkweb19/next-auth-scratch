import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
	const path = request.nextUrl.pathname;
	const token = request.cookies.get("token")?.value || "";
	const isPublicPath = path === "/login" || path === "/signup";
	const isProtectedPath =
		path === "/dashboard" || path.startsWith("/dashboard");
	if (isPublicPath && token !== "")
		return NextResponse.redirect(new URL("/dashboard", request.url));
	if (isProtectedPath && token === "")
		return NextResponse.redirect(new URL("/", request.url));
}
