"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { eventCardProps } from "@/components/ui/event-card";
import { TicketCard } from "@/components/ui/ticket-card";
import Autoplay from "embla-carousel-autoplay";

const data = {
  title: "RICH BRIAN - WHERE IS MY HEAD - ASIAN TOUR 2025",
  thumbnail:
    "https://assets.loket.com/neo/production/images/banner/20250815211622_689f4136370d7.jpeg",
  location: "Beach City International Stadium",
  price: "Rp 950.000",
  date: "29 November 2025",
  desc: "Rich Brian, the globally acclaimed Indonesian rapper, is set to return to his homeland’s stage with renewed energy. After a successful international tour and captivating audiences with his authentic works, he will be holding a special concert in Jakarta.",
};

export default function WelcomeSection({
  data,
  isPending,
}: {
  data: eventCardProps[];
  isPending: boolean;
}) {
  return (
    <section className="md:min-h-[92vh]">
      {isPending ? <WelcomeCarouselEmpty /> : <WelcomeCarousel data={data} />}
      <UserTicket />
    </section>
  );
}

const WelcomeCarousel = ({ data }: { data: eventCardProps[] }) => (
  <Carousel
    opts={{ loop: true, duration: 60 }}
    plugins={[
      Autoplay({
        delay: 7000,
        stopOnInteraction: false,
      }),
    ]}
  >
    <CarouselContent>
      {data.map((event, i) => (
        <CarouselItem key={i}>
          <div className="relative px-5 md:h-[65vh] md:px-[52px]">
            <img
              src={event.imageUrl}
              alt={event.title}
              className="h-full w-full rounded-2xl object-cover"
            />

            <div className="absolute inset-0 mx-5 rounded-2xl bg-gradient-to-b from-transparent to-black/90 md:mx-[52px]" />

            <div className="absolute inset-0 m-10 flex flex-col justify-end rounded-2xl text-[var(--footer-text)] select-none md:mx-25 md:my-5 md:select-all">
              <p className="font-bold md:text-5xl">{event.title}</p>

              <div className="mt-10 hidden justify-between md:flex">
                <div className="space-y-1 md:space-y-2">
                  <p>{event.location}</p>
                  <p>{event.startDate}</p>
                  <p>{event.price}</p>
                </div>

                <div className="w-[40%]">
                  <p className="line-clamp-3">{event.description}</p>
                </div>
              </div>
            </div>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
  </Carousel>
);

export const WelcomeCarouselEmpty = () => {
  return (
    <div className="relative h-[210px] animate-pulse px-5 md:h-[65vh] md:px-[52px]">
      <div className="h-full w-full rounded-2xl bg-[var(--container)] object-cover" />

      <div className="absolute inset-0 m-10 flex flex-col justify-end rounded-2xl text-[var(--footer-text)] select-none md:mx-25 md:my-5">
        <div className="bg-foreground/10 mb-6 h-10 w-1/3 rounded md:h-12 md:w-1/4" />

        <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="space-y-2">
            <div className="bg-foreground/10 h-3 w-24 rounded" />
            <div className="bg-foreground/10 h-3 w-32 rounded" />
            <div className="bg-foreground/10 h-3 w-20 rounded" />
          </div>
          <div className="hidden w-[40%] space-y-2 md:block">
            <div className="bg-foreground/10 h-3 w-full rounded" />
            <div className="bg-foreground/10 h-3 w-3/4 rounded" />
            <div className="bg-foreground/10 h-3 w-2/3 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

const UserTicket = () => {
  return (
    <section className="mt-10 space-y-4">
      <p className="text-primary px-5 text-xl font-bold md:px-[52px] md:text-3xl">
        My tickets
      </p>
      <Carousel opts={{ dragFree: true }}>
        <CarouselContent className="mr-5 pl-5 md:mr-[52px] md:pl-[52px]">
          {Array.from({ length: 10 }).map((_, i) => (
            <CarouselItem
              key={i}
              className="basis-[240px] md:basis-[290px] lg:basis-[350px] 2xl:basis-[400px]"
            >
              <TicketCard
                title={data.title}
                date={data.date}
                location={data.location}
                isFinished={false}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
