import { AppSidebar } from "@/components/ui/app-sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";
import React from "react";

const OrganizerEvent = () => {
  return (
    <main className="text-xl">
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />
        <div className="mt-10 w-full pr-10">
          <p>My events</p>
          <div className="mt-10 flex justify-between">
            <Input
              type="text"
              placeholder="Search"
              className="w-[280px]"
            ></Input>
            <Link href="/dashboard/events/create">
              <Button type="button">Create</Button>
            </Link>
          </div>
        </div>
      </SidebarProvider>
    </main>
  );
};

export default OrganizerEvent;
