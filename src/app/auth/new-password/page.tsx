"use client";

import { InputField } from "@/components/ui/inputfield";
import { AuthRedirectText } from "@/components/ui/redirect-text";
import { FooterAuth } from "../FooterAuth";
import { PasswordChangeConfirmation } from "../PopupConfirmation";

const ForgetPassword = () => {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center md:flex-row md:space-x-28 md:text-left">
        <p className="text-primary mb-10 text-5xl font-black md:mb-0 md:w-[20vw]">
          Insert your <br /> new password
        </p>
        <div className="w-sm space-y-8 px-5 md:px-0">
          <InputField id="new-password" label="New password" />
          <div>
            <AuthRedirectText
              text="New to Veeniu?"
              linkText="Sign up"
              linkHref="/auth/signup"
              className="text-start"
            />
            <PasswordChangeConfirmation />
            <AuthRedirectText
              text="Already a hooman?"
              linkText="Sign in"
              linkHref="/auth/signin"
              className="mt-8"
            />
          </div>
        </div>
      </div>
      <FooterAuth />
    </div>
  );
};

export default ForgetPassword;
