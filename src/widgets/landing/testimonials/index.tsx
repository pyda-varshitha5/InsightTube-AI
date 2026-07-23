"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Computer Science Student",
    initials: "AS",
    review:
      "InsightTube AI helped me understand difficult topics in minutes. Instead of watching multiple YouTube videos, I now get one clean summary.",
  },
  {
    name: "Priya Reddy",
    role: "Frontend Developer",
    initials: "PR",
    review:
      "The dashboard is beautiful and the AI summaries are surprisingly accurate. It saves me hours every week while learning new technologies.",
  },
  {
    name: "Rahul Verma",
    role: "Placement Aspirant",
    initials: "RV",
    review:
      "Perfect for interview preparation. I can revise complete topics much faster using structured AI summaries and bookmarks.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#050505] py-32"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            Testimonials
          </span>

          <h2 className="mt-8 text-5xl font-black text-white md:text-6xl">
            Loved By
            <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
              {" "}Thousands Of Learners
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            See what students, developers and professionals say about
            InsightTube AI.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-24 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item) => (

            <div
              key={item.name}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-violet-500/40 hover:bg-violet-500/10 hover:shadow-[0_20px_60px_rgba(139,92,246,.25)]"
            >

              {/* Quote */}

              <Quote className="mb-6 h-10 w-10 text-violet-400 opacity-70" />

              {/* Stars */}

              <div className="mb-6 flex gap-1">

                {[1, 2, 3, 4, 5].map((star) => (

                  <Star
                    key={star}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />

                ))}

              </div>

              {/* Review */}

              <p className="text-lg leading-8 text-zinc-300">

                "{item.review}"

              </p>

              {/* User */}

              <div className="mt-10 flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-600 text-lg font-bold text-white">

                  {item.initials}

                </div>

                <div>

                  <h4 className="font-semibold text-white">

                    {item.name}

                  </h4>

                  <p className="text-sm text-zinc-400">

                    {item.role}

                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom Stats */}

        <div className="mt-24 grid gap-8 rounded-3xl border border-white/10 bg-gradient-to-r from-violet-600/10 via-purple-600/10 to-indigo-600/10 p-10 md:grid-cols-3">

          <div className="text-center">

            <h3 className="text-5xl font-black text-white">

              4.9★

            </h3>

            <p className="mt-2 text-zinc-400">

              Average Rating

            </p>

          </div>

          <div className="text-center">

            <h3 className="text-5xl font-black text-white">

              50K+

            </h3>

            <p className="mt-2 text-zinc-400">

              Happy Learners

            </p>

          </div>

          <div className="text-center">

            <h3 className="text-5xl font-black text-white">

              98%

            </h3>

            <p className="mt-2 text-zinc-400">

              Would Recommend

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}