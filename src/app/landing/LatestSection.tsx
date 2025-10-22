import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { EventCard } from "@/components/ui/event-card";
import Link from "next/link";

const data = {
  eventId: 0,
  title: "RICH BRIAN - WHERE IS MY HEAD - ASIAN TOUR 2025",
  thumbnail:
    "https://assets.loket.com/neo/production/images/banner/20250815211622_689f4136370d7.jpeg",
  location: "Beach City International Stadium",
  price: "Rp 950.000",
  date: "29 November 2025",
};

export const LatestSection = () => (
  <section className="mt-8 space-y-4">
    <div className="flex items-end justify-between px-[52px]">
      <p className="text-primary text-3xl font-bold">Latest events</p>
      <Link
        href="/events"
        className="hover:text-secondary text-sm underline transition-all duration-300 ease-in-out"
      >
        See all
      </Link>
    </div>
    <Carousel opts={{ dragFree: true }}>
      <CarouselContent className="mr-[52px] pl-[52px]">
        {Array.from({ length: 10 }).map((_, i) => (
          <CarouselItem key={i} className="basis-[24%]">
            <EventCard {...data} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  </section>
);
