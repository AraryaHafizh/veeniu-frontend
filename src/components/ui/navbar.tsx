import Link from "next/link";
import { Button } from "./button";

export const Navbar = () => {
  return (
    <section className="mx-[52px] my-[20px] flex justify-between">
      <Link className="text-primary text-4xl font-bold" href="/">
        Veeniu
      </Link>
      <Button variant={"outline_rounded"} size={"sm_rounded"}>
        Sign in
      </Button>
    </section>
  );
};
