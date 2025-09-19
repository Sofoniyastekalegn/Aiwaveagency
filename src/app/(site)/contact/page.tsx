"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(formData: FormData) {
    setStatus(null);
    const res = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });
    if (res.ok) setStatus("Thanks! We'll be in touch.");
    else setStatus("Something went wrong. Please try again later.");
  }

  return (
    <main className="container mx-auto px-4 py-12 max-w-xl">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <form action={onSubmit} className="space-y-4">
        <input name="name" required placeholder="Your name" className="w-full border rounded px-3 py-2" />
        <input name="email" required type="email" placeholder="Your email" className="w-full border rounded px-3 py-2" />
        <textarea name="message" required placeholder="Your message" className="w-full border rounded px-3 py-2 h-32" />
        <button type="submit" className="px-5 py-2 rounded bg-black text-white">Send</button>
      </form>
      {status && <p className="mt-4 text-sm">{status}</p>}
      <div className="mt-8 text-sm">
        <p>Contact emails:</p>
        <ul className="list-disc pl-5">
          <li>sofoniyastekaelgn@gmail.com</li>
          <li>joel@aiwaveagency.com</li>
        </ul>
      </div>
    </main>
  );
}


