"use client";

import { ContentTitle } from "@/components/ui/content-title";
import { useState } from "react";
import { OrganizerEvents } from "./OrganizerEvents";
import { OrganizerReview } from "./OrganizerReview";

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

export default function OrganizerContent() {
  const [selected, setSelected] = useState("Events");

  return (
    <section className="space-y-5 px-5 md:px-[52px]">
      <div className="flex gap-5 md:gap-20">
        <ContentTitle
          selected={selected}
          setSelected={setSelected}
          title="Events"
        />
        <ContentTitle
          selected={selected}
          setSelected={setSelected}
          title="Review"
        />
      </div>
      {selected === "Events" ? (
        <OrganizerEvents {...data.event} />
      ) : (
        <OrganizerReview {...data.review} />
      )}
    </section>
  );
}
