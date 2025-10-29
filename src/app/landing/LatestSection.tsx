import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  EventCard,
  EventCardEmpty,
  eventCardProps,
} from "@/components/ui/event-card";
import Link from "next/link";

export const LatestSection = ({
  data,
  isPending,
}: {
  data: eventCardProps[];
  isPending: boolean;
}) => (
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
        {isPending
          ? Array.from({ length: 7 }).map((_, i) => (
              <CarouselItem key={i} className="basis-[300px] 2xl:basis-[450px]">
                <EventCardEmpty key={i} isDense={true} />
              </CarouselItem>
            ))
          : data.map((event, i) => (
              <CarouselItem key={i} className="basis-[300px] 2xl:basis-[450px]">
                <EventCard {...event} isDense={true} />
              </CarouselItem>
            ))}
      </CarouselContent>
    </Carousel>
  </section>
);
