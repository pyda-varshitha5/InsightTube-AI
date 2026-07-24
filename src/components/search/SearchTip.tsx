"use client";

import { Lightbulb, Search } from "lucide-react";

export default function SearchTip() {
  return (
    <div className="mt-6 rounded-2xl border border-white/5 bg-[#171723]">

      <div className="flex items-center justify-between px-8 py-6">

        {/* LEFT */}

        <div className="flex items-start gap-5">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600/20">

            <Lightbulb className="h-6 w-6 text-violet-400" />

          </div>

          <div>

            <h3 className="text-lg font-semibold text-white">
              Tip: Be specific with your search
            </h3>

            <p className="mt-2 max-w-xl text-sm leading-6 text-gray-400">
              Example:
              <span className="text-violet-400">
                {" "}
                "React useEffect Hook tutorial"
              </span>{" "}
              instead of just
              <span className="text-white"> "React"</span> for better AI
              summaries.
            </p>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative hidden md:flex">

          <div className="absolute inset-0 rounded-full bg-violet-600/20 blur-3xl" />

          <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[#1E1E2B]">

            <Search className="h-10 w-10 text-violet-400" />

          </div>

        </div>

      </div>

    </div>
  );
}