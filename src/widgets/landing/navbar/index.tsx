"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 transition-all duration-300"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-purple-500 shadow-lg shadow-violet-500/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
            <Sparkles className="h-6 w-6 text-white" />
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-white">
            InsightTube{" "}
            <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">
              AI
            </span>
          </h1>
        </Link>

        {/* Center Links */}
        <nav className="hidden md:flex items-center gap-10">
          <a href="#features" className="text-sm font-medium text-zinc-400 hover:text-white transition">
            Features
          </a>

          <a href="#how-it-works" className="text-sm font-medium text-zinc-400 hover:text-white transition">
            How It Works
          </a>

          <a href="#testimonials" className="text-sm font-medium text-zinc-400 hover:text-white transition">
            Testimonials
          </a>

          <a href="#faq" className="text-sm font-medium text-zinc-400 hover:text-white transition">
            FAQ
          </a>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-5">

  {/* Login */}
  <Link
    href="/login"
    className="relative text-white font-medium transition-all duration-300 hover:text-violet-400"
  >
    Login
  </Link>

  {/* Sign In */}
  <Link
  href="/register"
  className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-600 px-7 py-3 font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,0.35)] transition-all duration-300 hover:scale-105"
>
  Sign In
</Link>
</div>

      </div>
    </header>
  );
}