"use client";

import { LucideIcon } from "lucide-react";

interface TopicCardProps {
  title: string;
  description: string;
  searches: string;
  Icon: LucideIcon;
}

export default function TopicCard({
  title,
  description,
  searches,
  Icon,
}: TopicCardProps) {
 return (
  <div className="group rounded-2xl border border-white/5 bg-[#171723] px-5 py-4 transition-all duration-300 hover:border-violet-500/30 hover:bg-[#1B1B29]">

    <div className="flex gap-4">

      {/* Icon */}

      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600/20">

        <Icon className="h-5 w-5 text-violet-400" />

      </div>

      {/* Content */}

      <div className="flex-1">

        <h3 className="text-[18px] font-semibold text-white">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-gray-400">
          {description}
        </p>

        <p className="mt-3 text-xs text-gray-500">
          🔥 {searches}
        </p>

      </div>

    </div>

  </div>
);
}