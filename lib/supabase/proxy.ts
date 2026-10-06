/* Used for:
- Updating the user session on the server-side */

import { createServerClient } from "@supabase/ssr"; // createServerClient function from the Supabase SSR package
import { NextResponse, type NextRequest } from "next/server"; // NextResponse and NextRequest types from Next.js server module

// Function to update the session based on the incoming request
export async function updateSession(
 request: NextRequest // The incoming request object from Next.js server
) {
  // Create a NextResponse object to handle the response, initialized with the incoming request 
  let supabaseResponse = NextResponse.next({ request, }); 

  // Create a Supabase client using environment variables for the URL and publishable key,
  // along with cookie management for server-side interactions
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: { getAll() { return request.cookies.getAll(); },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => {
            request.cookies.set(name, value);
          });

          supabaseResponse = NextResponse.next({
            request,
          });

          cookiesToSet.forEach(
            ({ name, value, options }) => {
              supabaseResponse.cookies.set(
                name,
                value,
                options
              );
            }
          );
        },
      },
    }
  );

  const { data } = await supabase.auth.getClaims(); // Get the claims (user session information) from the Supabase client
  const claims = data?.claims; // Extract the claims from the response data

  // If there are no claims and the request is not for the login or auth pages,
  // redirect to the login page
  if (
    !claims &&
    !request.nextUrl.pathname.startsWith("/login") &&
    !request.nextUrl.pathname.startsWith("/auth")
  ) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";

    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}