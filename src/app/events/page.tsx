"use client";

import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";
import { Pagination } from "@/components/ui/pagination";
import { EventList } from "./EventList";
import { UserInteraction } from "./UserInteraction";

export default function Event() {
  return (
    <main className="container mx-auto max-w-[1920px]">
      <Navbar />
      <UserInteraction />
      <EventList />
      <div className="mt-10 mb-10 flex justify-center md:mt-20 md:mb-40">
        <Pagination />
      </div>
      <Footer />
    </main>
  );
}
