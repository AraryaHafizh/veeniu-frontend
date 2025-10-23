"use client";

import { CircleUserRound } from "lucide-react";
import { useRouter } from "next/navigation";

const data = {
  eventId: 0,
  title: "RICH BRIAN - WHERE IS MY HEAD - ASIAN TOUR 2025",
  thumbnail:
    "https://assets.loket.com/neo/production/images/banner/20250815211622_689f4136370d7.jpeg",
  location: "Beach City International Stadium",
  price: "Rp 950.000",
  date: "29 November 2025",
  time: "17:00 - 22:00 WIB",
  category: "Concert",
  organizer: "Sus seller",
};

export const EventBanner = () => {
  const router = useRouter();
  return (
    <section className="gap-10 md:flex md:h-[50vh] md:px-[52px]">
      <div className="h-full flex-[60%]">
        <img
          src={data.thumbnail}
          className="h-full w-full object-cover md:rounded-xl"
        />
      </div>

      <div className="flex flex-[40%] flex-col justify-between gap-5 px-5 py-8">
        <h1 className="text-secondary text-2xl font-bold md:text-6xl">
          {data.title}
        </h1>

        <div className="text-sm md:text-base">
          <p>{data.location}</p>
          <p>
            {data.date} | {data.time} WIB
          </p>
        </div>

        <div
          className="flex w-fit cursor-pointer items-center gap-2"
          onClick={() => router.push("/organizer")}
        >
          <CircleUserRound className="h-8 w-8 md:h-12 md:w-12" />
          <div>
            <p className="text-xs leading-none">Organized by</p>
            <p className="text-xl leading-tight">{data.organizer}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
