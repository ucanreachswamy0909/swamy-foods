import { VillageCard } from "@/components/shared/village-card";
import {
  MotionItem,
  MotionStagger,
  MotionWrapper,
} from "@/components/shared/motion-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { featuredVillages } from "@/constants/data";

export function FeaturedVillages() {
  return (
    <section id="villages" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionWrapper>
          <SectionHeader
            eyebrow="Discover"
            title="Featured Villages"
            description="Every product tells a story. Explore the villages and communities behind your food."
          />
        </MotionWrapper>

        <MotionStagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredVillages.map((village) => (
            <MotionItem key={village.id}>
              <VillageCard village={village} />
            </MotionItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
