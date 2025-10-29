"use client";
import { useRouter } from "next/navigation";

export interface eventCardProps {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  location: string;
  startDate: string;
  endDate: string;
  price: number;
  totalSeats: number;
  availableSeats: number | null;
  organizerId: string;
  deletedAt: string | null;
}

interface eventCardPropsExtended extends eventCardProps {
  isDense?: boolean;
}

export const EventCard = ({
  id,
  title,
  imageUrl,
  location,
  price,
  startDate,
  isDense,
}: eventCardPropsExtended) => {
  const router = useRouter();
  return (
    <section
      key={id}
      className="group relative flex-shrink-0 overflow-hidden rounded-xl hover:cursor-pointer"
      onClick={() => {
        router.push(`/events/${id}`);
      }}
    >
      <img
        src={imageUrl}
        alt="image"
        className="brightness-90 transition-all duration-300 ease-in-out group-hover:brightness-40 group-active:brightness-40"
      />
      <div
        className={`absolute inset-0 ${isDense ? "my-2" : "my-4"} grid grid-rows-[auto_1fr_auto] px-2 text-center text-xs font-light text-transparent transition-all duration-300 ease-in-out select-none group-hover:text-[var(--footer-text)] group-active:text-[var(--footer-text)] md:my-0 md:pt-7 md:pb-3 md:text-sm`}
      >
        <p>{startDate}</p>
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

export const EventCardEmpty = ({ isDense }: { isDense?: boolean }) => {
  return (
    <div
      className={`relative aspect-video flex-shrink-0 animate-pulse overflow-hidden rounded-xl bg-gray-200/60`}
    >
      <div className="absolute inset-0 bg-[var(--container)]" />

      <div
        className={`absolute inset-0 ${
          isDense ? "my-2" : "my-4"
        } grid grid-rows-[auto_1fr_auto] px-2 text-center text-xs font-light text-transparent select-none md:my-0 md:pt-7 md:pb-3 md:text-sm`}
      >
        <div className="bg-foreground/10 mx-auto h-3 w-1/3 rounded"></div>
        <div className="flex items-center justify-center">
          <div className="bg-foreground/10 h-4 w-2/3 rounded"></div>
        </div>
        <div className="space-y-1">
          <div className="bg-foreground/10 mx-auto h-3 w-1/2 rounded"></div>
          <div className="bg-foreground/10 mx-auto h-3 w-1/4 rounded"></div>
        </div>
      </div>
    </div>
  );
};
