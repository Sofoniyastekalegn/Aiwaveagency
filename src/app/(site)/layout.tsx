import Link from "next/link";
import "../globals.css";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-semibold text-xl">AI Wave Agency</Link>
          <nav className="flex items-center gap-6">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="/dashboard" className="hover:underline">Dashboard</Link>
            <Link href="/auth/sign-in" className="hover:underline">Sign in</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t">
        <div className="container mx-auto px-4 py-6 text-sm flex items-center justify-between">
          <span>Copyright © {new Date().getFullYear()} AiWaveagency</span>
          <span>Powered by Next.js</span>
        </div>
      </footer>
    </div>
  );
}


