export const Pagintaion = ({ page }: { page: string }) => {
  return (
    <section className="text-secondary flex space-x-2 text-center">
      <div className="border-secondary hover:bg-primary hover:border-primary w-9 cursor-pointer rounded-lg border p-[4px] transition-all duration-300 ease-in-out hover:text-[var(--footer-text)]">{`<`}</div>
      <div className="border-secondary w-20 rounded-full border p-[4px]">
        {page}
      </div>
      <div className="border-secondary hover:bg-primary hover:border-primary w-9 cursor-pointer rounded-lg border p-[4px] transition-all duration-300 ease-in-out hover:text-[var(--footer-text)]">{`>`}</div>
    </section>
  );
};
