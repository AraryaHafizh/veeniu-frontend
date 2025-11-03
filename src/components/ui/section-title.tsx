import clsx from "clsx";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "small";
}

export const SectionTitle = ({
  children,
  className,
  variant = "default",
}: SectionTitleProps) => {
  const variantClass = {
    default: "text-3xl font-semibold",
    small: "text-xl font-semibold",
  }[variant];

  return <p className={clsx(variantClass, className)}>{children}</p>;
};
