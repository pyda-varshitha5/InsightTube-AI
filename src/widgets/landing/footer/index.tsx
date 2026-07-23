"use client";

import Link from "next/link";
import {
  Sparkles,
  Globe,
  Mail,
  ArrowRight,
  Code2,
  Users,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-purple-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">

        <div className="grid gap-16 lg:grid-cols-5">

          {/* Brand */}

          <div className="lg:col-span-2">

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-purple-600">

                <Sparkles className="h-6 w-6 text-white" />

              </div>

              <div>

                <h2 className="text-3xl font-black text-white">

                  InsightTube

                  <span className="text-violet-400">

                    {" "}AI

                  </span>

                </h2>

              </div>

            </div>

            <p className="mt-8 max-w-md text-lg leading-8 text-zinc-400">

              Learn faster with AI-powered YouTube summaries.
              Stop watching repetitive videos and start understanding
              concepts in minutes.

            </p>

            {/* Newsletter */}

            <div className="mt-10">

              <h4 className="mb-4 font-semibold text-white">

                Subscribe to our newsletter

              </h4>

              <div className="flex">

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-l-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-zinc-500 focus:border-violet-500"
                />

                <button className="rounded-r-2xl bg-gradient-to-r from-violet-600 to-purple-600 px-6 transition hover:opacity-90">

                  <ArrowRight className="text-white" />

                </button>

              </div>

            </div>

          </div>

          {/* Product */}

          <div>

            <h3 className="mb-6 text-lg font-bold text-white">

              Product

            </h3>

            <div className="space-y-4">

              <Link href="#" className="block text-zinc-400 hover:text-white">

                Features

              </Link>

              <Link href="#" className="block text-zinc-400 hover:text-white">

                Dashboard

              </Link>

              <Link href="#" className="block text-zinc-400 hover:text-white">

                Pricing

              </Link>

              <Link href="#" className="block text-zinc-400 hover:text-white">

                Roadmap

              </Link>

            </div>

          </div>

          {/* Resources */}

          <div>

            <h3 className="mb-6 text-lg font-bold text-white">

              Resources

            </h3>

            <div className="space-y-4">

              <Link href="#" className="block text-zinc-400 hover:text-white">

                Documentation

              </Link>

              <Link href="#" className="block text-zinc-400 hover:text-white">

                API

              </Link>

              <Link href="#" className="block text-zinc-400 hover:text-white">

                Blog

              </Link>

              <Link href="#" className="block text-zinc-400 hover:text-white">

                Support

              </Link>

            </div>

          </div>

          {/* Company */}

          <div>

            <h3 className="mb-6 text-lg font-bold text-white">

              Company

            </h3>

            <div className="space-y-4">

              <Link href="#" className="block text-zinc-400 hover:text-white">

                About

              </Link>

              <Link href="#" className="block text-zinc-400 hover:text-white">

                Contact

              </Link>

              <Link href="#" className="block text-zinc-400 hover:text-white">

                Privacy

              </Link>

              <Link href="#" className="block text-zinc-400 hover:text-white">

                Terms

              </Link>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-12 border-t border-white/10" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <p className="text-zinc-500">

            © 2026 InsightTube AI. All rights reserved.

          </p>

          <div className="flex gap-4">

            <button className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-violet-500 hover:bg-violet-500/10">

              <Code2 className="h-5 w-5 text-white" />

            </button>

            <button className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-violet-500 hover:bg-violet-500/10">

              <Users className="h-5 w-5 text-white" />

            </button>

            <button className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-violet-500 hover:bg-violet-500/10">

              <Globe className="h-5 w-5 text-white" />

            </button>

            <button className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-violet-500 hover:bg-violet-500/10">

              <Mail className="h-5 w-5 text-white" />

            </button>

          </div>

        </div>

      </div>

    </footer>
  );
}