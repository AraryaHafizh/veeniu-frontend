"use client";

import { useRouter } from "next/navigation";

export interface CategoryCardProps {
  title: string;
}

export const CategoryCard = ({ title }: CategoryCardProps) => {
  const router = useRouter();

  return (
    <section
      className="border-secondary bg-secondary/10 text-secondary hover:bg-primary hover:border-primary active:bg-primary active:border-primary flex h-[80px] w-[150px] flex-shrink-0 cursor-pointer items-center justify-center rounded-xl border-2 p-5 text-center text-sm font-light transition-all duration-300 ease-in-out select-none hover:text-[var(--footer-text)] active:text-[var(--footer-text)] md:w-[220px] md:text-lg"
      onClick={() => router.push(`/events?category=${title.toLowerCase()}`)}
    >
      {title}
    </section>
  );
};
