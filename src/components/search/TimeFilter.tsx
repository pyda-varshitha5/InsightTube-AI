"use client";

import { useState } from "react";

const filters = [
  "Today",
  "This Week",
  "This Month",
  "This Year",
  "All Time",
];

export default function TimeFilter() {
  const [active, setActive] = useState("This Week");

  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">

      {filters.map((filter) => (

        <button
          key={filter}
          onClick={() => setActive(filter)}
          className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300

            ${
              active === filter
                ? "border-violet-500 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-[0_0_25px_rgba(139,92,246,0.35)]"
                : "border-white/10 bg-[#1A1A25] text-gray-400 hover:border-violet-500/40 hover:bg-[#222233] hover:text-white"
            }`}
        >
          {filter}
        </button>

      ))}

    </div>
  );
}