import {
  EventCard,
  EventCardEmpty,
  eventCardProps,
} from "@/components/ui/event-card";

// const data = {
//   eventId: 0,
//   title: "RICH BRIAN - WHERE IS MY HEAD - ASIAN TOUR 2025",
//   thumbnail:
//     "https://assets.loket.com/neo/production/images/banner/20250815211622_689f4136370d7.jpeg",
//   location: "Beach City International Stadium",
//   price: "Rp 950.000",
//   date: "29 November 2025",
// };

export const Recommendation = ({
  data,
  isLoading,
}: {
  data: eventCardProps[];
  isLoading: boolean;
}) => {
  return (
    <section className="mt-10 mb-40 space-y-4 px-5 md:mt-32 md:px-[52px]">
      <p className="text-primary text-xl font-bold md:text-3xl">You may like</p>
      <div className="grid gap-5 md:grid-cols-3 xl:grid-cols-4">
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => <EventCardEmpty key={i} />)
          : data.map((event, i) => <EventCard key={i} {...event} />)}
      </div>
    </section>
  );
};
