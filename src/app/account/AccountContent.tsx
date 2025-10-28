"use client";

import { ContentTitle } from "@/components/ui/content-title";
import { useState } from "react";
import { AccountTicket } from "./AccountTicket";
import { AccountSetting } from "./AccountSetting";

const data = {
  event: {
    eventId: 0,
    title: "RICH BRIAN - WHERE IS MY HEAD - ASIAN TOUR 2025",
    thumbnail:
      "https://assets.loket.com/neo/production/images/banner/20250815211622_689f4136370d7.jpeg",
    location: "Beach City International Stadium",
    price: "Rp. 950.000",
    date: "29 November 2025",
  },
  review: {
    user: "hooman",
    rating: 4,
    review: "good event experience, loremipsum",
    event: "RICH BRIAN - WHERE IS MY HEAD - ASIAN TOUR 2025",
  },
};

export default function AccountContent() {
  const [selected, setSelected] = useState("My ticket");

  return (
    <section className="mt-5 flex-[70%] space-y-5 md:mt-15 md:h-[70vh] md:px-[52px]">
      <div className="flex gap-5 md:gap-20">
        <ContentTitle
          selected={selected}
          setSelected={setSelected}
          title="My ticket"
        />
        <ContentTitle
          selected={selected}
          setSelected={setSelected}
          title="Setting"
        />
      </div>
      <div className="h-full">
        {selected === "My ticket" ? (
          <AccountTicket {...data.event} />
        ) : (
          <AccountSetting {...data.review} />
        )}
      </div>
    </section>
  );
}
