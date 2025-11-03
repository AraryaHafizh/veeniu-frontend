import { EventCard } from "@/components/event-card";

export const EventsList = () => {
  return (
    <section className="mt-5 grid gap-5 md:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i}>
          <EventCard />
        </div>
      ))}
    </section>
  );
};
