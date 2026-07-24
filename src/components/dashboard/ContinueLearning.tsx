"use client";

import {
  PlayCircle,
  Clock3,
  ArrowRight,
} from "lucide-react";

const courses = [
  {
    title: "React Complete Guide",
    lesson: "Lesson 12 / 20",
    progress: 75,
    duration: "18 min",
    color: "from-violet-600 to-purple-500",
  },
  {
    title: "Machine Learning",
    lesson: "Lesson 6 / 15",
    progress: 42,
    duration: "25 min",
    color: "from-pink-500 to-rose-500",
  },
];

export default function ContinueLearning() {
  return (
    <div className="rounded-2xl border border-[#232336] bg-[#111117] p-5">

      {/* Header */}

      <div className="mb-5 flex items-center justify-between">

        <div>

          <h2 className="text-lg font-semibold text-white">
            Continue Learning
          </h2>

          <p className="text-xs text-gray-400">
            Pick up where you left off
          </p>

        </div>

        <button className="text-sm font-medium text-violet-400 hover:text-violet-300">
          View All
        </button>

      </div>

      {/* Courses */}

      <div className="space-y-4">

        {courses.map((course) => (
          <div
            key={course.title}
            className="rounded-xl border border-[#232336] bg-[#181820] p-4 transition hover:border-violet-500"
          >

            <div className="flex items-start gap-4">

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${course.color}`}
              >
                <PlayCircle size={22} className="text-white" />
              </div>

              <div className="flex-1">

                <h3 className="text-base font-semibold text-white">
                  {course.title}
                </h3>

                <p className="mt-1 text-xs text-gray-400">
                  {course.lesson}
                </p>

                {/* Progress */}

                <div className="mt-4">

                  <div className="mb-2 flex justify-between text-xs">

                    <span className="text-gray-400">
                      Progress
                    </span>

                    <span className="text-violet-400">
                      {course.progress}%
                    </span>

                  </div>

                  <div className="h-2 rounded-full bg-[#232336]">

                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-500"
                      style={{
                        width: `${course.progress}%`,
                      }}
                    />

                  </div>

                </div>

                {/* Footer */}

                <div className="mt-4 flex items-center justify-between">

                  <div className="flex items-center gap-2 text-xs text-gray-400">

                    <Clock3 size={14} />

                    {course.duration}

                  </div>

                  <button className="flex items-center gap-1 rounded-lg bg-violet-600 px-3 py-2 text-xs font-medium text-white transition hover:bg-violet-500">

                    Resume

                    <ArrowRight size={14} />

                  </button>

                </div>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}