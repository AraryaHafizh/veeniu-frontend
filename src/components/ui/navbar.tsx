"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "./button";

export const Navbar = () => {
  const router = useRouter();

  return (
    <section className="mx-5 my-[20px] flex justify-between md:mx-[52px]">
      <Link className="text-primary text-4xl font-bold" href="/">
        Veeniu
      </Link>
      <Button
        variant={"outline_rounded"}
        size={"sm_rounded"}
        onClick={() => router.push("/auth/signin")}
      >
        Sign in
      </Button>
    </section>
  );
};
