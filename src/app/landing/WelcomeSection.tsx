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
  price: "Rp 950.000",
  date: "29 November 2025",
  desc: "Rich Brian, the globally acclaimed Indonesian rapper, is set to return to his homeland’s stage with renewed energy. After a successful international tour and captivating audiences with his authentic works, he will be holding a special concert in Jakarta.",
};

export default function WelcomeSection() {
  return (
    <section className="md:min-h-[92vh]">
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
        <CarouselItem key={i}>
          <div className="relative px-5 md:h-[65vh] md:px-[52px]">
            <img
              src={data.thumbnail}
              alt={data.title}
              className="h-full w-full rounded-2xl object-cover"
            />

            <div className="absolute inset-0 mx-5 rounded-2xl bg-gradient-to-b from-transparent to-black/90 md:mx-[52px]" />

            <div className="absolute inset-0 m-10 flex flex-col justify-end rounded-2xl text-[var(--footer-text)] md:mx-25 md:my-5">
              <p className="font-bold md:text-5xl">{data.title}</p>

              <div className="mt-10 hidden justify-between md:flex">
                <div className="space-y-1 md:space-y-2">
                  <p>{data.location}</p>
                  <p>{data.date}</p>
                  <p>{data.price}</p>
                </div>

                <div className="w-[40%]">
                  <p className="line-clamp-3">{data.desc}</p>
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
