"use client";

import { LoadingScreen } from "@/components/ui/loading-animation";
import { Highlight } from "./Highlight";
import { Latest } from "./Latest";
import { useLanding } from "./useLanding";
import { EventProps } from "@/props/event.props";

export default function Landing() {
  const { data, isPending } = useLanding();
  const eventData: EventProps[] = data?.data ?? [];

  if (isPending) return <LoadingScreen />;

  return (
    <main>
      <Highlight eventData={eventData} />
      <Latest eventData={eventData} />
    </main>
  );
}
