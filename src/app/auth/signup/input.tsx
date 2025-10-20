"use client";

import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/inputfield";
import Link from "next/link";

export default function SigninInput() {
  return (
    <section className="w-sm space-y-8">
      <div className="space-y-5">
        <InputField id="username" label="username" />
        <InputField id="Email" label="Email" />
        <InputField id="password" label="Password" type="password" />
        <InputField id="Referral code" label="Referral code (optional)" />
      </div>

      <Button className="mt-4 w-full">Sign in</Button>
      <div className="flex w-full flex-col items-center justify-center space-y-2">
        <Link href="/auth/signin" className="text-foreground/70 text-sm">
          Already a hooman? Sign in
        </Link>
        <Link href="/auth/signin" className="text-foreground/70 text-sm">
          Hosting events? Sign up as organizer
        </Link>
      </div>
    </section>
  );
}
