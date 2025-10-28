import { EventCard, eventCardProps } from "@/components/ui/event-card";
import { Pagination } from "@/components/ui/pagination";
import { TicketCard } from "@/components/ui/ticket-card";
import React from "react";

export const AccountTicket = (data: eventCardProps) => (
  <div className="flex h-full flex-col">
    <div className="h-full">
      <div className="grid gap-7 md:grid-cols-3">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i}>
            <TicketCard {...data} />
          </div>
        ))}
      </div>
    </div>
    <div className="mt-10 flex justify-center md:mt-0">
      <Pagination page="1" />
    </div>
  </div>
);
