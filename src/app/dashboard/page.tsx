"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/app/../lib/supabaseClient";

export default function Dashboard() {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setEmail(data.user?.email ?? null));
  }, []);

  async function signOut() {
    await supabase.auth.signOut();
    window.location.href = "/";
  }

  if (!email) {
    return (
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-xl">Please sign in to view your dashboard.</div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <button onClick={signOut} className="px-4 py-2 rounded bg-black text-white">Sign out</button>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="border rounded p-4">
          <h2 className="font-medium mb-2">Welcome</h2>
          <p>You are signed in as {email}</p>
        </div>
        <div className="border rounded p-4">
          <h2 className="font-medium mb-2">AI Phone Call Service</h2>
          <p>Placeholder for call automation controls and analytics.</p>
        </div>
      </div>
    </main>
  );
}


