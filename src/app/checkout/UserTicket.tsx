import { TicketCart } from "@/components/ui/ticket-cart-card";

export const UserTicket = () => {
  return (
    <section className="flex-[2]">
      <p className="text-primary text-3xl font-bold">Your tickets</p>
      <div className="mt-5 w-fit space-y-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <TicketCart
            key={i}
            title="Platinum Super Pro Max Ultra"
            price="Rp 950.000"
          />
        ))}
      </div>
    </section>
  );
};
