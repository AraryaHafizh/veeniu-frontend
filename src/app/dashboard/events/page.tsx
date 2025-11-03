"use client";

import { DataPagination } from "@/components/data-pagination";
import { Input } from "@/components/ui/input";
import { LoadingScreen } from "@/components/ui/loading-animation";
import { SectionTitle } from "@/components/ui/section-title";
import { Sheet } from "./Sheet";
import { useEvents } from "./useEvents";
import { Table } from "@/components/table";

const tableTitle = [
  "No",
  "Title",
  "Category",
  "Location",
  "Total seats",
  "Start date",
];

export default function page() {
  const { data: eventData, isPending } = useEvents();
  const dashboardTableData = {
    title: "",
    columns: [
      { key: "no", title: "No" },
      { key: "title", title: "Event Title" },
      { key: "category", title: "Category" },
      { key: "location", title: "Location" },
      { key: "startDate", title: "Date" },
      { key: "totalSeats", title: "Total seats" },
      { key: "availableSeats", title: "Available seats" },
      { key: "action", title: "Action" },
    ],
    data: eventData?.data ?? [],
  };

  if (isPending) return <LoadingScreen />;

  return (
    <section>
      <SectionTitle className="mt-10">My events</SectionTitle>
      <div className="mt-10 mb-5 flex justify-between">
        <Input type="text" placeholder="Search" className="w-[280px]" />
        <Sheet />
      </div>
      <section className="my-5 grid w-full grid-cols-1">
        <Table {...dashboardTableData} />
      </section>
      <DataPagination />
    </section>
  );
}
