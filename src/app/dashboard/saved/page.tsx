"use client";

import {
  Bookmark,
  FileText,
  Calendar,
} from "lucide-react";

const savedSummaries = [
  {
    id: 1,
    title: "React Hooks Explained",
    date: "Saved Today",
  },
  {
    id: 2,
    title: "Python for Beginners",
    date: "Yesterday",
  },
  {
    id: 3,
    title: "MongoDB Crash Course",
    date: "3 Days Ago",
  },
];

export default function SavedPage() {
  return (
    <div className="min-h-screen bg-[#0B0B12] p-8 text-white">

      <div className="mb-8 flex items-center gap-4">
        <div className="rounded-xl bg-violet-600/20 p-4">
          <Bookmark className="h-8 w-8 text-violet-400" />
        </div>

        <div>
          <h1 className="text-3xl font-bold">
            Saved Summaries
          </h1>

          <p className="mt-1 text-gray-400">
            Access all your saved AI summaries.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {savedSummaries.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-2xl border border-violet-500/10 bg-[#151520] p-5 transition hover:border-violet-500/30 hover:bg-[#1A1A28]"
          >
            <div className="flex items-center gap-4">

              <div className="rounded-xl bg-violet-600/15 p-3">
                <FileText className="h-6 w-6 text-violet-400" />
              </div>

              <div>
                <h2 className="text-lg font-semibold">
                  {item.title}
                </h2>

                <div className="mt-1 flex items-center gap-2 text-sm text-gray-400">
                  <Calendar className="h-4 w-4" />
                  {item.date}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}