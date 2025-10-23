"use client";

import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/inputfield";
import { AuthRedirectText } from "@/components/ui/redirect-text";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SigninInput() {
  const router = useRouter();

  return (
    <section className="w-sm space-y-8 px-5 md:px-0">
      <div className="space-y-5">
        <InputField id="email" label="Email" />
        <InputField id="password" label="Password" type="password" />
      </div>

      <Link href="/auth/forget-password" className="text-foreground/70 text-sm">
        Forget password?
      </Link>
      <Button className="mt-4 w-full" onClick={() => router.push("/")}>
        Sign in
      </Button>
      <AuthRedirectText
        text="New to Veeniu?"
        linkText="Sign up"
        linkHref="/auth/signup"
      />
    </section>
  );
}
