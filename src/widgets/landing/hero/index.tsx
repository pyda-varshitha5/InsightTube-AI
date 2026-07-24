"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#050505]">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:70px_70px] opacity-20" />

      {/* Animated Glow 1 */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-violet-600/20 blur-[160px]"
      />

      {/* Animated Glow 2 */}
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-32 top-32 h-[420px] w-[420px] rounded-full bg-fuchsia-600/20 blur-[160px]"
      />

      {/* Animated Glow 3 */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/2 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[150px]"
      />

      <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-5xl text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-3 rounded-full border border-violet-500/30 bg-violet-500/10 px-6 py-3 backdrop-blur-xl"
          >
            <Sparkles className="h-5 w-5 text-violet-400" />

            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-300">
              AI Powered Learning
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-10 text-5xl font-black leading-none text-white sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Stop Watching.
            <br />
            <span className="bg-gradient-to-r from-white via-violet-300 to-purple-500 bg-clip-text text-transparent">
              Start Understanding.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-zinc-400 lg:text-xl"
          >
            Search any topic. We analyze the best YouTube videos, remove
            repetitive information, and generate one structured AI summary that
            helps you learn faster than ever.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.8 }}
            className="mt-14 flex flex-wrap justify-center gap-5"
          >
            {/* Get Started */}
            <Link
              href="/login"
              className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-600 px-8 py-4 text-lg font-semibold text-white shadow-[0_0_35px_rgba(139,92,246,0.45)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(139,92,246,0.7)]"
            >
              Get Started

              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            {/* Watch Demo */}
            <button className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-violet-500 hover:bg-violet-500/10">
              <PlayCircle
                size={20}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              Watch Demo
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}