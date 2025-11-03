import { EventCard } from "@/components/event-card";
import { EventProps } from "@/props/event.props";

export const EventsList = ({ eventData }: { eventData: EventProps[] }) => {
  return (
    <section className="mt-5 grid gap-5 md:grid-cols-3 xl:grid-cols-4">
      {eventData.map((event, i) => (
            <div key={i}>
              <EventCard eventData={event}/>
            </div>
          ))}
    </section>
  );
};
