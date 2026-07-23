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

          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white">
              InsightTube{" "}
              <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">
                AI
              </span>
            </h1>
          </div>
        </Link>

        {/* Center Links */}

        <nav className="hidden items-center gap-10 md:flex">

          <a
            href="#features"
            className="text-sm font-medium text-zinc-400 transition duration-300 hover:text-white"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="text-sm font-medium text-zinc-400 transition duration-300 hover:text-white"
          >
            How It Works
          </a>

          <a
            href="#testimonials"
            className="text-sm font-medium text-zinc-400 transition duration-300 hover:text-white"
          >
            Testimonials
          </a>

          <a
            href="#faq"
            className="text-sm font-medium text-zinc-400 transition duration-300 hover:text-white"
          >
            FAQ
          </a>

        </nav>

        {/* Right */}

        <div className="flex items-center gap-4">

          <button className="hidden rounded-xl px-5 py-2 text-sm font-medium text-zinc-300 transition-all duration-300 hover:bg-white/5 hover:text-white md:block">
            Login
          </button>

          <button className="rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-violet-600/40 active:scale-95">
            Get Started
          </button>

        </div>

      </div>
    </header>
  );
}