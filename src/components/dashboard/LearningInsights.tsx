"use client";

import {
  Flame,
  BookOpen,
  Clock3,
  BarChart3,
} from "lucide-react";

const chart = [28, 52, 40, 74, 46, 88, 62];

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function LearningInsights() {
  return (
    <div className="rounded-2xl border border-[#232336] bg-[#111117] p-5">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-lg font-semibold text-white">
            Learning Insights
          </h2>

          <p className="text-xs text-gray-400">
            Your weekly progress
          </p>

        </div>

        <BarChart3
          size={18}
          className="text-violet-400"
        />

      </div>

      {/* Weekly Chart */}

      <div className="mt-6">

        <div className="flex h-20 items-end justify-between">

          {chart.map((value, index) => (

            <div
              key={index}
              className="flex w-7 items-end justify-center"
            >

              <div
                className="w-4 rounded-full bg-gradient-to-t from-violet-600 to-purple-400"
                style={{
                  height: `${value}%`,
                }}
              />

            </div>

          ))}

        </div>

        <div className="mt-2 flex justify-between text-[11px] text-gray-500">

          {days.map((day) => (

            <span key={day}>
              {day}
            </span>

          ))}

        </div>

      </div>

      {/* Weekly Goal */}

      <div className="mt-5">

        <div className="mb-2 flex justify-between text-xs">

          <span className="text-gray-400">
            Weekly Goal
          </span>

          <span className="font-medium text-violet-400">
            82%
          </span>

        </div>

        <div className="h-2 rounded-full bg-[#232336]">

          <div className="h-2 w-[82%] rounded-full bg-violet-500" />

        </div>

      </div>

      {/* Divider */}

      <div className="my-5 border-t border-[#232336]" />

      {/* Stats */}

      <div className="space-y-4">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <Flame
              size={18}
              className="text-orange-400"
            />

            <span className="text-sm text-gray-300">
              Learning Streak
            </span>

          </div>

          <span className="font-semibold text-white">
            12 Days
          </span>

        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <BookOpen
              size={18}
              className="text-pink-400"
            />

            <span className="text-sm text-gray-300">
              Topics Learned
            </span>

          </div>

          <span className="font-semibold text-white">
            84
          </span>

        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <Clock3
              size={18}
              className="text-sky-400"
            />

            <span className="text-sm text-gray-300">
              Watch Time Saved
            </span>

          </div>

          <span className="font-semibold text-white">
            126 hrs
          </span>

        </div>

      </div>

    </div>
  );
}