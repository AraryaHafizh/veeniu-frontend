"use client";

import { TicketCard } from "@/components/ticket-card";
import { SectionTitle } from "@/components/ui/section-title";
import { ticketsData } from "@/lib/const-data";
import { isEventPassed } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEventStore } from "@/store/event-store";

export const Tickets = () => (
  <section className="bg-card mt-10 flex-1 rounded-lg p-15">
    <SectionTitle variant="small">My tickets</SectionTitle>
    <TicketGrid />
  </section>
);

const TicketGrid = () => {
  const router = useRouter();
  const { setSelectedEvent } = useEventStore();

  return (
    <div className="mt-5 grid grid-cols-4 gap-5">
      {ticketsData.map((data) => {
        const { event } = data;
        const eventPassed = isEventPassed(event.startDate);

        const handlePress = () => {
          if (eventPassed) {
            setSelectedEvent(data);
            router.push(`/events/review/${event.title}`);
          }
        };

        return (
          <TicketCard
            key={data.id}
            ticketData={data}
            eventData={event}
            width="w-full"
            status={eventPassed}
            onPress={handlePress}
          />
        );
      })}
    </div>
  );
};

