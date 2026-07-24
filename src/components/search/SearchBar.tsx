"use client";

import {
  Search,
  ArrowRight,
  Loader2,
} from "lucide-react";

import axios from "axios";

import {
  useState,
  useEffect,
  useRef,
} from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const [suggestions, setSuggestions] = useState<string[]>([]);

  const [loading, setLoading] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const wrapperRef = useRef<HTMLDivElement>(null);

  // Fetch suggestions
  useEffect(() => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        setLoading(true);

        const res = await axios.get(
          `/api/suggestions?q=${encodeURIComponent(query)}`
        );

        setSuggestions(res.data);

        setSelectedIndex(-1);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }, 250);

    return () => clearTimeout(timer);
  }, [query]);

  // Close dropdown when clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setSuggestions([]);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  const handleSearch = () => {
    if (!query.trim()) return;

    console.log("Searching:", query);

    // Next step:
    // router.push(`/dashboard/results?q=${encodeURIComponent(query)}`);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (!suggestions.length) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();

      setSelectedIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();

      setSelectedIndex((prev) =>
        prev > 0 ? prev - 1 : 0
      );
    }

    if (e.key === "Enter") {
      e.preventDefault();

      if (selectedIndex >= 0) {
        setQuery(suggestions[selectedIndex]);
      }

      setSuggestions([]);

      handleSearch();
    }

    if (e.key === "Escape") {
      setSuggestions([]);
    }
  };
    return (
    <div
      ref={wrapperRef}
      className="relative mx-auto mt-10 w-full max-w-5xl"
    >
      {/* Search Box */}
      <div className="flex h-16 overflow-hidden rounded-2xl border border-violet-500/10 bg-[linear-gradient(90deg,#050506_0%,#09090d_70%,#140d20_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
        {/* Input */}
        <div className="flex flex-1 items-center px-6">
          <Search className="h-5 w-5 text-gray-500" />

          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search any topic..."
            className="ml-4 h-full w-full bg-transparent text-[15px] text-gray-200 placeholder:text-gray-500 outline-none"
          />
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="group flex w-44 items-center justify-center gap-2 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-[15px] font-semibold text-white transition-all duration-300 hover:brightness-110"
        >
          {loading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <>
              Search
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </>
          )}
        </button>
      </div>

      {/* Suggestions */}
      {suggestions.length > 0 && (
        <div className="absolute left-0 right-0 top-[72px] z-50 overflow-hidden rounded-2xl border border-violet-500/10 bg-[#0F0F16] shadow-2xl">
          {suggestions.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setQuery(item);
                setSuggestions([]);
              }}
              className={`flex w-full items-center gap-4 px-5 py-3 text-left transition ${
                selectedIndex === index
                  ? "bg-violet-600/20"
                  : "hover:bg-white/5"
              }`}
            >
              <Search className="h-4 w-4 text-gray-500" />

              <span className="flex-1 text-sm text-gray-200">
                {item}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}