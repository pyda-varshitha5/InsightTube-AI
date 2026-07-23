"use client";

import {
  BrainCircuit,
  Search,
  FileText,
  Bookmark,
  BarChart3,
  Clock3,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    title: "AI-Powered Smart Summaries",
    description:
      "Get one concise, structured summary generated from the top YouTube videos instead of watching hours of repetitive content.",
    icon: BrainCircuit,
    reverse: false,
  },
  {
    title: "Search Any Topic",
    description:
      "Simply type any topic. InsightTube AI automatically finds the most relevant and popular videos before generating insights.",
    icon: Search,
    reverse: true,
  },
  {
    title: "Structured Learning Notes",
    description:
      "Receive clean notes with key concepts, examples, important takeaways and actionable insights for faster revision.",
    icon: FileText,
    reverse: false,
  },
  {
    title: "Save Your Learning",
    description:
      "Bookmark summaries and organize them into your personal library for quick access whenever you need them.",
    icon: Bookmark,
    reverse: true,
  },
  {
    title: "Learning Analytics",
    description:
      "Track your completed summaries, learning streaks and total time saved using beautiful dashboard analytics.",
    icon: BarChart3,
    reverse: false,
  },
  {
    title: "Save Hours Every Week",
    description:
      "Reduce information overload and learn in minutes instead of spending hours watching multiple videos.",
    icon: Clock3,
    reverse: true,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative py-32 overflow-hidden bg-[#050505]"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-40 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            Features
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl">
            Everything You Need
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
              To Learn Faster
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            InsightTube AI combines intelligent search, AI summarization and
            personalized learning into one modern platform.
          </p>

        </div>

        {/* Feature Blocks */}

        <div className="mt-28 space-y-28">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (

              <div
                key={feature.title}
                className={`grid items-center gap-16 lg:grid-cols-2 ${
                  feature.reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >

                {/* Text */}

                <div>

                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-purple-600 shadow-lg shadow-violet-600/30">

                    <Icon className="h-8 w-8 text-white" />

                  </div>

                  <h3 className="text-4xl font-bold text-white">

                    {feature.title}

                  </h3>

                  <p className="mt-6 text-lg leading-8 text-zinc-400">

                    {feature.description}

                  </p>

                  <button className="group mt-8 flex items-center gap-2 text-violet-400 transition hover:text-white">

                    Learn More

                    <ArrowRight
                      className="transition group-hover:translate-x-1"
                      size={18}
                    />

                  </button>

                </div>

                {/* Preview Card */}

                <div className="group">

                  <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-violet-500/40 hover:shadow-[0_20px_80px_rgba(139,92,246,0.25)]">

                    {/* Window */}

                    <div className="mb-8 flex gap-3">

                      <div className="h-3 w-3 rounded-full bg-red-500" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500" />
                      <div className="h-3 w-3 rounded-full bg-green-500" />

                    </div>

                    <div className="space-y-5">

                      <div className="h-5 w-40 rounded bg-violet-500/30" />

                      <div className="h-4 w-full rounded bg-white/10" />

                      <div className="h-4 w-10/12 rounded bg-white/10" />

                      <div className="h-4 w-8/12 rounded bg-white/10" />

                      <div className="mt-10 rounded-2xl border border-violet-500/20 bg-violet-500/10 p-6">

                        <div className="mb-4 h-5 w-36 rounded bg-violet-500/40" />

                        <div className="space-y-3">

                          <div className="h-3 rounded bg-white/10" />

                          <div className="h-3 w-11/12 rounded bg-white/10" />

                          <div className="h-3 w-9/12 rounded bg-white/10" />

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            );
          })}

        </div>

      </div>

    </section>
  );
}