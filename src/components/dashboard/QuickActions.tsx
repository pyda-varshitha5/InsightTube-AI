"use client";

import {
  FileText,
  Brain,
  Bookmark,
  Download,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const actions = [
  {
    title: "Generate Notes",
    icon: FileText,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Create Quiz",
    icon: Brain,
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Saved Summaries",
    icon: Bookmark,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Export PDF",
    icon: Download,
    color: "from-emerald-500 to-green-500",
  },
];

export default function QuickActions() {
  return (
    <div className="space-y-5">

      {/* Card */}
      <div className="rounded-3xl border border-[#232336] bg-[#111117] p-6">

        {/* Header */}
        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600">
            <Sparkles size={18} />
          </div>

          <div>
            <h2 className="text-lg font-semibold">
              Quick Actions
            </h2>

            <p className="text-xs text-gray-400">
              One-click AI tools
            </p>
          </div>

        </div>

        {/* Buttons */}
        <div className="mt-6 space-y-3">

          {actions.map((action) => {
            const Icon = action.icon;

            return (
              <button
                key={action.title}
                className="group flex w-full items-center justify-between rounded-2xl border border-[#232336] bg-[#171720] p-4 transition-all hover:border-violet-500 hover:bg-[#1B1B28]"
              >

                <div className="flex items-center gap-4">

                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${action.color}`}
                  >
                    <Icon size={20} />
                  </div>

                  <span className="text-sm font-medium">
                    {action.title}
                  </span>

                </div>

                <ArrowRight
                  size={18}
                  className="text-gray-500 transition-transform group-hover:translate-x-1"
                />

              </button>
            );
          })}

        </div>

      </div>

      {/* Premium Card */}
      <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 p-6 shadow-xl shadow-violet-500/20">

        <Sparkles size={28} />

        <h3 className="mt-5 text-xl font-bold">
          Unlock Pro AI
        </h3>

        <p className="mt-3 text-sm text-violet-100">
          Unlimited AI summaries, PDF exports, smart notes,
          quizzes and premium analytics.
        </p>

        <button className="mt-6 w-full rounded-xl bg-white py-3 font-semibold text-black transition hover:scale-[1.02]">
          Upgrade Now
        </button>

      </div>

    </div>
  );
}