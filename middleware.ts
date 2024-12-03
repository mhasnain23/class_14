import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)'])

/**
 * This is the main middleware function.
 */
export default clerkMiddleware(async (auth, request) => {
    // If the route is not a public route, call the `auth.protect()` method.
    if (!isPublicRoute(request)) {
        await auth.protect()
    }
})
export const config = {
    // This is the array of regex patterns that match the routes that should be protected.
    matcher: [
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
}

