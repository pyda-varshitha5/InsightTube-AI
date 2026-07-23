import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/dashboard/Navbar";
import StatsCards from "@/components/dashboard/StatsCards";
import SearchSection from "@/components/dashboard/SearchSection";
import QuickActions from "@/components/dashboard/QuickActions";
import RecentSummaries from "@/components/dashboard/RecentSummaries";
import LearningInsights from "@/components/dashboard/LearningInsights";
import ActivityPanel from "@/components/dashboard/ActivityPanel";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#09090B] text-white">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Top Navigation */}
          <Navbar />

          {/* Dashboard Body */}
          <div className="p-8 space-y-6">
            {/* Greeting */}
            <div>
              <h1 className="text-4xl font-bold tracking-tight">
                Good evening,
                <span className="text-violet-400"> Varshitha!</span>
                <span className="ml-2">👋</span>
              </h1>

              <p className="mt-2 text-gray-400">
                What do you want to learn today?
              </p>
            </div>

            {/* Stats Cards */}
            <StatsCards />

            {/* Search + Quick Actions */}
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-9">
                <SearchSection />
              </div>

              <div className="col-span-3">
                <QuickActions />
              </div>
            </div>

            {/* Bottom Cards */}
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-5">
                <RecentSummaries />
              </div>

              <div className="col-span-4">
                <LearningInsights />
              </div>

              <div className="col-span-3">
                <ActivityPanel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}