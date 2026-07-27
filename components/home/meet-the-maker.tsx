import Image from "next/image";

import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { Button } from "@/components/ui/button";
import { maker } from "@/constants/data";

export function MeetTheMaker() {
  return (
    <section id="maker" className="bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <MotionWrapper className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src={maker.image}
              alt={maker.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </MotionWrapper>

          <MotionWrapper delay={0.15}>
            <p className="mb-3 text-sm font-medium tracking-widest text-brand uppercase">
              Our Story
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Meet the Maker
            </h2>
            <p className="mt-2 text-lg text-brand">{maker.name}</p>
            <p className="text-sm text-muted-foreground">{maker.title}</p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {maker.bio}
            </p>

            <div className="mt-8 grid grid-cols-3 gap-6">
              {maker.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-semibold tracking-tight text-brand sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <Button className="mt-8 bg-brand hover:bg-brand/90" size="lg">
              Read Full Story
            </Button>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
