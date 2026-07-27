import { ProductCard } from "@/components/shared/product-card";
import {
  MotionItem,
  MotionStagger,
  MotionWrapper,
} from "@/components/shared/motion-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { featuredProducts } from "@/constants/data";

export function FeaturedProducts() {
  return (
    <section id="products" className="bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionWrapper>
          <SectionHeader
            eyebrow="Curated"
            title="Featured Products"
            description="Handpicked favorites from village kitchens — each product traceable to its origin."
          />
        </MotionWrapper>

        <MotionStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <MotionItem key={product.id}>
              <ProductCard product={product} />
            </MotionItem>
          ))}
        </MotionStagger>

        <MotionWrapper className="mt-12 text-center" delay={0.2}>
          <Button variant="outline" size="lg">
            View All Products
          </Button>
        </MotionWrapper>
      </div>
    </section>
  );
}
