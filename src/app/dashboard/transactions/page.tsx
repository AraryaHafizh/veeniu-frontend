"use client";

import { SidebarTriggerMobile } from "@/components/sidebar-trigger-mobile";
import { Input } from "@/components/ui/input";
import { SectionTitle } from "@/components/ui/section-title";

export default function page() {
  return (
    <section>
      <SidebarTriggerMobile>
        <SectionTitle className="mt-10">Transactions</SectionTitle>
      </SidebarTriggerMobile>
      <div className="mt-10 mb-5 flex justify-between">
        <Input type="text" placeholder="Search" className="w-[280px]"></Input>
      </div>
      <section className="my-5 grid w-full grid-cols-1"></section>
      {/* <DataPagination /> */}
    </section>
  );
}
