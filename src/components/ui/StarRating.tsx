import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  size?: "sm" | "md";
  className?: string;
}

export function StarRating({ rating, size = "sm", className }: StarRatingProps) {
  const iconSize = size === "sm" ? 14 : 18;

  return (
    <div className={cn("flex items-center gap-0.5", className)}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={iconSize}
          className={cn(
            i < Math.floor(rating)
              ? "fill-gold text-gold"
              : i < rating
                ? "fill-gold/50 text-gold"
                : "fill-none text-zinc-600"
          )}
        />
      ))}
    </div>
  );
}
