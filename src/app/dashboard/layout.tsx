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
      <main className="overlay-y-auto w-full p-5">{children}</main>
    </SidebarProvider>
  );
}
