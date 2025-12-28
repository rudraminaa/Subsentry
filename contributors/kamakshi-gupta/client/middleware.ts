import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware((auth, req) => {
  const { protect } = auth;
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/dashboard")) {
    protect();
  }
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
