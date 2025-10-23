"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface EventFilterProps {
  title: string;
  selected: string;
  data: string[];
  position: string;
  setPosition: (pos: string) => void;
}

const data = {
  categoryData: [
    "All",
    "Religion & Spirituality",
    "School & Campus Activities",
    "Business & Finance",
    "Fashion & Beauty",
    "Hobbies & Lifestyle",
    "Family & Children",
    "Health & Fitness",
    "Comedy & Performance",
    "Environment & Sustainability",
    "Food & Beverages",
    "Media & Entertainment",
    "Music",
    "Sports & Fitness",
    "Automotive",
    "Education",
    "Self-Development",
    "Travel & Nature",
    "Outdoor",
    "Science & Technology",
    "Art & Culture",
    "Social & Politics",
    "Others",
  ],
  cities: [
    "All",
    "Jakarta",
    "Bandung",
    "Surabaya",
    "Yogyakarta",
    "Bali (Denpasar)",
    "Medan",
    "Semarang",
    "Makassar",
    "Palembang",
    "Malang",
    "Bekasi",
    "Tangerang",
    "Depok",
    "Bogor",
    "Batam",
    "Manado",
    "Padang",
    "Balikpapan",
    "Pontianak",
    "Banjarmasin",
  ],
};

export const UserInteraction = () => {
  const [category, setCategory] = useState("Category");
  const [cities, setCities] = useState("Location");

  return (
    <section className="mt-16 flex space-x-5 px-[52px]">
      <Input placeholder="Search event" className="w-64" />
      <EventFilter
        title={"Category"}
        selected={category}
        data={data.categoryData}
        position={category}
        setPosition={setCategory}
      />
      <EventFilter
        title={"Location"}
        selected={cities}
        data={data.cities}
        position={cities}
        setPosition={setCities}
      />
    </section>
  );
};

const EventFilter = ({
  title,
  selected,
  data,
  position,
  setPosition,
}: EventFilterProps) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline" className="w-30">
        {selected}
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
      <DropdownMenuLabel>{title}</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
        {data.map((category, i) => (
          <DropdownMenuRadioItem key={i} value={category}>
            {category}
          </DropdownMenuRadioItem>
        ))}
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
);
