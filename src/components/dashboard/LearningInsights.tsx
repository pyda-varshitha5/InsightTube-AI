"use client";

import {
  TrendingUp,
  Flame,
  Brain,
  Clock3,
} from "lucide-react";

const insights = [
  {
    title: "Learning Streak",
    value: "18 Days",
    icon: Flame,
    color: "text-orange-400",
  },
  {
    title: "Topics Learned",
    value: "84",
    icon: Brain,
    color: "text-violet-400",
  },
  {
    title: "Watch Time Saved",
    value: "126 hrs",
    icon: Clock3,
    color: "text-cyan-400",
  },
];

export default function LearningInsights() {
  return (
    <div className="rounded-3xl border border-[#232336] bg-[#111117] p-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-xl font-bold">
            Learning Insights
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            Your weekly progress
          </p>

        </div>

        <TrendingUp className="text-violet-400" size={24} />

      </div>

      {/* Fake Chart */}

      <div className="mt-8">

        <div className="flex h-40 items-end justify-between gap-3">

          {[45, 80, 60, 110, 75, 130, 95].map((height, index) => (

            <div
              key={index}
              className="flex-1 rounded-full bg-gradient-to-t from-violet-600 to-purple-400 transition-all hover:opacity-80"
              style={{
                height: `${height}px`,
              }}
            />

          ))}

        </div>

        <div className="mt-3 flex justify-between text-xs text-gray-500">

          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>

        </div>

      </div>

      {/* Progress */}

      <div className="mt-8">

        <div className="flex justify-between">

          <span className="text-sm">
            Weekly Goal
          </span>

          <span className="text-violet-400">
            82%
          </span>

        </div>

        <div className="mt-3 h-3 rounded-full bg-[#1E1E2C]">

          <div className="h-3 w-[82%] rounded-full bg-gradient-to-r from-violet-500 to-purple-500" />

        </div>

      </div>

      {/* Stats */}

      <div className="mt-8 space-y-4">

        {insights.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="flex items-center justify-between rounded-2xl bg-[#181820] p-4"
            >

              <div className="flex items-center gap-3">

                <div className="rounded-xl bg-[#232336] p-3">

                  <Icon
                    size={18}
                    className={item.color}
                  />

                </div>

                <div>

                  <p className="text-sm text-gray-400">

                    {item.title}

                  </p>

                  <h4 className="font-semibold">

                    {item.value}

                  </h4>

                </div>

              </div>

            </div>

          );

        })}

      </div>

    </div>
  );
}