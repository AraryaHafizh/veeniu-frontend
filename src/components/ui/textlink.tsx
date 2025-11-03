import Link from "next/link";
import React from "react";

export const TextLink = ({ link }: { link: string }) => {
  return (
    <Link
      href={link}
      className="hover:text-primary text-sm underline transition-all duration-200"
    >
      See all
    </Link>
  );
};
