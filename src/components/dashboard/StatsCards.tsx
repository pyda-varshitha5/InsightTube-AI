"use client";

import {
  Brain,
  Clock3,
  BookOpen,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    title: "AI Summaries",
    value: "248",
    subtitle: "Generated this month",
    icon: Brain,
    iconBg: "bg-violet-600",
    growth: "+18%",
  },
  {
    title: "Hours Saved",
    value: "126h",
    subtitle: "Learning time saved",
    icon: Clock3,
    iconBg: "bg-sky-500",
    growth: "+24%",
  },
  {
    title: "Topics Learned",
    value: "84",
    subtitle: "Knowledge gained",
    icon: BookOpen,
    iconBg: "bg-pink-500",
    growth: "+12%",
  },
  {
    title: "Learning Score",
    value: "94%",
    subtitle: "Performance",
    icon: TrendingUp,
    iconBg: "bg-emerald-500",
    growth: "+7%",
  },
];

export default function StatsCards() {
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-2xl border border-[#232336] bg-[#111117] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50"
          >
            {/* Top */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-400">
                  {stat.title}
                </p>

                <h2 className="mt-3 text-5xl font-bold text-white">
                  {stat.value}
                </h2>
              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${stat.iconBg}`}
              >
                <Icon size={28} className="text-white" />
              </div>
            </div>

            {/* Bottom */}
            <div className="mt-8 flex items-center justify-between">
              <p className="text-sm text-gray-500">
                {stat.subtitle}
              </p>

              <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-semibold text-emerald-400">
                {stat.growth}
              </span>
            </div>
          </div>
        );
      })}
    </section>
  );
}