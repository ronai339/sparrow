import { redirect } from "next/navigation"; // redirect function from Next.js navigation module
import { createClient } from "@/lib/supabase/server"; // createClient function from the Supabase server module
import { ChatLayout } from "@/components/chat/ChatLayout"; // ChatLayout component from the chat components module

export default async function Home() {

  const supabase = await createClient(); // Create a Supabase client for server-side usage
  const { data } = await supabase.auth.getClaims(); // Get the claims (user session information) from the Supabase client

  if (!data?.claims) { redirect("/login"); } // If there are no claims (user is not authenticated), redirect to the login page

  return <ChatLayout />; // If the user is authenticated, render the ChatLayout component
}