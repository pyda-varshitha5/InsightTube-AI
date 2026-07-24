"use client";

import { useEffect, useState } from "react";
import { CalendarDays, Sparkles, Flame } from "lucide-react";
import { auth } from "@/shared/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function Greeting() {
  const [name, setName] = useState("User");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user?.displayName) return;

      const parts = user.displayName.trim().split(" ");

      // Show only last name
      setName(parts[parts.length - 1]);
    });

    return () => unsubscribe();
  }, []);

  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 17
      ? "Good Afternoon"
      : "Good Evening";

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="flex flex-col gap-6 rounded-3xl border border-violet-500/10 bg-[#111117] p-8 lg:flex-row lg:items-center lg:justify-between">

      <div>

        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
          <Sparkles size={16} />
          InsightTube AI
        </div>

        <h1 className="text-4xl font-bold leading-tight text-white">
          {greeting},
          <span className="text-violet-400">
            {" "}{name} 👋
          </span>
        </h1>

        <p className="mt-3 max-w-2xl text-gray-400">
          Ready to explore something new today?
          Search any YouTube topic and let AI generate a
          complete summary from the best videos.
        </p>

      </div>

      <div className="flex flex-col gap-4">

        <div className="flex items-center gap-3 rounded-2xl border border-[#232336] bg-[#181820] px-5 py-4">

          <CalendarDays className="text-violet-400" size={22} />

          <div>
            <p className="text-xs text-gray-400">
              Today
            </p>

            <p className="font-medium text-white">
              {today}
            </p>
          </div>

        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-[#232336] bg-[#181820] px-5 py-4">

          <Flame className="text-orange-400" size={22} />

          <div>
            <p className="text-xs text-gray-400">
              Learning Streak
            </p>

            <p className="font-semibold text-white">
              12 Days 🔥
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}