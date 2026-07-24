import Greeting from "@/components/dashboard/Greeting";
import StatsCards from "@/components/dashboard/StatsCards";
import SearchSection from "@/components/dashboard/SearchSection";
import TodayGoal from "@/components/dashboard/TodayGoal";
import QuickActions from "@/components/dashboard/QuickActions";
import LearningInsights from "@/components/dashboard/LearningInsights";
import ContinueLearning from "@/components/dashboard/ContinueLearning";
import RecentSearches from "@/components/dashboard/RecentSearches";

export default function DashboardPage() {
  return (
    <>
      <Greeting />

      <div className="mt-4">
        <StatsCards />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4">

        <div className="col-span-9">

          <SearchSection />

          <div className="mt-4 grid grid-cols-2 gap-4">

            <ContinueLearning />

            <RecentSearches />

          </div>

        </div>

        <div className="col-span-3 space-y-4">

          <TodayGoal />

          <QuickActions />

          <LearningInsights />

        </div>

      </div>
    </>
  );
}