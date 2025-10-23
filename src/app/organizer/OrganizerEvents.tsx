import { EventCard, eventCardProps } from "@/components/ui/event-card";
import React from "react";

export const OrganizerEvents = (data: eventCardProps) => (
  <div className="grid gap-7 md:grid-cols-3 xl:grid-cols-4">
    {Array.from({ length: 10 }).map((_, i) => (
      <div key={i}>
        <EventCard {...data} />
      </div>
    ))}
  </div>
);
