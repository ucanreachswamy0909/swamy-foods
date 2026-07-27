"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const popularSearches = ["Turmeric", "Pickles", "Millet", "Honey", "Spices"];

export function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <section className="relative z-10 -mt-8 px-4 sm:px-6 lg:px-8">
      <MotionWrapper className="mx-auto max-w-3xl">
        <div className="rounded-2xl border border-border/60 bg-card p-2 shadow-xl shadow-black/5">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search village foods, spices, pickles..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="h-12 border-0 bg-transparent pr-4 pl-12 text-base shadow-none focus-visible:ring-0"
              />
            </div>
            <Button variant="outline" size="icon" className="size-12 shrink-0">
              <SlidersHorizontal className="size-4" />
            </Button>
            <Button className="h-12 shrink-0 bg-brand px-6 hover:bg-brand/90">
              Search
            </Button>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          <span className="text-sm text-muted-foreground">Popular:</span>
          {popularSearches.map((term) => (
            <button
              key={term}
              type="button"
              onClick={() => setQuery(term)}
              className="rounded-full border border-border/60 bg-background px-3 py-1 text-sm text-muted-foreground transition-colors hover:border-brand/30 hover:text-foreground"
            >
              {term}
            </button>
          ))}
        </div>
      </MotionWrapper>
    </section>
  );
}
