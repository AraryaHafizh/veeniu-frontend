import { InputField } from "@/components/ui/inputfield";
import { AuthRedirectText } from "@/components/ui/redirect-text";
import { CreateAccountConfirmation } from "../../PopupConfirmation";

const confirmationMsg = {
  title: "Welcome aboard Organizer!",
  desc: "Ready to make some noise? Let’s create events that everyone will remember!",
};

export default function SignupOrgInput() {
  return (
    <section className="w-sm space-y-8 px-5 md:px-0">
      <div className="space-y-5">
        <InputField id="username" label="username" />
        <InputField id="Email" label="Email" />
        <InputField id="password" label="Password" type="password" />
      </div>
      <CreateAccountConfirmation {...confirmationMsg} />
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
