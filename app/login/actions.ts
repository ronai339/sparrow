/* Used for:
- Handling user login and signup actions on the server-side */

"use server";

import { redirect } from "next/navigation"; // redirect function from Next.js navigation module
import { revalidatePath } from "next/cache"; // revalidatePath function from Next.js cache module
import { createClient } from "@/lib/supabase/server"; // createClient function from the Supabase server module

// Function to handle user login with email and password
export async function login(formData: FormData) {
  const email = formData.get("email") as string; // Get the email from the form data
  const password = formData.get("password") as string; // Get the password from the form data
  const supabase = await createClient(); // Create a Supabase client for server-side usage
  
  // Attempt to sign in the user with the provided email and password
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  // If there is an error during sign-in, redirect to the login page with the error message
  if (error) {
    redirect(
      `/login?error=${encodeURIComponent(error.message)}`
    );
  }

  // If sign-in is successful, revalidate the root path and redirect to the home page
  revalidatePath("/", "layout");
  redirect("/");
}

// Function to handle user signup with email and password
export async function signup(formData: FormData) {
  const email = formData.get("email") as string; // Get the email from the form data
  const password = formData.get("password") as string; // Get the password from the form data
  const supabase = await createClient(); // Create a Supabase client for server-side usage

  // Attempt to sign up the user with the provided email and password
  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  // If there is an error during sign-up, redirect to the login page with the error message
  if (error) {
    redirect(
      `/login?error=${encodeURIComponent(error.message)}`
    );
  }

  // If sign-up is successful, redirect to the login page with a confirmation message
  redirect(
    "/login?message=Check%20your%20email%20to%20confirm%20your%20account"
  );
}