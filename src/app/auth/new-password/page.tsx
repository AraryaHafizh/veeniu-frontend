import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/inputfield";
import { AuthRedirectText } from "@/components/ui/redirect-text";

const ForgetPassword = () => {
  return (
    <div className="relative h-screen flex-col items-center justify-center">
      <div className="z-50 flex h-full w-full flex-col items-center justify-center md:flex-row md:space-x-28 md:text-left">
        <p className="text-primary text-5xl font-bold">
          Insert your <br /> new password
        </p>
        <div className="w-sm space-y-8">
          <InputField id="new-password" label="New password" />
          <div>
            <AuthRedirectText
              text="New to Veeniu?"
              linkText="Sign up"
              linkHref="/auth/signup"
              className="text-start"
            />
            <Button className="mt-4 w-full">Change password</Button>
            <AuthRedirectText
              text="Already a hooman?"
              linkText="Sign in"
              linkHref="/auth/signin"
              className="mt-8"
            />
          </div>
        </div>
      </div>
      <footer className="text-secondary absolute bottom-20 z-40 w-full text-center font-bold">
        © 2025 Veeniu
      </footer>
    </div>
  );
};

export default ForgetPassword;
