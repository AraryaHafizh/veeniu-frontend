"use client";

import { DataPagination } from "@/components/data-pagination";
import { Input } from "@/components/ui/input";
import { SectionTitle } from "@/components/ui/section-title";

export default function page() {
  return (
    <section>
      <SectionTitle className="mt-10">Transactions</SectionTitle>
      <div className="mt-10 mb-5 flex justify-between">
        <Input type="text" placeholder="Search" className="w-[280px]"></Input>
      </div>
      <section className="my-5 grid w-full grid-cols-1">
        <DashboardTable {...dashboardTableData} />
      </section>
      <DataPagination />
    </section>
  );
}
