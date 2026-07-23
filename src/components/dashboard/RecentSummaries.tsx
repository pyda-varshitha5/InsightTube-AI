"use client";

import {
  Clock3,
  ArrowRight,
  PlayCircle,
} from "lucide-react";

const summaries = [
  {
    title: "React Hooks Explained",
    category: "React",
    time: "2 min ago",
    duration: "8 min saved",
  },
  {
    title: "Machine Learning Basics",
    category: "AI",
    time: "10 min ago",
    duration: "25 min saved",
  },
  {
    title: "Next.js 15 Complete Guide",
    category: "Next.js",
    time: "Yesterday",
    duration: "15 min saved",
  },
  {
    title: "Operating System Scheduling",
    category: "OS",
    time: "Yesterday",
    duration: "32 min saved",
  },
];

export default function RecentSummaries() {
  return (
    <div className="rounded-3xl border border-[#232336] bg-[#111117] p-6">

      {/* Header */}
      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-xl font-bold">
            Recent Summaries
          </h2>

          <p className="text-sm text-gray-400 mt-1">
            Continue where you left off
          </p>

        </div>

        <button className="text-violet-400 text-sm hover:text-violet-300">
          View All
        </button>

      </div>

      {/* List */}
      <div className="mt-6 space-y-4">

        {summaries.map((item) => (

          <div
            key={item.title}
            className="group rounded-2xl border border-[#232336] bg-[#171720] p-4 transition-all hover:border-violet-500 hover:bg-[#1B1B28]"
          >

            <div className="flex items-start justify-between">

              {/* Left */}
              <div className="flex gap-4">

                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center">

                  <PlayCircle size={22} />

                </div>

                <div>

                  <h3 className="font-semibold">
                    {item.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-3">

                    <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs text-violet-300">
                      {item.category}
                    </span>

                    <span className="text-xs text-gray-500">
                      {item.duration}
                    </span>

                  </div>

                </div>

              </div>

              {/* Right */}

              <div className="text-right">

                <div className="flex items-center gap-1 text-xs text-gray-500">

                  <Clock3 size={14} />

                  {item.time}

                </div>

                <button className="mt-4 flex items-center gap-1 text-sm text-violet-400 group-hover:text-violet-300">

                  Open

                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}