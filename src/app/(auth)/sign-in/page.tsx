"use client";

import { useState } from "react";
import { supabase } from "@/app/../lib/supabaseClient";
import Link from "next/link";

export default function SignIn() {
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(formData: FormData) {
    setError(null);
    const email = String(formData.get("email") || "");
    const password = String(formData.get("password") || "");
    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
    if (signInError) setError(signInError.message);
    else window.location.href = "/dashboard";
  }

  return (
    <main className="container mx-auto px-4 py-12 max-w-md">
      <h1 className="text-3xl font-semibold mb-6">Sign in</h1>
      <form action={onSubmit} className="space-y-4">
        <input name="email" type="email" required placeholder="Email" className="w-full border rounded px-3 py-2" />
        <input name="password" type="password" required placeholder="Password" className="w-full border rounded px-3 py-2" />
        <button className="px-5 py-2 rounded bg-black text-white">Sign in</button>
      </form>
      {error && <p className="mt-4 text-red-500 text-sm">{error}</p>}
      <p className="mt-4 text-sm">No account? <Link className="underline" href="/auth/sign-up">Sign up</Link></p>
    </main>
  );
}


