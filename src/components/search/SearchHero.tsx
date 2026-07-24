"use client";

import { Sparkles } from "lucide-react";
import SearchBar from "./SearchBar";
import TimeFilter from "./TimeFilter";

export default function SearchHero() {
  return (
    <section className="relative overflow-hidden rounded-[20px] border border-violet-500/20 bg-[#171329] px-12 py-7">

      {/* Left Glow */}
      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-violet-600/30 blur-[120px]" />

      {/* Right Glow */}
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-purple-500/10 blur-[120px]" />

      {/* Tiny Stars */}
      <div className="absolute left-20 top-16 h-1 w-1 rounded-full bg-violet-300 opacity-60" />
      <div className="absolute right-32 top-24 h-1 w-1 rounded-full bg-white opacity-40" />
      <div className="absolute bottom-20 left-40 h-1 w-1 rounded-full bg-violet-400 opacity-50" />
      <div className="absolute bottom-12 right-24 h-1 w-1 rounded-full bg-white opacity-50" />

      <div className="relative flex flex-col items-center">

        {/* Circle Icon */}

        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-600 shadow-[0_0_35px_rgba(139,92,246,0.5)]">

          <Sparkles className="h-6 w-6 text-white" />

        </div>

        {/* Heading */}

        <h2 className="text-center text-4xl font-bold text-white">

          What do you want to{" "}

          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            learn
          </span>{" "}

          today?

        </h2>

        {/* Subtitle */}

        <p className="mt-3 text-gray-400">

          Get AI-powered summaries from the top YouTube videos

        </p>
        <div className="mt-3 w-full max-w-4xl">
  <SearchBar />
</div>

<div className="mt-5">
  <TimeFilter />
</div>

      </div>

    </section>
  );
}