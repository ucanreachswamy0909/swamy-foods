"use client";

import { Heart, ShoppingCart, Star, Truck } from "lucide-react";
import Image from "next/image";

import { useCart } from "@/components/providers/cart-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <Card className="group overflow-hidden rounded-3xl border border-border/60 bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
          sizes="(max-width:768px)100vw,(max-width:1200px)50vw,25vw"
        />

        {product.badge && (
          <Badge className="absolute left-3 top-3 bg-green-600 text-white">
            {product.badge}
          </Badge>
        )}

        <button
          type="button"
          className="absolute right-3 top-3 rounded-full bg-white/90 p-2 shadow transition hover:scale-110"
        >
          <Heart className="h-5 w-5 text-red-500" />
        </button>
      </div>

      <CardHeader>
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wide text-green-700">
            {product.village}
          </span>

          <div className="flex items-center gap-1 text-sm">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            {product.rating}
          </div>
        </div>

        <CardTitle className="line-clamp-2 text-lg">
          {product.name}
        </CardTitle>

        <CardDescription>
          {product.description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold">
              ₹{product.price}
            </p>

            <p className="text-sm text-green-600">
              Free Delivery
            </p>
          </div>

          <Truck className="h-6 w-6 text-green-600" />
        </div>
      </CardContent>

      <CardFooter>
        <Button
          className="w-full bg-green-600 hover:bg-green-700"
          onClick={addToCart}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}