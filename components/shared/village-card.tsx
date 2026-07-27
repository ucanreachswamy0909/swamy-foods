import { MapPin, Package } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Village } from "@/types";

interface VillageCardProps {
  village: Village;
}

export function VillageCard({ village }: VillageCardProps) {
  return (
    <Card className="group overflow-hidden border-border/60 p-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={village.image}
          alt={village.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute right-0 bottom-0 left-0 p-6 text-white">
          <div className="mb-2 flex items-center gap-1.5 text-sm text-white/80">
            <MapPin className="size-3.5" />
            {village.state}
          </div>
          <h3 className="text-2xl font-semibold tracking-tight">
            {village.name}
          </h3>
        </div>
      </div>
      <CardContent className="p-6">
        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {village.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Package className="size-4" />
            {village.productCount} products
          </div>
          <Button variant="outline" size="sm">
            Explore
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
