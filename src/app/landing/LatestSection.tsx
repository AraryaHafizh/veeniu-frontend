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
    <div className="flex items-end justify-between px-5 md:px-[52px]">
      <p className="text-primary text-xl font-bold md:text-3xl">
        Latest events
      </p>
      <Link
        href="/events"
        className="hover:text-secondary text-xs underline transition-all duration-300 ease-in-out md:text-sm"
      >
        See all
      </Link>
    </div>
    <Carousel opts={{ dragFree: true }}>
      <CarouselContent className="mr-5 pl-5 md:mr-[52px] md:pl-[52px]">
        {Array.from({ length: 10 }).map((_, i) => (
          <CarouselItem key={i} className="basis-[300px] 2xl:basis-[450px]">
            <EventCard {...data} isDense={true}/>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  </section>
);
