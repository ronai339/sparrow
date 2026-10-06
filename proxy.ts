/* Used for:
- Updating the user session on the server-side */

import { type NextRequest } from "next/server"; // NextRequest type from Next.js server module
import { updateSession } from "@/lib/supabase/proxy"; // updateSession function from the Supabase proxy module

// Middleware function to handle incoming requests and update the session
export async function proxy(request: NextRequest) {
  return await updateSession(request);
}

// Configuration for the middleware, specifying which routes it should match
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};