"use client";

import {
  Search,
  Bell,
  Sun,
} from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-20 border-b border-[#222233] bg-[#09090B] px-8 flex items-center justify-between">

      {/* Search Bar */}
      <div className="relative w-[500px]">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
        />

        <input
          type="text"
          placeholder="Search any topic, e.g. 'React Hooks', 'Python Pandas'..."
          className="w-full rounded-xl border border-[#26263A] bg-[#111117] py-3 pl-12 pr-4 text-sm text-white outline-none transition-all focus:border-violet-500"
        />

      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">

        {/* Theme Button */}

        <button className="rounded-full border border-[#26263A] bg-[#111117] p-3 hover:border-violet-500 transition">

          <Sun size={18} />

        </button>

        {/* Notification */}

        <div className="relative">

          <button className="rounded-full border border-[#26263A] bg-[#111117] p-3 hover:border-violet-500 transition">

            <Bell size={18} />

          </button>

          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-violet-600 text-[10px] font-bold">
            3
          </span>

        </div>

        {/* Avatar */}

        <div className="flex items-center gap-3">

          <div className="h-11 w-11 rounded-full bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center text-sm font-bold shadow-lg shadow-violet-500/20">

            VP

          </div>

        </div>

      </div>

    </header>
  );
}