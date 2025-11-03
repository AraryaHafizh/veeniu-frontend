import { TextField } from "@/app/account/Textfield";
import { Button } from "@/components/ui/button";
import { SectionText } from "@/components/ui/section-text";
import { SectionTitle } from "@/components/ui/section-title";
import { Separator } from "@/components/ui/separator";

export const Data = () => (
  <section className="bg-card mt-10 rounded-lg p-15">
    <div>
      <SectionTitle>Lorem Ipsum</SectionTitle>
      <SectionText>name@mail.com</SectionText>
    </div>
    <Separator className="my-5" />
    <UserData />
  </section>
);

const UserData = () => (
  <div>
    <div className="flex w-full gap-5">
      <TextField
        id="first-name"
        label="First name"
        placeholder="lorem"
        className="flex-1"
      />
      <TextField
        id="last-name"
        label="Last name"
        placeholder="ipsum"
        className="flex-1"
      />
    </div>
    <Separator className="my-5" />
    <SectionTitle variant="small" className="mb-5">
      Change Password
    </SectionTitle>
    <div className="flex w-full items-end gap-5">
      <TextField
        id="new-password"
        label="New password"
        placeholder="lorem"
        className="flex-1"
      />
      <TextField
        id="confirm-password"
        label="Confirm password"
        placeholder="lorem"
        className="flex-1"
      />
    </div>
    <div className="mt-5 flex justify-end">
      <Button className="">Save changes</Button>
    </div>
  </div>
);
