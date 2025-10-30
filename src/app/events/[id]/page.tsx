"use client";

import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";
import React from "react";
import { EventBanner } from "./EventBanner";
import { EventCart } from "./EventCart";
import { EventContent } from "./EventContent";

interface EventDetailProps {
  params: Promise<{ id: string }>;
}

export default function EventDetail({ params }: EventDetailProps) {
  const { id } = React.use(params);
  // const { data = [], isPending } = useEvent(id);

  // if (isPending) return <LoadingScreen />;

  return (
    <main className="container mx-auto max-w-[1920px]">
      <Navbar />
      <EventBanner />
      <div className="mb-40 space-y-5 md:mt-24 md:flex md:min-h-[500px]">
        <EventContent />
        <EventCart />
      </div>
      <Footer />
    </main>
  );
}
