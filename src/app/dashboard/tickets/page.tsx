"use client";

import { DataPagination } from "@/components/data-pagination";
import { SidebarTriggerMobile } from "@/components/sidebar-trigger-mobile";
import { Table } from "@/components/table";
import { Input } from "@/components/ui/input";
import { LoadingScreen } from "@/components/ui/loading-animation";
import { SectionTitle } from "@/components/ui/section-title";
import { useGetOrgEvents } from "@/hooks/event/useGetOrgEvents";
import { useGetOrgTickets } from "@/hooks/ticket/useGetOrgTickets";
import { parseAsInteger, useQueryState } from "nuqs";
import { Suspense } from "react";
import { Sheet } from "./Sheet";

export default function page() {
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const { data: ticket, isPending } = useGetOrgTickets({
    page,
    limit: 20,
  });
  const { data: event, isPending: isPending2 } = useGetOrgEvents();
  const dashboardTableData = {
    title: "",
    columns: [
      { key: "no", title: "No" },
      { key: "name", title: "Ticket title" },
      { key: "price", title: "Price" },
      { key: "stock", title: "Stock" },
      { key: "event.title", title: "Parent event" },
    ],
    data: ticket?.data ?? [],
  };

  const onChangePage = (page: number) => {
    setPage(page);
  };

  if (isPending || isPending2) return <LoadingScreen isDashboard={true} />;

  return (
    <section>
      <SidebarTriggerMobile>
        <SectionTitle className="mt-10">My tickets</SectionTitle>
      </SidebarTriggerMobile>
      <div className="mt-10 mb-5 flex justify-between gap-2">
        <Input type="text" placeholder="Search" className="w-[280px]"></Input>
        <Suspense>
          <Sheet events={event.data} />
        </Suspense>
      </div>
      <Suspense>
        <section className="my-5 grid w-full grid-cols-1">
          <Table {...dashboardTableData} />
        </section>
        <DataPagination onChangePage={onChangePage} meta={ticket.meta} />
      </Suspense>
    </section>
  );
}
