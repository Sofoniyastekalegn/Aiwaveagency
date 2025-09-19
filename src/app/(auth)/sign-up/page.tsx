"use client";

import { useState } from "react";
import { supabase } from "@/app/../lib/supabaseClient";
import Link from "next/link";

export default function SignUp() {
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  async function onSubmit(formData: FormData) {
    setError(null);
    setInfo(null);
    const email = String(formData.get("email") || "");
    const password = String(formData.get("password") || "");
    const { error: signUpError } = await supabase.auth.signUp({ email, password });
    if (signUpError) setError(signUpError.message);
    else setInfo("Check your email for confirmation.");
  }

  return (
    <main className="container mx-auto px-4 py-12 max-w-md">
      <h1 className="text-3xl font-semibold mb-6">Create account</h1>
      <form action={onSubmit} className="space-y-4">
        <input name="email" type="email" required placeholder="Email" className="w-full border rounded px-3 py-2" />
        <input name="password" type="password" required placeholder="Password" className="w-full border rounded px-3 py-2" />
        <button className="px-5 py-2 rounded bg-black text-white">Sign up</button>
      </form>
      {error && <p className="mt-4 text-red-500 text-sm">{error}</p>}
      {info && <p className="mt-4 text-sm">{info}</p>}
      <p className="mt-4 text-sm">Have an account? <Link className="underline" href="/auth/sign-in">Sign in</Link></p>
    </main>
  );
}


