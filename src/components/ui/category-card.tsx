export interface CategoryCardProps {
  categoryId: number;
  title: string;
}

export const CategoryCard = ({ categoryId, title }: CategoryCardProps) => {
  return (
    <section className="border-secondary bg-secondary/10 text-secondary hover:bg-primary hover:border-primary flex h-[80px] w-[150px] cursor-pointer items-center justify-center rounded-xl border-2 p-5 text-center text-sm font-light transition-all duration-300 ease-in-out hover:text-[var(--footer-text)] md:w-[170px]">
      {title}
    </section>
  );
};
