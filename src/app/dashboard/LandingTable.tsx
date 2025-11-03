"use client";

import { Table } from "@/components/table";
import { tableData } from "@/lib/const-data";

export const LandingTable = () => (
  <section className="my-5 grid w-full grid-cols-1 gap-5 md:grid-cols-2">
    <Table {...tableData}/>
    <Table {...tableData}/>
  </section>
);
