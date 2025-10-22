interface ticketCardProps {
  title: string;
  price: string;
}

export const TicketCart = ({ title, price }: ticketCardProps) => {
  return (
    <section className="hover:bg-destructive/50 flex cursor-pointer items-center gap-10 rounded-xl border p-5 transition-all duration-300 ease-in-out">
      <p className="text-6xl font-bold">x1</p>
      <div className="flex flex-col gap-5">
        <p className="text-xl">{title}</p>
        <p className="text-xl">{price}</p>
      </div>
    </section>
  );
};
