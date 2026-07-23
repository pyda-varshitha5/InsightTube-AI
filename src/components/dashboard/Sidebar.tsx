"use client";

import Link from "next/link";
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
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    active: true,
  },
  {
    name: "New Search",
    icon: Search,
    href: "#",
  },
  {
    name: "History",
    icon: History,
    href: "#",
  },
  {
    name: "Saved",
    icon: Bookmark,
    href: "#",
  },
  {
    name: "Bookmarks",
    icon: BookmarkCheck,
    href: "#",
  },
  {
    name: "Analytics",
    icon: BarChart3,
    href: "#",
  },
  {
    name: "Settings",
    icon: Settings,
    href: "#",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-[260px] min-h-screen bg-[#0D0D17] border-r border-[#222233] flex flex-col justify-between">

      {/* Top */}
      <div>

        {/* Logo */}

        <div className="px-6 py-7">

          <div className="flex items-center gap-3">

            <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center shadow-lg shadow-violet-500/30">

              <Sparkles size={18} />

            </div>

            <div>

              <h1 className="text-lg font-bold">

                Insight<span className="text-violet-400">Tube</span> AI

              </h1>

            </div>

          </div>

        </div>

        {/* Menu */}

        <nav className="px-4 space-y-2">

          {menuItems.map((item) => {

            const Icon = item.icon;

            return (

              <Link
                href={item.href}
                key={item.name}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all

                ${
                  item.active
                    ? "bg-violet-600 text-white shadow-lg shadow-violet-500/20"
                    : "text-gray-400 hover:bg-[#181824] hover:text-white"
                }`}
              >

                <Icon size={18} />

                <span className="text-sm">{item.name}</span>

              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom */}

      <div className="p-4 space-y-4">

        {/* Upgrade Card */}

        <div className="rounded-2xl bg-gradient-to-br from-[#1E1633] to-[#131321] border border-violet-500/20 p-5">

          <div className="h-10 w-10 rounded-xl bg-violet-600 flex items-center justify-center mb-4">

            <Sparkles size={18} />

          </div>

          <h3 className="font-semibold">

            Upgrade to Pro

          </h3>

          <p className="text-xs text-gray-400 mt-2 leading-5">

            Unlock unlimited searches,
            PDF export and AI features.

          </p>

          <button className="mt-5 w-full rounded-xl bg-violet-600 py-2.5 font-medium hover:bg-violet-500 transition">

            Upgrade Now

          </button>

        </div>

        {/* Profile */}

        <div className="rounded-2xl border border-[#222233] bg-[#12121D] p-3 flex items-center gap-3">

          <div className="h-12 w-12 rounded-full bg-violet-600 flex items-center justify-center font-bold">

            V

          </div>

          <div className="flex-1">

            <p className="font-medium">

              Varshitha P.

            </p>

            <p className="text-xs text-gray-400">

              Free Plan

            </p>

          </div>

          <FolderOpen
            size={18}
            className="text-gray-500"
          />

        </div>

      </div>

    </aside>
  );
}