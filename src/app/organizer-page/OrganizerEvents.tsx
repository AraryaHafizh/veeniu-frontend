import { EventCard } from "@/components/ui/event-card";

const data = {
  eventId: 0,
  title: "RICH BRIAN - WHERE IS MY HEAD - ASIAN TOUR 2025",
  thumbnail:
    "https://assets.loket.com/neo/production/images/banner/20250815211622_689f4136370d7.jpeg",
  location: "Beach City International Stadium",
  price: "Rp. 950.000",
  date: "29 November 2025",
};

export const OrganizerEvents = () => {
  return (
    <section className="p-7">
      <p className="text-primary text-3xl font-bold">Events</p>
      <div className="mt-10 grid grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i}>
            <EventCard {...data} />
          </div>
        ))}
      </div>
    </section>
  );
};
