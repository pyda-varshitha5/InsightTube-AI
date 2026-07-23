"use client";

import {
  BrainCircuit,
  PlayCircle,
  Database,
  Cpu,
  ShieldCheck,
  Zap,
} from "lucide-react";
const technologies = [
  {
    icon: <BrainCircuit className="h-7 w-7 text-violet-400" />,
    title: "Gemini AI",
    description: "AI Powered Summaries",
  },
  {
    icon: <PlayCircle className="h-7 w-7 text-red-500" />,
    title: "YouTube API",
    description: "Top Video Analysis",
  },
  {
    icon: <Database className="h-7 w-7 text-emerald-400" />,
    title: "MongoDB",
    description: "Secure Cloud Database",
  },
  {
    icon: <Cpu className="h-7 w-7 text-cyan-400" />,
    title: "Next.js",
    description: "Fast Modern Framework",
  },
];

const stats = [
  {
    value: "100K+",
    label: "Summaries Generated",
  },
  {
    value: "50K+",
    label: "Learners",
  },
  {
    value: "2M+",
    label: "Videos Processed",
  },
  {
    value: "99.9%",
    label: "Platform Uptime",
  },
];

export default function Trusted() {
  return (
    <section className="relative py-32">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-violet-400">

            Trusted Technology

          </p>

          <h2 className="text-5xl font-black text-white">

            Built With Modern AI Technologies

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">

            InsightTube AI combines the latest AI models and modern web
            technologies to transform hours of YouTube content into
            structured learning experiences.

          </p>

        </div>

        {/* Tech Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {technologies.map((tech) => (
            <div
              key={tech.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-violet-500/40 hover:bg-violet-500/10"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-black/40 transition duration-300 group-hover:scale-110">

                {tech.icon}

              </div>

              <h3 className="text-2xl font-bold text-white">

                {tech.title}

              </h3>

              <p className="mt-3 text-zinc-400">

                {tech.description}

              </p>

            </div>
          ))}

        </div>

        {/* Stats */}

        <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 text-center transition duration-300 hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(139,92,246,.20)]"
            >
              <h3 className="text-5xl font-black text-white">

                {item.value}

              </h3>

              <p className="mt-4 text-zinc-400">

                {item.label}

              </p>

            </div>
          ))}

        </div>

        {/* Bottom Banner */}

        <div className="mt-24 rounded-3xl border border-violet-500/20 bg-gradient-to-r from-violet-600/10 via-purple-500/10 to-indigo-500/10 p-8 backdrop-blur-xl">

          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

            <div>

              <div className="mb-3 flex items-center gap-3">

                <ShieldCheck className="text-green-400" />

                <span className="font-semibold text-white">

                  Secure • Fast • AI Powered

                </span>

              </div>

              <p className="max-w-xl text-zinc-400">

                Built with enterprise-grade technologies to deliver
                reliable, scalable, and intelligent learning experiences.

              </p>

            </div>

            <button className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-violet-600/40">

              <Zap className="h-5 w-5" />

              Explore Features

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}