"use client";

import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/inputfield";
import { AuthRedirectText } from "@/components/ui/redirect-text";

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
      <div>
        <AuthRedirectText
          text="Already a hooman?"
          linkText="Sign in"
          linkHref="/auth/signin"
        />
        <AuthRedirectText
          text="Hosting events?"
          linkText="Sign up as organizer"
          linkHref="/auth/signup/host"
        />
      </div>
    </section>
  );
}
