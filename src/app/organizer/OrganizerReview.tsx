import { RatingCard, RatingCardProps } from "@/components/ui/rating-card";

export const OrganizerReview = (data: RatingCardProps) => (
  <div className="grid gap-7 md:grid-cols-3 xl:grid-cols-4">
    {Array.from({ length: 10 }).map((_, i) => (
      <RatingCard
        key={i}
        user={data.user}
        rating={data.rating}
        review={data.review}
        event={data.event}
      />
    ))}
  </div>
);
