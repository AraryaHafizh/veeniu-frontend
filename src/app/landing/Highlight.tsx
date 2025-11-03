"use client";

import { TicketCard } from "@/components/ticket-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { SectionText } from "@/components/ui/section-text";
import { SectionTitle } from "@/components/ui/section-title";
import { TextLink } from "@/components/ui/textlink";
import { eventData, ticketsData } from "@/lib/const-data";
import { formatCurrency, formatDate } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";

export const Highlight = () => {
  return (
    <section className="h-[1080px] pt-[70px]">
      <LatestCarousel />
      <UserTickets />
    </section>
  );
};

const LatestCarousel = () => (
  <Carousel
    opts={{
      loop: true,
      duration: 60,
    }}
    plugins={[
      Autoplay({
        delay: 7000,
        stopOnInteraction: false,
      }),
    ]}
  >
    <CarouselContent>
      {Array.from({ length: 5 }).map((_, index) => (
        <CarouselItem key={index}>
          <div className="relative md:h-[700px]">
            <img
              src={eventData.imageUrl}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90" />

            <div className="absolute inset-0 flex flex-col justify-end px-20 py-10 text-[var(--footer-text)] select-none">
              <p className="text-5xl font-bold">{eventData.title}</p>

              <div className="mt-10 hidden justify-between md:flex">
                <div className="space-y-1 md:space-y-2">
                  <SectionText variant="default">
                    {eventData.location}
                  </SectionText>
                  <SectionText variant="default">
                    {formatDate(eventData.startDate)}
                  </SectionText>
                  <SectionText variant="default">
                    {formatCurrency(eventData.price)}
                  </SectionText>
                </div>

                <div className="w-[40%]">
                  <SectionText variant="default" className="line-clamp-4">
                    {eventData.description}
                  </SectionText>
                </div>
              </div>
            </div>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
  </Carousel>
);

const UserTickets = () => (
  <section>
    <div className="mt-5 flex items-end justify-between px-5 md:px-20">
      <SectionTitle>My tickets</SectionTitle>
      <TextLink link={"/"} />
    </div>
    <div className="scroll-hidden mt-5 flex h-fit w-full gap-3 overflow-x-auto px-5 md:px-20">
      {ticketsData.map((data, i) => (
        <TicketCard key={i} ticketData={data} eventData={data.event} />
      ))}
    </div>
  </section>
);
