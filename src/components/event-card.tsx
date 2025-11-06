"use client";

import { formatDate } from "@/lib/utils";
import { EventCardProps } from "@/props/eventCard.props";
import { useRouter } from "next/navigation";
import { SectionText } from "./ui/section-text";

export const EventCard = ({ eventCard }: { eventCard: EventCardProps }) => {
  const router = useRouter();
  return (
    <div
      className="cursor-pointer rounded-lg border p-3 transition-all duration-200 hover:bg-[var(--container-hover)] active:bg-[var(--container-hover)]"
      onClick={() => router.push(`/events/${eventCard.slug}`)}
    >
      <img
        src={eventCard.imageUrl}
        className="h-[150px] w-full rounded object-cover"
      />
      <p className="mt-3 font-medium">{eventCard.title}</p>
      <div className="mt-2">
        {/* <SectionText>{formatCurrency(eventCard.price)}</SectionText> */}
        <SectionText>{eventCard.location}</SectionText>
        <SectionText>{formatDate(eventCard.startDate, "date")}</SectionText>
      </div>
    </div>
  );
};
