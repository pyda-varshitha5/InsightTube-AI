"use client";

import { Target } from "lucide-react";

export default function TodayGoal() {
  return (
    <div className="rounded-2xl border border-[#232336] bg-[#111117] p-5">

      {/* Header */}

      <div className="flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600">

          <Target size={18} className="text-white" />

        </div>

        <div>

          <p className="text-xs text-gray-400">
            Today's Goal
          </p>

          <h3 className="text-lg font-semibold text-white">
            5 Summaries
          </h3>

        </div>

      </div>

      {/* Progress */}

      <div className="mt-5">

        <div className="mb-2 flex items-center justify-between text-sm">

          <span className="text-gray-400">
            Progress
          </span>

          <span className="text-violet-400 font-medium">
            60%
          </span>

        </div>

        <div className="h-2 rounded-full bg-[#232336]">

          <div className="h-2 w-3/5 rounded-full bg-gradient-to-r from-violet-500 to-purple-500" />

        </div>

      </div>

      {/* Footer */}

      <div className="mt-4 flex items-center justify-between">

        <span className="text-sm text-gray-400">
          3 of 5 completed
        </span>

        <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
          Daily
        </span>

      </div>

    </div>
  );
}