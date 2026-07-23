"use client";

import {
  Search,
  PlayCircle,
  BrainCircuit,
  BookOpen,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Search a Topic",
    description:
      "Enter any learning topic like React, DBMS, Machine Learning or System Design.",
  },
  {
    icon: PlayCircle,
    number: "02",
    title: "Analyze Top Videos",
    description:
      "InsightTube AI collects the highest-quality YouTube videos and removes repetitive information.",
  },
  {
    icon: BrainCircuit,
    number: "03",
    title: "AI Generates Summary",
    description:
      "Gemini AI creates one clean and structured summary with important concepts and examples.",
  },
  {
    icon: BookOpen,
    number: "04",
    title: "Learn & Save",
    description:
      "Read, bookmark and revisit your summaries anytime from your dashboard.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden py-32 bg-black"
    >
      {/* Background */}

      <div className="absolute left-0 top-40 h-72 w-72 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-purple-600/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            Workflow
          </span>

          <h2 className="mt-8 text-5xl font-black text-white md:text-6xl">

            Learn In

            <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">

              {" "}4 Simple Steps

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">

            From searching a topic to getting an AI-powered summary,
            InsightTube AI simplifies the entire learning experience.

          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Vertical Line */}

          <div className="absolute left-8 top-0 hidden h-full w-[2px] bg-gradient-to-b from-violet-500 via-purple-500 to-transparent lg:block" />

          <div className="space-y-10">

            {steps.map((step) => {

              const Icon = step.icon;

              return (

                <div
                  key={step.number}
                  className="group relative flex flex-col gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-violet-500/10 lg:flex-row lg:items-center"
                >

                  {/* Icon */}

                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-purple-600 shadow-lg shadow-violet-600/30">

                    <Icon className="h-8 w-8 text-white" />

                  </div>

                  {/* Content */}

                  <div className="flex-1">

                    <div className="mb-3 flex items-center gap-4">

                      <span className="text-sm font-bold uppercase tracking-[0.25em] text-violet-400">

                        Step {step.number}

                      </span>

                    </div>

                    <h3 className="text-3xl font-bold text-white">

                      {step.title}

                    </h3>

                    <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-400">

                      {step.description}

                    </p>

                  </div>

                  {/* Arrow */}

                  <ArrowRight className="hidden h-8 w-8 text-zinc-500 transition-all duration-300 group-hover:translate-x-2 group-hover:text-violet-400 lg:block" />

                </div>

              );

            })}

          </div>

        </div>

      </div>
    </section>
  );
}