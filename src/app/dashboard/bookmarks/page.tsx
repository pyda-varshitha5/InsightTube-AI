"use client";

import Image from "next/image";
import {
  Bookmark,
  Clock,
  PlayCircle,
} from "lucide-react";

const bookmarkedVideos = [
  {
    id: 1,
    title: "React Hooks Complete Tutorial",
    channel: "CodeWithHarry",
    duration: "48 mins",
    thumbnail: "https://i.ytimg.com/vi/O6P86uwfdR0/hqdefault.jpg",
  },
  {
    id: 2,
    title: "Python Full Course",
    channel: "Programming with Mosh",
    duration: "6 hrs",
    thumbnail: "https://i.ytimg.com/vi/_uQrJ0TkZlc/hqdefault.jpg",
  },
  {
    id: 3,
    title: "MongoDB Crash Course",
    channel: "Traversy Media",
    duration: "1 hr",
    thumbnail: "https://i.ytimg.com/vi/-56x56UppqQ/hqdefault.jpg",
  },
];

export default function BookmarksPage() {
  return (
    <div className="min-h-screen bg-[#0B0B12] p-8 text-white">

      <div className="mb-8 flex items-center gap-4">

        <div className="rounded-xl bg-violet-600/20 p-4">
          <Bookmark className="h-8 w-8 text-violet-400" />
        </div>

        <div>
          <h1 className="text-3xl font-bold">
            Bookmarked Videos
          </h1>

          <p className="mt-1 text-gray-400">
            Quickly access your favourite learning videos.
          </p>
        </div>

      </div>

      <div className="space-y-5">

        {bookmarkedVideos.map((video) => (

          <div
            key={video.id}
            className="flex items-center gap-6 rounded-2xl border border-violet-500/10 bg-[#151520] p-5 transition hover:border-violet-500/30 hover:bg-[#1A1A28]"
          >

            <Image
              src={video.thumbnail}
              alt={video.title}
              width={220}
              height={130}
              className="rounded-xl object-cover"
            />

            <div className="flex-1">

              <h2 className="text-xl font-semibold">
                {video.title}
              </h2>

              <p className="mt-2 text-gray-400">
                {video.channel}
              </p>

              <div className="mt-4 flex items-center gap-6 text-sm text-gray-400">

                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {video.duration}
                </div>

                <div className="flex items-center gap-2">
                  <PlayCircle className="h-4 w-4" />
                  Watch Anytime
                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}