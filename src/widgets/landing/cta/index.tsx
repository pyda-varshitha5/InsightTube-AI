"use client";

import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-32">

      {/* Background Glow */}

      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-purple-900/10 to-black" />

      <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-violet-600/20 blur-[140px]" />

      <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-fuchsia-600/20 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl px-6">

        <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-14 backdrop-blur-xl">

          {/* Badge */}

          <div className="flex justify-center">

            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">

              <Sparkles className="h-4 w-4" />

              Get Started Today

            </div>

          </div>

          {/* Heading */}

          <h2 className="mx-auto mt-10 max-w-4xl text-center text-5xl font-black leading-tight text-white md:text-6xl">

            Learn Smarter.

            <br />

            <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">

              Save Hours Every Week.

            </span>

          </h2>

          {/* Description */}

          <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-8 text-zinc-400">

            Stop watching repetitive videos.

            Let InsightTube AI analyze the best YouTube content,
            remove duplicates, and generate one intelligent summary
            that helps you master any topic faster.

          </p>

          {/* Buttons */}

          <div className="mt-14 flex flex-wrap justify-center gap-5">

            <button className="group flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-600/40">

              Get Started

              <ArrowRight
                size={20}
                className="transition group-hover:translate-x-1"
              />

            </button>

            <button className="group flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:border-violet-500 hover:bg-violet-500/10">

              <PlayCircle
                size={20}
                className="transition group-hover:scale-110"
              />

              Watch Demo

            </button>

          </div>

          {/* Stats */}

          <div className="mt-20 grid gap-8 border-t border-white/10 pt-12 md:grid-cols-3">

            <div className="text-center">

              <h3 className="text-4xl font-black text-white">

                2M+

              </h3>

              <p className="mt-2 text-zinc-400">

                Videos Processed

              </p>

            </div>

            <div className="text-center">

              <h3 className="text-4xl font-black text-white">

                100K+

              </h3>

              <p className="mt-2 text-zinc-400">

                AI Summaries

              </p>

            </div>

            <div className="text-center">

              <h3 className="text-4xl font-black text-white">

                50K+

              </h3>

              <p className="mt-2 text-zinc-400">

                Active Learners

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}