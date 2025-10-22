"use client";

import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerContent,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { InputField } from "@/components/ui/inputfield";
import { Pagination } from "@/components/ui/pagination";
import { TicketCard } from "@/components/ui/ticket-card";
import clsx from "clsx";
import { Star } from "lucide-react";
import React, { useState } from "react";

const data = {
  title: "RICH BRIAN - WHERE IS MY HEAD - ASIAN TOUR 2025",
  thumbnail:
    "https://assets.loket.com/neo/production/images/banner/20250815211622_689f4136370d7.jpeg",
  location: "Beach City International Stadium",
  price: "Rp. 950.000",
  date: "29 November 2025",
  desc: "Rich Brian, the globally acclaimed Indonesian rapper, is set to return to his homeland’s stage with renewed energy. After a successful international tour and captivating audiences with his authentic works, he will be holding a special concert in Jakarta.",
};

export const TicketDrawer = () => {
  const [userRating, setUserRating] = useState(0);
  const [organizerRating, setOrganizerRating] = useState(0);
  return (
    <Drawer>
      <DrawerTrigger>
        <p className="hover:text-secondary cursor-pointer text-sm underline transition-all duration-300 ease-in-out">
          See all
        </p>
      </DrawerTrigger>
      <DrawerContent className="h-[90vh]">
        <section className="grid h-full grid-cols-2 gap-10 p-[86px]">
          <div>
            <DrawerTitle className="text-primary mb-5 text-3xl font-bold">
              My tickets
            </DrawerTitle>
            <div className="grid h-[50vh] grid-cols-2 gap-5">
              {Array.from({ length: 6 }).map((_, i) => (
                <TicketCard
                  key={i}
                  title={data.title}
                  date={data.date}
                  location={data.location}
                  isFinished={false}
                />
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <Pagination page="1" />
            </div>
          </div>
          <div>
            <p className="text-primary text-3xl font-bold">
              How was the event?
            </p>
            <StarRating rating={userRating} onRate={setUserRating} size={80} />
            <InputField id="eventReview" label="review" />
            <p className="text-primary text-3xl font-bold">
              Rate the organizer
            </p>
            <StarRating
              rating={organizerRating}
              onRate={setOrganizerRating}
              size={80}
            />
            <InputField id="orgReview" label="review" />
            <Button className="w-full">Submit</Button>
          </div>
        </section>
      </DrawerContent>
    </Drawer>
  );
};

interface StarRatingProps {
  rating: number;
  max?: number;
  size?: number;
  onRate?: (value: number) => void;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  max = 5,
  size = 20,
  onRate,
}) => {
  const stars = Array.from({ length: max }, (_, i) => i + 1);

  return (
    <div className="flex items-center gap-1">
      {stars.map((value) => {
        const filled = value <= Math.floor(rating);

        return (
          <Star
            key={value}
            size={size}
            className={clsx(
              "cursor-pointer transition-all duration-200",
              filled
                ? "fill-secondary text-secondary"
                : "fill-foreground/20 text-transparent",
              onRate && "hover:scale-110",
            )}
            onClick={() => onRate?.(value)}
          />
        );
      })}
    </div>
  );
};
