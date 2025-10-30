import { EventCard, EventCardEmpty } from "@/components/ui/event-card";
import { useEventStore } from "./store";

const isPendingz = true;

export const EventList = () => {
  const { data, isPending } = useEventStore();

  return (
    <section className="mt-10 grid gap-5 px-5 md:mt-28 md:grid-cols-3 md:px-[52px] xl:grid-cols-4">
      {isPendingz
        ? Array.from({ length: 7 }).map((_, i) => (
            <EventCardEmpty key={i} isDense={true} />
          ))
        : data.map((event, i) => <EventCard {...event} isDense={true} />)}
    </section>
  );
};
