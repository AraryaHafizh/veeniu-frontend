"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { catDropdown, locDropdown } from "@/lib/const-data";

export default function Toolbar() {
  return (
    <section className="flex gap-5">
      <Input placeholder="Search" className="w-100" />
      <FilterDropdown data={catDropdown} />
      <FilterDropdown data={locDropdown} />
    </section>
  );
}

interface dropdownProps {
  data: {
    title: string;
    items: string[];
  };
}

const FilterDropdown = ({ data }: dropdownProps) => (
  <Select>
    <SelectTrigger className="w-30">
      <SelectValue placeholder={data.title} />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        {data.items.map((item) => (
          <SelectItem key={item} value={item.toLowerCase()}>
            {item}
          </SelectItem>
        ))}
      </SelectGroup>
    </SelectContent>
  </Select>
);
