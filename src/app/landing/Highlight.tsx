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
import { ticketsData } from "@/lib/const-data";
import { formatDate } from "@/lib/utils";
import { EventProps } from "@/props/event.props";
import Autoplay from "embla-carousel-autoplay";

export const Highlight = ({ eventData }: { eventData: EventProps[] }) => {
  return (
    <section className="pt-[70px]">
      <LatestCarousel eventData={eventData} />
      <UserTickets />
    </section>
  );
};

const LatestCarousel = ({ eventData }: { eventData: EventProps[] }) => (
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
      {eventData.map((event, index) => (
        <CarouselItem key={index}>
          <div className="relative md:h-[700px]">
            <img src={event.imageUrl} className="h-full w-full object-cover" />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90" />

            <div className="absolute inset-0 flex flex-col justify-end px-20 py-10 text-[var(--footer-text)] select-none">
              <p className="text-5xl font-bold">{event.title}</p>

              <div className="mt-10 hidden justify-between md:flex">
                <div className="space-y-1 md:space-y-2">
                  <SectionText variant="default">{event.location}</SectionText>
                  <SectionText variant="default">
                    {formatDate(event.startDate)}
                  </SectionText>
                  {/* <SectionText variant="default">
                    {formatCurrency(event.price)}
                  </SectionText> */}
                </div>

                <div className="w-[40%]">
                  <SectionText variant="default" className="line-clamp-4">
                    {event.description}
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
