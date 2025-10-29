import {
  EventCard,
  EventCardEmpty,
  eventCardProps,
} from "@/components/ui/event-card";

export const Recommendation = ({
  data,
  isPending,
}: {
  data: eventCardProps[];
  isPending: boolean;
}) => {
  return (
    <section className="mt-10 mb-40 space-y-4 px-5 md:mt-32 md:px-[52px]">
      <p className="text-primary text-xl font-bold md:text-3xl">You may like</p>
      <div className="grid gap-5 md:grid-cols-3 xl:grid-cols-4">
        {isPending
          ? Array.from({ length: 4 }).map((_, i) => <EventCardEmpty key={i} />)
          : data.map((event, i) => <EventCard key={i} {...event} />)}
      </div>
    </section>
  );
};
