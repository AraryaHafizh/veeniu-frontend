"use client";

import { ChevronRight } from "lucide-react";
import { useSidebar } from "./sidebar";

export const SectionTitle = ({ title }: { title: string }) => (
  <div className="flex items-center gap-x-3">
    <MobileSidebarTrigger />
    <p className="text-primary text-3xl font-bold">{title}</p>
  </div>
);

const MobileSidebarTrigger = () => {
  const { toggleSidebar, open } = useSidebar();
  return (
    <button
      onClick={toggleSidebar}
      className="text-secondary border-secondary hover:bg-primary hover:border-primary flex h-7 w-7 cursor-pointer items-center justify-center rounded-md border transition-all duration-300 hover:text-[var(--footer-text)] md:hidden"
    >
      <ChevronRight className="h-4 w-4" />
    </button>
  );
};
