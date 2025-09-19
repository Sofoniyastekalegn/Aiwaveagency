"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="font-bold text-xl">AI Wave Agency</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Contact
            </Link>
            <Link href="/dashboard" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Dashboard
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/auth/sign-in" 
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Sign In
            </Link>
            <Link 
              href="/auth/sign-up" 
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-base font-medium hover:text-blue-600">
                Home
              </Link>
              <Link href="/about" className="block px-3 py-2 text-base font-medium hover:text-blue-600">
                About
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-base font-medium hover:text-blue-600">
                Contact
              </Link>
              <Link href="/dashboard" className="block px-3 py-2 text-base font-medium hover:text-blue-600">
                Dashboard
              </Link>
              <div className="pt-4 space-y-2">
                <Link href="/auth/sign-in" className="block px-3 py-2 text-base font-medium hover:text-blue-600">
                  Sign In
                </Link>
                <Link href="/auth/sign-up" className="block px-3 py-2 text-base font-medium bg-blue-600 text-white rounded-md">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
