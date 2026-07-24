"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { auth } from "@/shared/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  LayoutDashboard,
  Search,
  History,
  Bookmark,
  BookmarkCheck,
  BarChart3,
  Settings,
  Sparkles,
  FolderOpen,
  ChevronRight,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
  name: "New Search",
  href: "/dashboard/new-search",
  icon: Search,
},
  {
    name: "History",
    href: "/history",
    icon: History,
  },
  {
    name: "Saved",
    href: "/saved",
    icon: Bookmark,
  },
  {
    name: "Bookmarks",
    href: "/bookmarks",
    icon: BookmarkCheck,
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
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
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-[300px] flex-col justify-between border-r border-violet-500/10 bg-[#09090F]">

      {/* ========================= */}
      {/* TOP SECTION */}
      {/* ========================= */}

      <div>

        {/* Logo */}

        <div className="border-b border-violet-500/10 px-7 py-7">

          <Link href="/dashboard">

            <div className="flex items-center gap-4 cursor-pointer">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-purple-600 to-fuchsia-600 shadow-[0_0_30px_rgba(139,92,246,0.45)]">

                <Sparkles className="h-5 w-5 text-white" />

              </div>

              <div>

                <h1 className="text-xl font-bold tracking-tight text-white">

                  Insight<span className="text-violet-400">Tube</span>{" "}
                  <span className="text-gray-300">AI</span>

                </h1>

                <p className="mt-1 text-sm tracking-[0.2em] text-gray-500">

                  AI Learning Platform

                </p>

              </div>

            </div>

          </Link>

        </div>

        {/* Navigation */}

        <nav className="mt-8 px-4">

          <p className="mb-3 px-3  font-semibold uppercase tracking-[0.2em] text-gray-500">

            Main Menu

          </p>

          <div className="space-y-2">

            {menuItems.map((item) => {

              const Icon = item.icon;

              const active = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group relative flex items-center gap-4 rounded-2xl px-4 py-3.5 transition-all duration-300

                  ${
                    active
                      ? "bg-gradient-to-r from-violet-600 to-purple-500 text-white shadow-lg shadow-violet-600/20"
                      : "text-gray-400 hover:bg-[#14141E] hover:text-white"
                  }`}
                >
                  {/* Active Indicator */}

                  {active && (
                    <div className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full bg-white" />
                  )}

                  <Icon
                    className={`h-5 w-5 transition-transform duration-300 ${
                      active ? "scale-110" : "group-hover:scale-110"
                    }`}
                  />

                  <span className="flex-1 text-base font-medium font-medium">
                    {item.name}
                  </span>

                  <ChevronRight
                    className={`h-4 w-4 transition-all ${
                      active
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              );
            })}
                      </div>
        </nav>
      </div>

      {/* ========================= */}
      {/* BOTTOM SECTION */}
      {/* ========================= */}

      <div className="border-t border-violet-500/10 p-5 space-y-5">

        
        {/* Profile */}

        <div className="rounded-2xl border border-white/5 bg-[#12121B] p-4 transition-all duration-300 hover:border-violet-500/30 hover:bg-[#171722]">

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-600 text-base font-medium font-bold text-white shadow-lg">

              {initials}

            </div>

            <div className="flex-1">

              <h4 className="font-semibold text-white">
                {displayName}
              </h4>

              <p className="text-sm tracking-[0.2em]- text-gray-400">
                Premium Member
              </p>

            </div>

            <FolderOpen className="h-5 w-5 text-gray-500 transition hover:text-violet-400" />

          </div>

        </div>

      </div>

    </aside>
  );
}