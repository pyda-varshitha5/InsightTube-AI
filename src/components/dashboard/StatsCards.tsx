"use client";

import {
  Clock3,
  BookOpen,
  Brain,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    title: "AI Summaries",
    value: "248",
    change: "+18%",
    description: "Generated this month",
    icon: Brain,
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Hours Saved",
    value: "126h",
    change: "+24%",
    description: "Learning time",
    icon: Clock3,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Topics Learned",
    value: "84",
    change: "+12%",
    description: "Knowledge gained",
    icon: BookOpen,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Learning Score",
    value: "94%",
    change: "+7%",
    description: "This week",
    icon: TrendingUp,
    color: "from-emerald-500 to-green-500",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-4 gap-6">

      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="group rounded-3xl border border-[#232336] bg-[#111117] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-500/10"
          >

            {/* Top */}

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-gray-400">
                  {item.title}
                </p>

                <h2 className="mt-3 text-3xl font-bold">
                  {item.value}
                </h2>

              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color}`}
              >
                <Icon size={24} />
              </div>

            </div>

            {/* Bottom */}

            <div className="mt-8 flex items-center justify-between">

              <p className="text-xs text-gray-500">
                {item.description}
              </p>

              <span className="rounded-full bg-green-500/15 px-3 py-1 text-xs font-semibold text-green-400">
                {item.change}
              </span>

            </div>

          </div>
        );
      })}

    </div>
  );
}