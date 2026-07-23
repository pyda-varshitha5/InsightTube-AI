import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#09090B] text-white">
      <h1 className="text-7xl font-bold">404</h1>

      <p className="mt-4 text-zinc-400">
        Page not found
      </p>

      <Link
        href="/"
        className="mt-8 rounded-xl bg-violet-600 px-6 py-3 hover:bg-violet-700"
      >
        Go Home
      </Link>
    </div>
  );
}