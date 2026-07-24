"use client";

import { useEffect, useState } from "react";
import { Bell, ChevronDown } from "lucide-react";
import { auth } from "@/shared/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function Navbar() {
  const [displayName, setDisplayName] = useState("User");
  const [initials, setInitials] = useState("U");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user?.displayName) return;

      const parts = user.displayName.trim().split(" ");

      // Show last name
      setDisplayName(parts[parts.length - 1]);

      // Initials
      const first = parts[0][0];

      const second =
        parts.length > 1
          ? parts[1][0]
          : "";

      setInitials(
        `${first}${second}`.toUpperCase()
      );
    });

    return () => unsubscribe();
  }, []);

  return (
    <header className="sticky top-0 z-40 h-16 border-b border-[#232336] bg-[#0F0F16]/95 backdrop-blur-md">
      <div className="flex h-full items-center justify-end px-6">

        <div className="flex items-center gap-4">

          <button className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-[#232336] bg-[#171721] hover:border-violet-500">

            <Bell
              size={20}
              className="text-white"
            />

            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-violet-500"></span>

          </button>

          <button className="flex items-center gap-3 rounded-xl border border-[#232336] bg-[#171721] px-3 py-2 hover:border-violet-500">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-500 font-bold text-white">
              {initials}
            </div>

            <div className="text-left">

              <h3 className="text-sm font-semibold text-white">
                {displayName}
              </h3>

              <p className="text-xs text-violet-300">
                Premium Member
              </p>

            </div>

            <ChevronDown
              size={18}
              className="text-gray-400"
            />

          </button>

        </div>

      </div>
    </header>
  );
}