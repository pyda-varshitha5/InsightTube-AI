"use client";

import {
  Search,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

const searches = [
  {
    title: "React Hooks Explained",
    category: "React",
    time: "2 min ago",
  },
  {
    title: "Machine Learning Basics",
    category: "AI",
    time: "18 min ago",
  },
  {
    title: "DBMS Normalization",
    category: "DBMS",
    time: "Yesterday",
  },
  {
    title: "Next.js Authentication",
    category: "Next.js",
    time: "2 days ago",
  },
];

export default function RecentSearches() {
  return (
    <div className="rounded-2xl border border-[#232336] bg-[#111117] p-5">

      {/* Header */}

      <div className="mb-5 flex items-center justify-between">

        <div>

          <h2 className="text-lg font-semibold text-white">
            Recent Searches
          </h2>

          <p className="text-xs text-gray-400">
            Your latest AI searches
          </p>

        </div>

        <button className="text-sm font-medium text-violet-400 hover:text-violet-300">
          View All
        </button>

      </div>

      {/* Search List */}

      <div className="space-y-3">

        {searches.map((item) => (

          <div
            key={item.title}
            className="group flex items-center justify-between rounded-xl border border-[#232336] bg-[#181820] p-3 transition-all duration-300 hover:border-violet-500 hover:bg-[#1C1C27]"
          >

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-600/15">

                <Search
                  size={18}
                  className="text-violet-400"
                />

              </div>

              <div>

                <h3 className="text-sm font-medium text-white">
                  {item.title}
                </h3>

                <div className="mt-1 flex items-center gap-2">

                  <span className="rounded-full bg-violet-500/10 px-2 py-0.5 text-[11px] text-violet-300">
                    {item.category}
                  </span>

                  <span className="flex items-center gap-1 text-[11px] text-gray-500">

                    <Clock3 size={12} />

                    {item.time}

                  </span>

                </div>

              </div>

            </div>

            <button className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">

              <ArrowUpRight
                size={18}
                className="text-violet-400"
              />

            </button>

          </div>

        ))}

      </div>

      {/* Footer */}

      <div className="mt-5 border-t border-[#232336] pt-4">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-xs text-gray-500">
              Total Searches
            </p>

            <h3 className="text-2xl font-bold text-white">
              248
            </h3>

          </div>

          <button className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-500">
            Explore
          </button>

        </div>

      </div>

    </div>
  );
}