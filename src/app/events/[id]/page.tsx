import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";
import React from "react";
import { EventBanner } from "./EventBanner";
import { EventContent } from "./EventContent";
import { EventCart } from "./EventCart";

interface EventDetailProps {
  params: Promise<{ id: string }>;
}

export default function EventDetail({ params }: EventDetailProps) {
  const { id } = React.use(params);

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
