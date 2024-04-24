import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import React from "react";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const roundedRating = Math.round(rating);
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        if (starValue <= roundedRating) {
          // Full star
          return (
            <StarFilledIcon
              key={index}
              className="text-primary"
              height={18}
              width={18}
            />
          );
        } else if (starValue - 0.5 === rating) {
          // Half star
          return (
            <StarFilledIcon
              key={index}
              className="text-primary"
              height={18}
              width={18}
            />
          );
        } else {
          // Empty star
          return (
            <StarIcon
              key={index}
              className="text-primary"
              height={18}
              width={18}
            />
          );
        }
      })}
    </div>
  );
};

export default StarRating;
