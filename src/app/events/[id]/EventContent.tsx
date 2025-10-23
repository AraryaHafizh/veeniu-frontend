"use client";

import { TicketCard } from "@/components/ui/ticket-card";
import { useState } from "react";

interface contentTitleProps {
  selected: string;
  setSelected: (value: string) => void;
  title: string;
}

const data = {
  description:
    "Rich Brian, the globally acclaimed Indonesian rapper, is set to return to his homeland’s stage with renewed energy. After a successful international tour and captivating audiences with his authentic works, he will be holding a special concert in Jakarta. As part of his global tour, Rich Brian will perform in Rich Brian – Where Is My Head? Tour in Jakarta on 29 November 2025 (Saturday) at Beach City International Stadium. This concert will be a special moment for fans to experience the vibrant music and electrifying stage presence of one of Asia’s most iconic artists. With a powerful setlist, stunning visuals, and an intense atmosphere, this is one performance you won’t want to miss!",
  ticket: {
    title: "Platinum Super Pro Max Ultra",
    price: "Rp 950.000",
  },
};

export const EventContent = () => {
  const [selected, setSelected] = useState("Description");
  return (
    <section className="flex-[60%] space-y-5 px-5 md:px-[52px]">
      <div className="flex gap-5 md:gap-20">
        <ContentTitle
          selected={selected}
          setSelected={setSelected}
          title="Description"
        />
        <ContentTitle
          selected={selected}
          setSelected={setSelected}
          title="Tickets"
        />
      </div>
      {selected === "Description" ? <p>{data.description}</p> : <TicketClass />}
    </section>
  );
};

const ContentTitle = ({ selected, setSelected, title }: contentTitleProps) => (
  <p
    className={`${selected === title ? "text-primary" : "text-foreground/50 hover:text-foreground/70"} cursor-pointer text-xl font-bold transition-all duration-300 ease-in-out md:text-3xl`}
    onClick={() => setSelected(title)}
  >
    {title}
  </p>
);

const TicketClass = () => (
  <section className="grid gap-3 md:grid-cols-2 md:gap-10">
    {Array.from({ length: 10 }).map((_, i) => (
      <TicketCard key={i} {...data.ticket} />
    ))}
  </section>
);
