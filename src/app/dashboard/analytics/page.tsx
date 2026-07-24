"use client";

import {
  BarChart3,
  Search,
  Bookmark,
  FileText,
  Clock,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    title: "Total Searches",
    value: "124",
    icon: Search,
    color: "text-violet-400",
  },
  {
    title: "AI Summaries",
    value: "96",
    icon: FileText,
    color: "text-pink-400",
  },
  {
    title: "Bookmarks",
    value: "31",
    icon: Bookmark,
    color: "text-blue-400",
  },
  {
    title: "Learning Hours",
    value: "18.5",
    icon: Clock,
    color: "text-green-400",
  },
];

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-[#0B0B12] p-8 text-white">

      <div className="mb-8 flex items-center gap-4">
        <div className="rounded-xl bg-violet-600/20 p-4">
          <BarChart3 className="h-8 w-8 text-violet-400" />
        </div>

        <div>
          <h1 className="text-3xl font-bold">
            Analytics
          </h1>

          <p className="mt-1 text-gray-400">
            Track your learning activity and progress.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-violet-500/10 bg-[#151520] p-6 transition hover:border-violet-500/30"
            >
              <Icon className={`mb-4 h-8 w-8 ${item.color}`} />

              <h2 className="text-gray-400">
                {item.title}
              </h2>

              <p className="mt-2 text-4xl font-bold">
                {item.value}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-10 rounded-2xl border border-violet-500/10 bg-[#151520] p-8">

        <div className="mb-6 flex items-center gap-3">

          <TrendingUp className="h-7 w-7 text-violet-400" />

          <h2 className="text-2xl font-semibold">
            Weekly Progress
          </h2>

        </div>

        <div className="space-y-5">

          <div>
            <div className="mb-2 flex justify-between">
              <span>Search Activity</span>
              <span>82%</span>
            </div>

            <div className="h-3 rounded-full bg-[#232336]">
              <div className="h-3 w-[82%] rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600" />
            </div>
          </div>

          <div>
            <div className="mb-2 flex justify-between">
              <span>Learning Goal</span>
              <span>65%</span>
            </div>

            <div className="h-3 rounded-full bg-[#232336]">
              <div className="h-3 w-[65%] rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600" />
            </div>
          </div>

          <div>
            <div className="mb-2 flex justify-between">
              <span>Bookmarks Completed</span>
              <span>45%</span>
            </div>

            <div className="h-3 rounded-full bg-[#232336]">
              <div className="h-3 w-[45%] rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600" />
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}