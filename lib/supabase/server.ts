/* Used for:
- server-side authentication
- server-side interactions with Supabase
- managing cookies for server-side requests */

import { createServerClient } from "@supabase/ssr"; // createServerClient function from the Supabase SSR package
import { cookies } from "next/headers"; // cookies function from Next.js headers

// Function to create a Supabase client for server-side usage
export async function createClient() {
  const cookieStore = await cookies(); // Get the cookie store for managing cookies in server-side interactions

  // Create a Supabase client using environment variables for the URL and publishable key, 
  // along with cookie management for server-side interactions
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: { getAll() { return cookieStore.getAll(); },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(
              ({ name, value, options }) => { cookieStore.set(name, value, options); }
            );
          } catch {
            // Called from a Server Component where cookies
            // cannot be modified directly.
          }
        },
      },
    }
  );
}