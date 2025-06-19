// import { clerkMiddleware } from '@clerk/nextjs/server';

// export default clerkMiddleware();

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)',
//   ],
// };

// middleware.ts
// middleware.ts

import { clerkMiddleware } from "@clerk/nextjs/server";
import { createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/((?!api/webhook).*)", // всичко освен webhook
]);

export default clerkMiddleware(async (auth, req) => {
  if (!isProtectedRoute(req)) {
    // webhook -> не изискваме проверка
    return NextResponse.next();
  }

  const { sessionId, redirectToSignIn } = await auth();

  if (!sessionId) {
    // няма сесия → пренасочи към login
    return redirectToSignIn({ returnBackUrl: req.url });
  }

  // има сесия → продължи
  return NextResponse.next();
});
