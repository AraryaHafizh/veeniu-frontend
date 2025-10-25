"use client";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarProvider, useSidebar } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <MainContent>{children}</MainContent>
    </SidebarProvider>
  );
}

function MainContent({ children }: { children: React.ReactNode }) {
  return (
    <main className={`w-full overflow-y-auto px-5 py-10`}>{children}</main>
  );
}
