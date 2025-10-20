import { Button } from "@/components/ui/button";
import { CategoryCard, CategoryCardProps } from "@/components/ui/category-card";
import { CouponCard, CouponCardProps } from "@/components/ui/coupon-card";
import { EventCard, eventCardProps } from "@/components/ui/event-card";
import { Footer } from "@/components/ui/footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  LoadingAnimation,
  LoadingScreen,
} from "@/components/ui/loading-animation";
import { Navbar } from "@/components/ui/navbar";
import { Pagintaion } from "@/components/ui/pagination";
import { TicketCard, TicketCardProps } from "@/components/ui/ticket-card";

const eventCardData: eventCardProps = {
  eventId: 0,
  title: "RICH BRIAN - WHERE IS MY HEAD - ASIAN TOUR 2025",
  thumbnail:
    "https://assets.loket.com/neo/production/images/banner/20250815211622_689f4136370d7.jpeg",
  location: "Beach City International Stadium",
  price: "Rp. 950.000",
  date: "29 November 2025",
};

const categoryCardData: CategoryCardProps = {
  categoryId: 0,
  title: "Aktivitas Sekolah & Kampus",
};

const ticketCardData: TicketCardProps = {
  title: "RICH BRIAN - WHERE IS MY HEAD - ASIAN TOUR 2025",
  price: "",
  date: "29 November 2025",
  location: "Beach City International Stadium",
  isFinished: false,
};

const ticketCardData2: TicketCardProps = {
  title: "RICH BRIAN - WHERE IS MY HEAD - ASIAN TOUR 2025",
  price: "Rp. 950.000",
  date: "29 November 2025",
  location: "Beach City International Stadium",
  isFinished: false,
};

const ticketCardData3: TicketCardProps = {
  title: "RICH BRIAN - WHERE IS MY HEAD - ASIAN TOUR 2025",
  price: "",
  date: "29 November 2025",
  location: "Beach City International Stadium",
  isFinished: true,
};

const couponData: CouponCardProps = {
  code: "5AVGE90",
  value: "-50.000",
};

export default function Home() {
  return (
    <main className="container mx-auto max-w-[1920px] space-y-5">
      <Navbar />
      <section className="space-x-4">
        <Button>button</Button>
        <Button className="w-[300px]">custom size button</Button>
      </section>
      <EventCard {...eventCardData} />
      <CategoryCard {...categoryCardData} />
      <div className="w-[300px]">
        <TicketCard {...ticketCardData} />
        <TicketCard {...ticketCardData2} />
      </div>
      <div className="w-[400px]">
        <TicketCard {...ticketCardData3} />
      </div>
      <Pagintaion page={"1"} />
      <CouponCard {...couponData} />
      <div>
        <LoadingAnimation />
      </div>
      <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
      <Footer />
    </main>
  );
}
