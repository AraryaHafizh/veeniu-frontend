import { CarouselItem } from "@/components/ui/carousel";
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

export const Recommendation = () => (
  <section className="mt-10 mb-40 space-y-4 px-5 md:mt-32 md:px-[52px]">
    <p className="text-primary text-xl font-bold md:text-3xl">You may like</p>
    <div className="grid gap-7 md:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 10 }).map((_, i) => (
        <EventCard key={i} {...data} />
      ))}
    </div>
  </section>
);
