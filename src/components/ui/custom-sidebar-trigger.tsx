"use client";

import { useSidebar } from "@/components/ui/sidebar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export function CustomTrigger() {
  const { toggleSidebar, open } = useSidebar();

  return (
    <div
      className={`flex w-full items-center transition-all duration-300 ${
        open ? "justify-between" : "justify-center"
      } p-3`}
    >
      {open && (
        <Link
          href="/dashboard"
          className="text-primary cursor-pointer text-4xl font-bold"
        >
          Veeniu
        </Link>
      )}

      <button
        onClick={toggleSidebar}
        className="text-secondary border-secondary hover:bg-primary hover:border-primary cursor-pointer rounded-md border p-1.5 transition-all duration-300 hover:text-[var(--footer-text)]"
      >
        {open ? (
          <ChevronLeft className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}
