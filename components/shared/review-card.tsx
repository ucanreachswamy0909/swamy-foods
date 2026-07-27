import { Star } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import type { Review } from "@/types";

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card className="border-border/60 bg-card/80 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="mb-4 flex gap-1">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <p className="mb-6 text-base leading-relaxed text-foreground">
          &ldquo;{review.comment}&rdquo;
        </p>
        <div className="flex items-center gap-3">
          <Avatar className="size-10">
            <AvatarImage src={review.avatar} alt={review.name} />
            <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{review.name}</p>
            <p className="text-xs text-muted-foreground">{review.location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
