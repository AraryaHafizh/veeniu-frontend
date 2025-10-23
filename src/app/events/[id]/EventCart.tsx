"use client";

import { Button } from "@/components/ui/button";
import { TicketCart } from "@/components/ui/ticket-cart-card";
import { useRouter } from "next/navigation";

const data = {
  title: "Platinum Super Pro Max Ultra",
  price: "Rp 950.000",
};

export const EventCart = () => {
  const router = useRouter();
  return (
    <section className="flex-[40%] space-y-5 px-5 md:pr-[52px]">
      <p className="text-primary text-xl font-bold md:text-3xl">Your tickets</p>
      {Array.from({ length: 5 }).map((_, i) => (
        <TicketCart key={i} title={data.title} price={data.price} />
      ))}
      <div className="bg-foreground/20 mt-16 h-0.5 w-full"></div>
      <TotalPrice price={data.price} />
      <Button className="w-full" onClick={() => router.push("/checkout")}>
        Checkout
      </Button>
      {/* make button bigger */}
    </section>
  );
};

const TotalPrice = ({ price }: { price: string }) => {
  return (
    <section className="flex justify-between text-xl font-bold md:text-3xl">
      <p className="text-primary">Total</p>
      <p>{price}</p>
    </section>
  );
};
