import { CategoryCard } from "@/components/shared/category-card";
import {
  MotionItem,
  MotionStagger,
  MotionWrapper,
} from "@/components/shared/motion-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { categories } from "@/constants/data";

export function Categories() {
  return (
    <section id="categories" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionWrapper>
          <SectionHeader
            eyebrow="Browse"
            title="Shop by Category"
            description="Explore authentic homemade foods sourced directly from trusted village makers across India."
          />
        </MotionWrapper>

        <MotionStagger className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 lg:gap-6">
          {categories.map((category) => (
            <MotionItem key={category.id}>
              <CategoryCard category={category} />
            </MotionItem>
          ))}
        </MotionStagger>

        <div className="mt-12 flex justify-center">
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  );
}