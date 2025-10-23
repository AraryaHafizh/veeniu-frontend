import { RatingStar } from "./rating-star";

export interface RatingCardProps {
  user: string;
  rating: number;
  review: string;
  event: string;
}

export const RatingCard = ({
  user,
  rating,
  review,
  event,
}: RatingCardProps) => {
  return (
    <section className="rounded-xl border-1 p-5 text-sm transition-all duration-300 ease-in-out hover:bg-[var(--container-hover)]">
      <div className="mb-2 flex items-center gap-1">
        <p>{user}</p>
        <RatingStar rating={rating} size={15} gap="gap-0" />
      </div>
      <div className="">
        <p className="mb-5 text-xl">{review}</p>
        <p className="bg-border/20 rounded-sm p-2">{event}</p>
      </div>
    </section>
  );
};
