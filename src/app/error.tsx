"use client";

import { useEffect } from "react";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#09090B] px-6 text-white">
      <h1 className="mb-4 text-4xl font-bold">Something went wrong</h1>

      <p className="mb-8 text-zinc-400">
        An unexpected error occurred.
      </p>

      <button
        onClick={() => reset()}
        className="rounded-xl bg-violet-600 px-6 py-3 transition hover:bg-violet-700"
      >
        Try Again
      </button>
    </div>
  );
}