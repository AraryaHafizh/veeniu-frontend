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
  const { open } = useSidebar();
  const padleft = open ? "" : "pl-5";

  return (
    <main className={`overflow-y-auto ${padleft} w-full`}>{children}</main>
  );
}
