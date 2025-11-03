"use client";

import { eventData } from "@/lib/const-data";
import { formatCurrency, formatDate } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { SectionText } from "./ui/section-text";

export const EventCard = () => {
  const router = useRouter();
  return (
    <div
      className="cursor-pointer rounded-lg border p-3 transition-all duration-200 hover:bg-[var(--container-hover)] active:bg-[var(--container-hover)]"
      onClick={() => router.push(`/events/${eventData.title}`)}
    >
      <img
        src={eventData.imageUrl}
        className="h-[150px] w-full rounded object-cover"
      />
      <p className="mt-3 font-medium">{eventData.title}</p>
      <div className="mt-2">
        <SectionText>{formatCurrency(eventData.price)}</SectionText>
        <SectionText>{formatDate(eventData.startDate, "date")}</SectionText>
      </div>
    </div>
  );
};
