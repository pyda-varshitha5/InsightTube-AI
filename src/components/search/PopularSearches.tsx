"use client";

import {
  Code2,
  BrainCircuit,
  Cloud,
  Database,
  FileCode,
} from "lucide-react";

import TopicCard from "./TopicCard";

const topics = [
  {
    title: "React Hooks",
    description: "Learn useState, useEffect, useContext and more.",
    searches: "12.5K searches",
    Icon: Code2,
  },
  {
    title: "Python for Beginners",
    description: "Variables, loops, functions and data structures.",
    searches: "9.8K searches",
    Icon: FileCode,
  },
  {
    title: "JavaScript Basics",
    description: "Learn ES6+, async/await and modern JavaScript.",
    searches: "8.2K searches",
    Icon: Code2,
  },
  {
    title: "Machine Learning",
    description: "ML basics, algorithms and real-world projects.",
    searches: "7.1K searches",
    Icon: BrainCircuit,
  },
  {
    title: "AWS Cloud",
    description: "EC2, S3, Lambda and cloud fundamentals.",
    searches: "6.3K searches",
    Icon: Cloud,
  },
  {
    title: "SQL Tutorial",
    description: "Database basics and SQL queries.",
    searches: "5.4K searches",
    Icon: Database,
  },
];

export default function PopularSearches() {
  return (
    <section>

      <div className="mb-5 flex items-center justify-between">

        <h2 className="text-xl font-semibold text-white">
          Popular Searches
        </h2>

        <button className="text-sm text-violet-400 hover:text-violet-300">
          Explore all topics →
        </button>

      </div>

      <div className="grid grid-cols-3 gap-4">

        {topics.map((topic) => (
          <TopicCard
            key={topic.title}
            title={topic.title}
            description={topic.description}
            searches={topic.searches}
            Icon={topic.Icon}
          />
        ))}

      </div>

    </section>
  );
}