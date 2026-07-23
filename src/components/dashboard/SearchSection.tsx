"use client";

import {
  Search,
  Sparkles,
  Clock,
  ArrowRight,
} from "lucide-react";

export default function SearchSection() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-[#232336] bg-[#111117] p-8">

      {/* Background Glow */}
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="absolute -left-20 -bottom-20 h-60 w-60 rounded-full bg-purple-500/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
          <Sparkles size={16} />
          AI Powered Search
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-4xl font-bold">
          What do you want to
          <span className="text-violet-400"> learn today?</span>
        </h2>

        <p className="mt-3 max-w-2xl text-gray-400">
          Search any YouTube topic and let InsightTube AI generate one
          structured summary from the best videos.
        </p>

        {/* Search Box */}
        <div className="mt-8 flex items-center gap-4">

          <div className="relative flex-1">

            <Search
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              type="text"
              placeholder="Search React Hooks, Machine Learning, DBMS..."
              className="w-full rounded-2xl border border-[#2A2A40] bg-[#181820] py-4 pl-14 pr-5 text-white outline-none transition-all focus:border-violet-500"
            />

          </div>

          <button className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-500 px-7 py-4 font-semibold transition hover:scale-105 hover:shadow-xl hover:shadow-violet-500/30">

            Generate

            <ArrowRight size={18} />

          </button>

        </div>

        {/* Filters */}
        <div className="mt-8 flex items-center gap-4">

          <div className="flex items-center gap-2 text-gray-400">

            <Clock size={18} />

            <span className="text-sm">Time Range</span>

          </div>

          <button className="rounded-full bg-violet-600 px-4 py-2 text-sm">
            Today
          </button>

          <button className="rounded-full border border-[#333] px-4 py-2 text-sm hover:border-violet-500">
            Week
          </button>

          <button className="rounded-full border border-[#333] px-4 py-2 text-sm hover:border-violet-500">
            Month
          </button>

          <button className="rounded-full border border-[#333] px-4 py-2 text-sm hover:border-violet-500">
            Year
          </button>

          <button className="rounded-full border border-[#333] px-4 py-2 text-sm hover:border-violet-500">
            All Time
          </button>

        </div>

      </div>

    </div>
  );
}