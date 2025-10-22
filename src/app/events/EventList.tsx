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
    <section className="mt-28 grid grid-cols-4 gap-y-7 px-[52px]">
      {Array.from({ length: 12 }).map((_, i) => (
        <EventCard key={i} {...data} />
      ))}
    </section>
  );
};
