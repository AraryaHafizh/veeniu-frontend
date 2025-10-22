"use client";
import { useRouter } from "next/navigation";

export interface eventCardProps {
  eventId: number;
  thumbnail: string;
  title: string;
  location: string;
  price: string;
  date: string;
  isDense?: boolean;
}

export const EventCard = ({
  eventId,
  title,
  thumbnail,
  location,
  price,
  date,
  isDense,
}: eventCardProps) => {
  const router = useRouter();
  return (
    <section
      key={eventId}
      className="group relative flex-shrink-0 overflow-hidden rounded-xl hover:cursor-pointer 2xl:w-[420px]"
      onClick={() => {
        router.push(`/events/${eventId}`);
      }}
    >
      <img
        src={thumbnail}
        alt="image"
        className="brightness-90 transition-all duration-300 ease-in-out group-hover:brightness-40"
      />
      <div
        className={`absolute inset-0 ${isDense ? "my-2" : "my-4"} grid grid-rows-[auto_1fr_auto] px-1 text-center text-xs font-light text-transparent transition-all duration-300 ease-in-out group-hover:text-[var(--footer-text)] md:my-0 md:pt-7 md:pb-3 md:text-sm`}
      >
        <p>{date}</p>
        <div className="flex items-center justify-center">
          <h1 className="font-bold md:text-base">{title}</h1>
        </div>
        <div className="space-y-1">
          <p>{location}</p>
          <p>{price}</p>
        </div>
      </div>
    </section>
  );
};
