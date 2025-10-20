"use client";

export interface eventCardProps {
  eventId: number;
  thumbnail: string;
  title: string;
  location: string;
  price: string;
  date: string;
}

export const EventCard = ({
  eventId,
  title,
  thumbnail,
  location,
  price,
  date,
}: eventCardProps) => {
  return (
    <section
      key={eventId}
      className="group relative w-[420px] flex-shrink-0 overflow-hidden rounded-xl hover:cursor-pointer"
      onClick={() => {}}
    >
      <img
        src={thumbnail}
        alt="image"
        className="brightness-90 transition-all duration-300 ease-in-out group-hover:brightness-40"
      />
      <div className="absolute inset-0 grid grid-rows-[auto_1fr_auto] pt-7 pb-3 text-center text-sm font-light text-transparent transition-all duration-300 ease-in-out group-hover:text-[var(--footer-text)]">
        <p>{date}</p>
        <div className="flex items-center justify-center">
          <h1 className="text-base font-bold">{title}</h1>
        </div>
        <div className="space-y-1">
          <p>{location}</p>
          <p>{price}</p>
        </div>
      </div>
    </section>
  );
};
