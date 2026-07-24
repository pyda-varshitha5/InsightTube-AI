"use client";

import {
  History,
  Search,
  Clock3,
} from "lucide-react";

const history = [
  {
    id: 1,
    topic: "React Hooks",
    time: "2 hours ago",
  },
  {
    id: 2,
    topic: "Python Full Course",
    time: "Yesterday",
  },
  {
    id: 3,
    topic: "Machine Learning Basics",
    time: "3 days ago",
  },
  {
    id: 4,
    topic: "Next.js Authentication",
    time: "Last Week",
  },
];

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-[#0B0B12] p-8 text-white">

      <div className="mb-8 flex items-center gap-4">

        <div className="rounded-xl bg-violet-600/20 p-4">
          <History className="h-8 w-8 text-violet-400" />
        </div>

        <div>
          <h1 className="text-3xl font-bold">
            Search History
          </h1>

          <p className="mt-1 text-gray-400">
            View all your previous searches.
          </p>
        </div>

      </div>

      <div className="space-y-4">

        {history.map((item) => (

          <div
            key={item.id}
            className="flex items-center justify-between rounded-2xl border border-violet-500/10 bg-[#151520] p-5 transition hover:border-violet-500/30 hover:bg-[#1A1A28]"
          >

            <div className="flex items-center gap-4">

              <div className="rounded-xl bg-violet-600/15 p-3">
                <Search className="h-6 w-6 text-violet-400" />
              </div>

              <div>

                <h2 className="text-lg font-semibold">
                  {item.topic}
                </h2>

                <div className="mt-1 flex items-center gap-2 text-sm text-gray-400">

                  <Clock3 className="h-4 w-4" />

                  {item.time}

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}