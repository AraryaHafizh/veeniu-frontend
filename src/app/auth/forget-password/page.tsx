"use client";

import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/inputfield";
import { AuthRedirectText } from "@/components/ui/redirect-text";
import { useRouter } from "next/navigation";
import { FooterAuth } from "../FooterAuth";

const ForgetPassword = () => {
  const router = useRouter();
  return (
    <div className="relative flex h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center md:flex-row md:space-x-28 md:text-left">
        <p className="text-primary mb-10 text-5xl font-black md:mb-0 md:w-[20vw]">
          Uh oh forget <br /> your password?
        </p>
        <div className="w-sm space-y-8 px-5 md:px-0">
          <InputField id="email" label="Email" />
          <div>
            <AuthRedirectText
              text="New to Veeniu?"
              linkText="Sign up"
              linkHref="/auth/signup"
              className="text-start"
            />
            <Button
              className="mt-4 w-full"
              onClick={() => router.push("/auth/new-password")}
            >
              Send Code
            </Button>
          </div>
        </div>
      </div>
      <FooterAuth />
    </div>
  );
};

export default ForgetPassword;
