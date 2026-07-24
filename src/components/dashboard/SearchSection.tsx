"use client";

import {
  Search,
  Sparkles,
  Clock,
  ArrowRight,
} from "lucide-react";

const filters = ["Today", "Week", "Month", "Year", "All Time"];

export default function SearchSection() {
  return (
    <section className="rounded-3xl border border-[#232336] bg-[#111117] p-8">

      {/* Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
        <Sparkles size={16} />
        AI Powered Search
      </div>

      {/* Heading */}
      <h2 className="mt-6 text-4xl font-bold leading-tight">
        What do you want to
        <span className="text-violet-400"> learn today?</span>
      </h2>

      <p className="mt-4 max-w-3xl text-gray-400 text-lg">
        Search any YouTube topic and let InsightTube AI generate one
        structured summary from the best videos.
      </p>

      {/* Search */}
      <div className="mt-8 flex gap-5">

        <div className="relative flex-1">

          <Search
            size={22}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            type="text"
            placeholder="Search React Hooks, Machine Learning, DBMS..."
            className="h-16 w-full rounded-2xl border border-[#2A2A40] bg-[#181820] pl-14 pr-5 text-white outline-none transition focus:border-violet-500"
          />

        </div>

        <button className="flex h-16 items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-500 px-10 font-semibold hover:scale-105 transition">

          Generate

          <ArrowRight size={18} />

        </button>

      </div>

      {/* Filters */}
      <div className="mt-8 flex items-center gap-4">

        <div className="flex items-center gap-2 text-gray-400">

          <Clock size={18} />

          <span>Time Range</span>

        </div>

        {filters.map((item, index) => (
          <button
            key={item}
            className={`rounded-full px-5 py-2.5 text-sm transition ${
              index === 0
                ? "bg-violet-600 text-white"
                : "border border-[#333] hover:border-violet-500"
            }`}
          >
            {item}
          </button>
        ))}

      </div>

    </section>
  );
}