"use client";

import { Wrapper } from "@/components/ui/wrapper";
import { EventsList } from "./EventsList";
import Toolbar from "./Toolbar";
import { DataPagination } from "@/components/data-pagination";
import { useLanding } from "../landing/useLanding";
import { EventProps } from "@/props/event.props";
import { LoadingScreen } from "@/components/ui/loading-animation";

export default function Event() {
  const { data, isPending } = useLanding();
  const eventData: EventProps[] = data?.data ?? [];

  if (isPending) return <LoadingScreen />;
  return (
    <main className="h-[63vh]">
      <Wrapper className="mt-[100px]">
        <Toolbar />
        <EventsList eventData={eventData} />
        <DataPagination />
      </Wrapper>
    </main>
  );
}
