import { EventCard } from "@/components/ui/event-card";

const data = {
  eventId: 0,
  title: "RICH BRIAN - WHERE IS MY HEAD - ASIAN TOUR 2025",
  thumbnail:
    "https://assets.loket.com/neo/production/images/banner/20250815211622_689f4136370d7.jpeg",
  location: "Beach City International Stadium",
  price: "Rp 950.000",
  date: "29 November 2025",
};

export const EventList = () => {
  return (
    <section className="mt-10 grid gap-5 px-5 md:mt-28 md:grid-cols-3 md:px-[52px] xl:grid-cols-4">
      {Array.from({ length: 12 }).map((_, i) => (
        <EventCard key={i} {...data} />
      ))}
    </section>
  );
};
