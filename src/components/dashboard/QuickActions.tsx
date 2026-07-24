"use client";

import {
  FileText,
  Brain,
  Bookmark,
  Download,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const actions = [
  {
    title: "Generate Notes",
    icon: FileText,
    color: "bg-sky-500",
  },
  {
    title: "Create Quiz",
    icon: Brain,
    color: "bg-violet-600",
  },
  {
    title: "Saved Summaries",
    icon: Bookmark,
    color: "bg-pink-500",
  },
  {
    title: "Export PDF",
    icon: Download,
    color: "bg-emerald-500",
  },
];

export default function QuickActions() {
  return (
    <div className="rounded-2xl border border-[#232336] bg-[#111117] p-5">

      {/* Header */}

      <div className="mb-5 flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600">

          <Sparkles size={18} className="text-white" />

        </div>

        <div>

          <h2 className="text-lg font-semibold text-white">
            Quick Actions
          </h2>

          <p className="text-xs text-gray-400">
            One-click AI tools
          </p>

        </div>

      </div>

      {/* Buttons */}

      <div className="space-y-3">

        {actions.map((action) => {

          const Icon = action.icon;

          return (

            <button
              key={action.title}
              className="flex w-full items-center justify-between rounded-xl border border-[#232336] bg-[#181820] px-4 py-3 transition-all duration-300 hover:border-violet-500 hover:bg-[#1C1C27]"
            >

              <div className="flex items-center gap-3">

                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg ${action.color}`}
                >
                  <Icon size={18} className="text-white" />
                </div>

                <span className="text-sm font-medium text-white">
                  {action.title}
                </span>

              </div>

              <ArrowRight
                size={16}
                className="text-gray-500"
              />

            </button>

          );

        })}

      </div>

    </div>
  );
}