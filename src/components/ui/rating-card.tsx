"use client";

export interface RatingCardProps {
  user: string;
  rating?: string;
  review?: string;
  event?: string;
}

export const RatingCard = ({
  user,
  rating,
  review,
  event
}: RatingCardProps) => {
  return (
    <section className="border-4 p-5 rounded-3xl">
        <div className="flex mb-6">
            <p>{user}</p>
            <p>{rating}</p>
        </div>
        <div>
            <p className="mb-6">{review}</p>
            <p>Event: <br /> {event}</p>
        </div>
    </section>
  );
};
