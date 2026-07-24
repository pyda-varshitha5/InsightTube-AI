import SearchHero from "@/components/search/SearchHero";
import SearchBar from "@/components/search/SearchBar";
import TimeFilter from "@/components/search/TimeFilter";
import PopularSearches from "@/components/search/PopularSearches";
import SearchTip from "@/components/search/SearchTip";

export default function NewSearchPage() {
  return (
    <div className="space-y-6">

      {/* Page Heading */}

      <div>
        <h1 className="text-[30px] font-bold text-white">
          New Search
        </h1>

        <p className="mt-2 text-gray-400">
          Discover, analyze and learn from the best YouTube content.
        </p>
      </div>

      {/* Hero */}

      <SearchHero />

     

      {/* Popular Searches */}

      <PopularSearches />

      {/* Tip */}

      <SearchTip />

    </div>
  );
}