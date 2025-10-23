"use client";

interface contentTitleProps {
  selected: string;
  setSelected: (value: string) => void;
  title: string;
}

export const ContentTitle = ({
  selected,
  setSelected,
  title,
}: contentTitleProps) => (
  <p
    className={`${selected === title ? "text-primary" : "text-foreground/50 hover:text-foreground/70"} cursor-pointer text-xl font-bold transition-all duration-300 ease-in-out md:text-3xl`}
    onClick={() => setSelected(title)}
  >
    {title}
  </p>
);
