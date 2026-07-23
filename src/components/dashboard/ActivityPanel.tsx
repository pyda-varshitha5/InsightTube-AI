"use client";

import {
  Bell,
  Trophy,
  Target,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const activities = [
  {
    title: "React Hooks Summary Completed",
    time: "15 min ago",
    color: "bg-green-500",
  },
  {
    title: "Quiz Generated Successfully",
    time: "1 hour ago",
    color: "bg-violet-500",
  },
  {
    title: "Machine Learning Saved",
    time: "Yesterday",
    color: "bg-blue-500",
  },
];

export default function ActivityPanel() {
  return (
    <div className="space-y-6">

      {/* Today's Goal */}

      <div className="rounded-3xl border border-[#232336] bg-[#111117] p-6">

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600">

            <Target size={22} />

          </div>

          <div>

            <h2 className="font-semibold text-lg">
              Today's Goal
            </h2>

            <p className="text-sm text-gray-400">
              Complete 5 summaries
            </p>

          </div>

        </div>

        <div className="mt-6">

          <div className="flex justify-between text-sm">

            <span>Progress</span>

            <span className="text-violet-400">
              3 / 5
            </span>

          </div>

          <div className="mt-3 h-3 rounded-full bg-[#222233]">

            <div className="h-3 w-[60%] rounded-full bg-gradient-to-r from-violet-500 to-purple-600" />

          </div>

        </div>

      </div>

      {/* Recent Activity */}

      <div className="rounded-3xl border border-[#232336] bg-[#111117] p-6">

        <div className="flex items-center gap-3 mb-5">

          <Bell className="text-violet-400" />

          <h2 className="text-lg font-semibold">
            Recent Activity
          </h2>

        </div>

        <div className="space-y-4">

          {activities.map((activity) => (

            <div
              key={activity.title}
              className="flex gap-3"
            >

              <div
                className={`mt-2 h-3 w-3 rounded-full ${activity.color}`}
              />

              <div>

                <p className="text-sm font-medium">
                  {activity.title}
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  {activity.time}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Achievement */}

      <div className="rounded-3xl bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 p-6 shadow-xl shadow-violet-500/20">

        <Trophy size={30} />

        <h2 className="mt-5 text-xl font-bold">

          Achievement

        </h2>

        <p className="mt-2 text-sm text-violet-100">

          You've saved more than

          <span className="font-bold">

            {" "}120 hours

          </span>

          {" "}using InsightTube AI.

        </p>

        <div className="mt-6 flex items-center gap-2">

          <CheckCircle2 size={18} />

          <span className="text-sm">

            Top 5% Learner

          </span>

        </div>

      </div>

      {/* AI Suggestion */}

      <div className="rounded-3xl border border-violet-500/20 bg-[#111117] p-6">

        <div className="flex items-center gap-3">

          <Sparkles className="text-violet-400" />

          <h2 className="font-semibold">

            AI Suggestion

          </h2>

        </div>

        <p className="mt-4 text-sm text-gray-400 leading-6">

          Based on your learning history,

          you should continue with

          <span className="text-violet-400 font-medium">

            {" "}Advanced React Patterns

          </span>

          for better understanding.

        </p>

        <button className="mt-5 flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-3 hover:bg-violet-500 transition">

          Explore

          <ArrowRight size={16} />

        </button>

      </div>

    </div>
  );
}