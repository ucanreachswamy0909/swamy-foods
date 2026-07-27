import { cn } from "@/lib/utils";
import type { Category } from "@/types";

interface CategoryCardProps {
  category: Category;
  className?: string;
}

export function CategoryCard({
  category,
  className,
}: CategoryCardProps) {
  return (
    <button
      type="button"
      className={cn(
        "group w-full overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-xl",
        className
      )}
    >
      <div className="flex flex-col items-center">

        <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-50 transition-all duration-300 group-hover:scale-110 group-hover:bg-green-100">
          <span className="text-5xl">
            {category.icon}
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 text-center">
          {category.name}
        </h3>

        <p className="mt-2 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
          {category.productCount}+ Products
        </p>

      </div>
    </button>
  );
}