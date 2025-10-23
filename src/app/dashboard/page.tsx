import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";

const Dashboard = () => {
  return (
    <main className="text-xl">
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />
        <div className="mt-10 w-full pr-10">
          <p>Morning, Hooman</p>
          <div className="mt-20 flex gap-10">
            <div className="h-[160px] rounded-xl border-2 p-3 md:w-[300px]">
              Revenue
            </div>
            <div className="h-[160px] rounded-xl border-2 p-3 md:w-[180px]">
              New order
            </div>
            <div className="h-[160px] rounded-xl border-2 p-3 md:w-[180px]">
              Total order
            </div>
          </div>

          <div className="w-full flex justify-between mt-20">
            <p>My events</p>
            <Link
              className="hover:text-secondary cursor-pointer text-xs underline transition-all duration-300 ease-in-out md:text-xl"
              href="/dashboard/events"
            >
              see all
            </Link>
          </div>
        </div>
      </SidebarProvider>
    </main>
  );
};

export default Dashboard;
