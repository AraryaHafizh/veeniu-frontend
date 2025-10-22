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
import { RatingCard } from "@/components/ui/rating-card";
import clsx from "clsx";
import { Star } from "lucide-react";
import React, { useState } from "react";

const data = {
  user: "hooman",
  rating: "* * * * *",
  review: "good event experience, loremipsum",
  event: "RICH BRIAN - WHERE IS MY HEAD - ASIAN TOUR 2025",
};

export const RatingDrawer = () => {
  const [userRating, setUserRating] = useState(0);
  const [organizerRating, setOrganizerRating] = useState(0);
  return (
    <Drawer>
      <DrawerTrigger>
        <p className="hover:text-secondary cursor-pointer text-sm underline transition-all duration-300 ease-in-out">
          Rating: 4.8 | 1100 Reviews
        </p>
      </DrawerTrigger>
      <DrawerContent className="h-[500vh]">
        <section className="p-9">
          <div>
            <DrawerTitle className="text-primary mb-15 text-3xl font-bold">
              Seller rating
            </DrawerTitle>
            <div className="grid h-[50vh] grid-cols-3 items-center justify-center gap-10">
              {Array.from({ length: 9 }).map((_, i) => (
                <RatingCard
                  key={i}
                  user={data.user}
                  rating={data.rating}
                  review={data.review}
                  event={data.event}
                />
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <Pagination page="1" />
            </div>
          </div>
        </section>
      </DrawerContent>
    </Drawer>
  );
};
