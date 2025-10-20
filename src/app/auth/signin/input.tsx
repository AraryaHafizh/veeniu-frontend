"use client";

import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/inputfield";
import Link from "next/link";

export default function SigninInput() {
  return (
    <section className="w-sm space-y-8">
      <div className="space-y-5">
        <InputField id="email" label="Email" />
        <InputField id="password" label="Password" type="password" />
      </div>

      <Link href="/auth/signin" className="text-foreground/70 text-sm">
        Forget password?
      </Link>
      <Button className="mt-4 w-full">Sign in</Button>
      <div className="flex w-full justify-center">
        <Link href="/auth/signin" className="text-foreground/70 text-sm">
          New to Veeniu? Sign up
        </Link>
      </div>
    </section>
  );
}
