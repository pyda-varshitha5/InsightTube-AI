"use client";

import {
  CheckCircle2,
  Clock3,
  Flame,
  Trophy,
  CalendarDays,
} from "lucide-react";

const activities = [
  {
    title: "React Hooks Summary",
    time: "10 mins ago",
    icon: CheckCircle2,
    color: "text-emerald-400",
  },
  {
    title: "Machine Learning Quiz",
    time: "1 hour ago",
    icon: Trophy,
    color: "text-yellow-400",
  },
  {
    title: "DBMS Notes Generated",
    time: "Yesterday",
    icon: CheckCircle2,
    color: "text-violet-400",
  },
];

const tasks = [
  "Watch 1 AI video",
  "Complete React Quiz",
  "Read DBMS Notes",
];

export default function ActivityPanel() {
  return (
    <div className="space-y-6">

      {/* Recent Activity */}

      <div className="rounded-3xl border border-[#232336] bg-[#111117] p-6">

        <h2 className="text-2xl font-bold text-white">
          Recent Activity
        </h2>

        <p className="mt-1 text-sm text-gray-400">
          Your latest learning updates
        </p>

        <div className="mt-6 space-y-5">

          {activities.map((activity) => {
            const Icon = activity.icon;

            return (
              <div
                key={activity.title}
                className="flex items-start gap-4"
              >
                <div className="mt-1">
                  <Icon
                    size={20}
                    className={activity.color}
                  />
                </div>

                <div>

                  <h3 className="font-medium text-white">
                    {activity.title}
                  </h3>

                  <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                    <Clock3 size={14} />
                    {activity.time}
                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>

      {/* Today's Goals */}

      <div className="rounded-3xl border border-[#232336] bg-[#111117] p-6">

        <div className="flex items-center gap-3">

          <CalendarDays
            className="text-violet-400"
            size={22}
          />

          <h2 className="text-xl font-bold">
            Today's Goals
          </h2>

        </div>

        <div className="mt-6 space-y-4">

          {tasks.map((task) => (

            <div
              key={task}
              className="flex items-center justify-between rounded-2xl bg-[#181820] p-4"
            >

              <span className="text-gray-300">
                {task}
              </span>

              <CheckCircle2
                size={18}
                className="text-gray-600"
              />

            </div>

          ))}

        </div>

      </div>

      {/* Learning Streak */}

      <div className="rounded-3xl bg-gradient-to-br from-violet-600 to-purple-700 p-6">

        <div className="flex items-center gap-3">

          <Flame
            size={28}
            className="text-orange-300"
          />

          <div>

            <p className="text-sm text-violet-100">
              Current Streak
            </p>

            <h2 className="text-3xl font-bold text-white">
              12 Days 🔥
            </h2>

          </div>

        </div>

        <p className="mt-4 text-sm text-violet-100">
          You're doing great! Keep learning every day to maintain your streak.
        </p>

      </div>

    </div>
  );
}