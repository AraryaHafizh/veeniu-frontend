"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { ListFilter } from "lucide-react";
import { useState } from "react";

interface EventFilterProps {
  title: string;
  selected: string;
  data: string[];
  position: string;
  setPosition: (pos: string) => void;
  width?: string;
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
  const [city, setCity] = useState("Location");
  const filters = [
    {
      title: "Category",
      selected: category,
      data: data.categoryData,
      position: category,
      setPosition: setCategory,
    },
    {
      title: "Location",
      selected: city,
      data: data.cities,
      position: city,
      setPosition: setCity,
    },
  ];
  return (
    <section className="mt-16 flex gap-2 px-5 md:gap-5 md:px-[52px]">
      <Input placeholder="Search event" className="md:w-64" />
      <div className="hidden space-x-2 md:flex">
        {filters.map((filter, i) => (
          <EventFilter key={i} {...filter} />
        ))}
      </div>

      <div className="block md:hidden">
        <EventFilterMobile>
          {filters.map((filter, i) => (
            <EventFilter key={i} {...filter} width="w-full" />
          ))}
        </EventFilterMobile>
      </div>
    </section>
  );
};

const EventFilter = ({
  title,
  selected,
  data,
  position,
  setPosition,
  width,
}: EventFilterProps) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline" className={`${width ?? "w-fit"} min-w-24`}>
        {selected}
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-44">
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

const EventFilterMobile = ({ children }: { children: React.ReactNode }) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant={"outline"}>
        <ListFilter />
      </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogTitle>Filter events</DialogTitle>
      {children}
    </DialogContent>
  </Dialog>
);
