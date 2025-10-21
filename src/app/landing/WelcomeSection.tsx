import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { TicketCard } from "@/components/ui/ticket-card";
import { TicketDrawer } from "./TicketDrawer";
// import Autoplay from "embla-carousel-autoplay";

const data = {
  title: "RICH BRIAN - WHERE IS MY HEAD - ASIAN TOUR 2025",
  thumbnail:
    "https://assets.loket.com/neo/production/images/banner/20250815211622_689f4136370d7.jpeg",
  location: "Beach City International Stadium",
  price: "Rp. 950.000",
  date: "29 November 2025",
  desc: "Rich Brian, the globally acclaimed Indonesian rapper, is set to return to his homeland’s stage with renewed energy. After a successful international tour and captivating audiences with his authentic works, he will be holding a special concert in Jakarta.",
};

export default function WelcomeSection() {
  return (
    <section className="min-h-[92vh]">
      <WelcomeCarousel />
      <UserTicket />
    </section>
  );
}

const WelcomeCarousel = () => (
  <Carousel
    opts={{ loop: true }}

    // plugins={[
    //   Autoplay({
    //     delay: 5500,
    //   }),
    // ]}
  >
    <CarouselContent>
      {Array.from({ length: 5 }).map((_, i) => (
        <CarouselItem key={i} className="px-[52px]">
          <div className="relative h-[65vh]">
            <img
              src={data.thumbnail}
              alt={data.title}
              className="h-full w-full rounded-2xl object-cover"
            />

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent to-black/100" />

            <div className="absolute inset-0 flex flex-col justify-end space-y-9 p-[40px] text-[var(--footer-text)]">
              <p className="text-5xl font-bold">{data.title}</p>
              <div className="flex w-full justify-between">
                <div className="space-y-2">
                  <p>{data.location}</p>
                  <p>{data.date}</p>
                  <p>{data.price}</p>
                </div>
                <div className="w-[40vw]">
                  <p>{data.desc}</p>
                </div>
              </div>
            </div>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
  </Carousel>
);

const UserTicket = () => {
  return (
    <section className="mt-8 space-y-4">
      <div className="flex items-end justify-between px-[52px]">
        <p className="text-primary text-3xl font-bold">My tickets</p>
        <TicketDrawer />
      </div>
      <Carousel opts={{ dragFree: true }}>
        <CarouselContent className="mr-[52px] pl-[52px]">
          {Array.from({ length: 10 }).map((_, i) => (
            <CarouselItem key={i} className="basis-[18%]">
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


