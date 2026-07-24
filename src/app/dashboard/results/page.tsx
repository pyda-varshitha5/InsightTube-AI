"use client";

import { useSearchParams } from "next/navigation";

export default function ResultsPage() {
  const searchParams = useSearchParams();

  const query = searchParams.get("q");

  return (
    <div className="p-8 text-white">

      <h1 className="text-3xl font-bold">
        Search Results
      </h1>

      <p className="mt-6 text-xl">
        Topic:
      </p>

      <div className="mt-2 rounded-xl border border-violet-500/20 bg-[#15151d] p-5 text-lg">
        {query}
      </div>

    </div>
  );
}