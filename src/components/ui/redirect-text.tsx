"use client";

import Link from "next/link";
import clsx from "clsx";

interface AuthRedirectTextProps {
  text: string;
  linkText: string;
  linkHref: string;
  className?: string;
}

export const AuthRedirectText = ({
  text,
  linkText,
  linkHref,
  className,
}: AuthRedirectTextProps) => {
  return (
    <p className={clsx("text-foreground/70 text-center text-sm", className)}>
      {text}{" "}
      <Link
        href={linkHref}
        className="hover:text-foreground underline transition"
      >
        {linkText}
      </Link>
    </p>
  );
};
