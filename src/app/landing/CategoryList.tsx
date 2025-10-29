import { CategoryCard } from "@/components/ui/category-card";

const categories = ["Music", "Art", "Food", "Hobbies", "Sports", "Comedy"];

export const CategoryList = () => (
  <section className="mt-10 space-y-4 md:mt-32">
    <p className="text-primary px-5 text-xl font-bold md:px-[52px] md:text-3xl">
      Event by category
    </p>
    <div className="scroll-hidden flex gap-5 overflow-x-auto px-5 md:justify-evenly">
      {categories.map((category, i) => (
        <CategoryCard title={category} />
      ))}
    </div>
  </section>
);
