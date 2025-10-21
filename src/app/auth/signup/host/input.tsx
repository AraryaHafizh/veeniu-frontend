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
      </div>

      <Button className="mt-4 w-full">Sign in</Button>
      <div className="flex w-full flex-col items-center justify-center space-y-2">
        <AuthRedirectText
          text="Already a hooman?"
          linkText="Sign in"
          linkHref="/auth/signin"
        />
      </div>
    </section>
  );
}
