import clsx from "clsx";

interface SectionTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "transparant";
}

export const SectionText = ({
  children,
  className,
  variant = "transparant",
}: SectionTextProps) => {
  const variantClass = {
    default: "text-sm font-light",
    transparant: "text-sm font-light opacity-70",
  }[variant];

  return <p className={clsx(variantClass, className)}>{children}</p>;
};
