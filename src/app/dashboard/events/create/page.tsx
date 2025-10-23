import { AppSidebar } from "@/components/ui/app-sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";
import React from "react";

const CreateEvent = () => {
  return (
    <main className="text-xl">
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />
        <div className="mt-10 w-full pr-10">
          <p>Create event</p>
        </div>
      </SidebarProvider>
    </main>
  );
};

export default CreateEvent;
