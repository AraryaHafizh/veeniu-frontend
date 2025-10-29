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
import { categories, cities } from "@/lib/const-data";
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

export const UserInteraction = () => {
  const [category, setCategory] = useState("Category");
  const [city, setCity] = useState("Location");
  const filters = [
    {
      title: "Category",
      selected: category,
      data: categories,
      position: category,
      setPosition: setCategory,
    },
    {
      title: "Location",
      selected: city,
      data: cities,
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
