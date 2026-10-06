import { type EmailOtpType } from "@supabase/supabase-js"; // EmailOtpType type from Supabase JS package
import { type NextRequest, NextResponse, } from "next/server"; // NextRequest and NextResponse types from Next.js server module
import { createClient } from "@/lib/supabase/server"; // createClient function from the Supabase server module

// Function to handle GET requests for email confirmation
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url); // Parse the URL of the incoming request to extract search parameters
  const tokenHash = searchParams.get("token_hash"); // Get the token_hash parameter from the search parameters
  const type = searchParams.get("type") as EmailOtpType | null; // Get the type parameter from the search parameters and cast it to EmailOtpType or null
  const redirectTo = request.nextUrl.clone(); // Clone the nextUrl from the request to create a new URL object for redirection

  // Set the default redirection path to the home page and remove token_hash 
  // and type from the search parameters
  redirectTo.pathname = "/";
  redirectTo.searchParams.delete("token_hash");
  redirectTo.searchParams.delete("type");

  // If both tokenHash and type are present, attempt to verify the OTP using the Supabase client
  if (tokenHash && type) {
    const supabase = await createClient();
    const { error } = await supabase.auth.verifyOtp({ type, token_hash: tokenHash, });
    // If verification is successful, redirect to the home page
    if (!error) { return NextResponse.redirect(redirectTo); }
  }

  // If verification fails or if tokenHash/type are missing, 
  // redirect to the login page with an error message
  redirectTo.pathname = "/login";
  redirectTo.searchParams.set(
    "error",
    "Your confirmation link is invalid or has expired."
  );

  return NextResponse.redirect(redirectTo);
}