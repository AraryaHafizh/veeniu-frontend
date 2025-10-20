"use client";

export interface TicketCardProps {
  title: string;
  price?: string;
  date?: string;
  location?: string;
  isFinished?: boolean;
}

export const TicketCard = ({
  title,
  price,
  date,
  location,
  isFinished,
}: TicketCardProps) => {
  return (
    <section
      className={`relative rounded-xl bg-[var(--container)] p-3 transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-[var(--container-hover)] ${isFinished ? "brightness-80" : "blur-none"}`}
    >
      <div
        className="absolute top-0 left-[80%] h-full w-[5px]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, #ed3e2750 0 15px,transparent 15px 20px)",
        }}
      ></div>

      <div className="relative z-10 text-sm font-light">
        <h1 className="pb-5 text-base font-bold">{title}</h1>
        {price ? (
          <p>{price}</p>
        ) : (
          <>
            <p>{date}</p>
            <p>{location}</p>
          </>
        )}
      </div>

      {isFinished && (
        <div className="bg-background/30 absolute inset-0 z-20 flex items-center justify-center rounded-xl backdrop-blur-[2px]">
          <p className="text-secondary text-5xl font-semibold">Finished</p>
        </div>
      )}
    </section>
  );
};
