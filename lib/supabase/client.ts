/* Used for:
- realtime subscriptions
- client-side authentication
- browser interactions */

import { createBrowserClient } from "@supabase/ssr"; // Import the createBrowserClient function from the Supabase SSR package

// Function to create a Supabase client using environment variables for the URL and publishable key
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  );
}