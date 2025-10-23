import { InputField } from "@/components/ui/inputfield";
import { AuthRedirectText } from "@/components/ui/redirect-text";
import { CreateAccountConfirmation } from "../PopupConfirmation";

const confirmationMsg = {
  title: "Welcome aboard new Hooman!",
  desc: "You’re officially joining the pack. Let’s make your first event unforgettable!",
};

export default function SignupInput() {
  return (
    <section className="w-sm space-y-8 px-5 md:px-0">
      <div className="space-y-5">
        <InputField id="username" label="username" />
        <InputField id="Email" label="Email" />
        <InputField id="password" label="Password" type="password" />
        <InputField id="Referral code" label="Referral code (optional)" />
      </div>
      <CreateAccountConfirmation {...confirmationMsg} />
      <div>
        <AuthRedirectText
          text="Already a hooman?"
          linkText="Sign in"
          linkHref="/auth/signin"
        />
        <AuthRedirectText
          text="Hosting events?"
          linkText="Sign up as organizer"
          linkHref="/auth/signup/organizer"
        />
      </div>
    </section>
  );
}
