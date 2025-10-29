"use client";

import { SignoutConfirmation } from "@/app/auth/PopupConfirmation";
import { useLocalStorage } from "@/hooks/use-local-storage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "./button";

export const Navbar = () => {
  const router = useRouter();
  const name = useLocalStorage("name");

  const handleAuthClick = () => {
    if (!name) router.push("/auth/signin");
  };

  const ButtonContent = (
    <Button
      variant="outline_rounded"
      size="sm_rounded"
      onClick={handleAuthClick}
    >
      {name || "Sign in"}
    </Button>
  );

  return (
    <nav className="mx-5 my-5 flex items-center justify-between md:mx-[52px]">
      <Link href="/" className="text-primary text-4xl font-bold">
        Veeniu
      </Link>
      {name ? (
        <SignoutConfirmation>{ButtonContent}</SignoutConfirmation>
      ) : (
        ButtonContent
      )}
    </nav>
  );
};
