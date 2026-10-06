// Login page

import { login, signup } from "./actions"; // login and signup functions from the actions module

type LoginPageProps = {
  searchParams: Promise<{ // Search parameters from the URL
    error?: string; // Optional error message from the query parameters
    message?: string; // Optional message from the query parameters
  }>;
};

// Main component for the login page
export default async function LoginPage({
  searchParams, // Destructure the searchParams prop from the component's props
}: LoginPageProps) {
  const params = await searchParams;

  // Render the login page with a form for email and password input,
  // along with buttons for login and signup
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-100 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <div className="mb-8">

          {/* Logo and welcome message */}
          <p className="text-sm font-medium text-blue-600">
            Sparrow
          </p>

          {/* Welcome heading and description */}
          <h1 className="mt-2 text-3xl font-bold tracking-tight">
            Welcome
          </h1>

          {/* Description */}
          <p className="mt-2 text-sm text-zinc-500">
            Sign in or create an account to continue.
          </p>
        </div>

        {/* Display error message if present in the query parameters */}
        {params.error && (
          <div className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
            {params.error}
          </div>
        )}

        {/* Display message if present in the query parameters */}
        {params.message && (
          <div className="mb-4 rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            {params.message}
          </div>
        )}

        {/* Form for email and password input, with login and signup buttons */}
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="h-11 w-full rounded-lg border border-zinc-200 px-3 outline-none focus:border-zinc-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-1.5 block text-sm font-medium"
            >
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              required
              minLength={6}
              autoComplete="current-password"
              className="h-11 w-full rounded-lg border border-zinc-200 px-3 outline-none focus:border-zinc-400"
              placeholder="••••••••"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              formAction={login}
              className="h-11 rounded-lg bg-zinc-900 font-medium text-white transition hover:bg-zinc-800"
            >
              Log in
            </button>

            <button
              formAction={signup}
              className="h-11 rounded-lg border border-zinc-200 font-medium text-zinc-900 transition hover:bg-zinc-50"
            >
              Sign up
            </button>
          </div>
        </form>
        
      </div>
    </main>
  );
}