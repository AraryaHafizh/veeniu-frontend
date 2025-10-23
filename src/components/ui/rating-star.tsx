"use client";

import clsx from "clsx";
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  max?: number;
  size?: number;
  gap?: string;
  onRate?: (value: number) => void;
}

export const RatingStar: React.FC<StarRatingProps> = ({
  rating,
  max = 5,
  size = 20,
  gap = "gap-1",
  onRate,
}) => {
  const stars = Array.from({ length: max }, (_, i) => i + 1);

  return (
    <div className={`flex items-center ${gap}`}>
      {stars.map((value) => {
        const filled = value <= Math.floor(rating);

        return (
          <Star
            key={value}
            size={size}
            className={clsx(
              `duration-200", ${
                filled
                  ? "fill-secondary text-secondary"
                  : "fill-border text-border"
              }, ${onRate && "hover:scale-110"} transition-all ${onRate ? "cursor-pointer" : ""}`,
            )}
            stroke="0"
            onClick={() => onRate?.(value)}
          />
        );
      })}
    </div>
  );
};
