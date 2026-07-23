export default function SearchDemo() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-28">

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

        <input
          placeholder="Search React Hooks..."
          className="w-full rounded-lg border border-zinc-700 bg-black px-5 py-4 text-white outline-none"
        />

        <button className="mt-6 w-full rounded-xl bg-violet-600 py-4 text-white">
          Generate Summary
        </button>

      </div>

    </section>
  );
}