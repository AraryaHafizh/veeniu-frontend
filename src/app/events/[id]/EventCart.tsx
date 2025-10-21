import { Button } from "@/components/ui/button";

const data = {
  title: "Platinum Super Pro Max Ultra",
  price: "Rp. 950.000",
};

interface ticketCardProps {
  title: string;
  price: string;
}

export const EventCart = () => {
  return (
    <section className="flex-[40%] space-y-5 pr-[52px]">
      <p className="text-primary text-3xl font-bold">Your tickets</p>
      {Array.from({ length: 5 }).map((_, i) => (
        <TicketCart key={i} title={data.title} price={data.price} />
      ))}
      <div className="bg-foreground/20 mt-16 h-1 w-full"></div>
      <TotalPrice price={data.price} />
      <Button className="w-full">Checkout</Button>
      // make button bigger
    </section>
  );
};

const TicketCart = ({ title, price }: ticketCardProps) => {
  return (
    <section className="border-foreground/50 hover:bg-destructive/50 flex cursor-pointer items-center gap-10 rounded-xl border p-5 transition-all duration-300 ease-in-out">
      <p className="text-6xl font-bold">x1</p>
      <div className="flex flex-col gap-5">
        <p className="text-xl">{title}</p>
        <p className="text-xl">{price}</p>
      </div>
    </section>
  );
};

export const TotalPrice = ({ price }: { price: string }) => {
  return (
    <section className="flex justify-between text-3xl font-bold">
      <p className="text-primary">Total</p>
      <p>{price}</p>
    </section>
  );
};
