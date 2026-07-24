import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/dashboard/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen bg-[#09090F] text-white">

      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <div className="flex flex-1 flex-col">

        {/* Top Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="flex-1 p-5 overflow-y-auto">
          {children}
        </div>

      </div>

    </main>
  );
}