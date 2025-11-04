"use client";

import { DataPagination } from "@/components/data-pagination";
import { SidebarTriggerMobile } from "@/components/sidebar-trigger-mobile";
import { Table } from "@/components/table";
import { Input } from "@/components/ui/input";
import { LoadingScreen } from "@/components/ui/loading-animation";
import { SectionTitle } from "@/components/ui/section-title";
import { useGetOrgEvents } from "@/hooks/event/useGetOrgEvents";
import { useGetOrgVouchers } from "@/hooks/voucher/useGetOrgVouchers";
import { parseAsInteger, useQueryState } from "nuqs";
import { Suspense } from "react";
import { Sheet } from "./Sheet";

export default function page() {
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const { data: voucher, isPending } = useGetOrgVouchers({
    page,
    limit: 20,
  });
  const { data: event, isPending: isPending2 } = useGetOrgEvents();
  const dashboardTableData = {
    title: "",
    columns: [
      { key: "no", title: "No" },
      { key: "code", title: "Voucher code" },
      { key: "value", title: "Voucher value" },
      { key: "event.title", title: "Parent event" },
    ],
    data: voucher?.data ?? [],
  };

  const onChangePage = (page: number) => {
    setPage(page);
  };

  if (isPending || isPending2) return <LoadingScreen isDashboard={true} />;

  return (
    <section>
      <SidebarTriggerMobile>
        <SectionTitle className="mt-10">My vouchers</SectionTitle>
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
        <DataPagination onChangePage={onChangePage} meta={voucher.meta} />
      </Suspense>
    </section>
  );
}
