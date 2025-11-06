import { Button } from "@/components/ui/button";
import { SectionText } from "@/components/ui/section-text";
import { SectionTitle } from "@/components/ui/section-title";
import { Separator } from "@/components/ui/separator";
import { TextField } from "../../components/Textfield";
import { SignoutConfirmation } from "@/components/popup-confirmation";
import { splitName } from "@/lib/utils";

export const Data = ({ data }: { data: any }) => (
  <section className="bg-card mt-10 rounded-lg p-5 md:p-15">
    <div>
      <SectionTitle>{data.name}</SectionTitle>
      <SectionText>{data.email}</SectionText>
    </div>
    <Separator className="my-5" />
    <UserData data={data} />
  </section>
);

const UserData = ({ data }: { data: any }) => {
  const names = splitName(data.name);

  return (
    <div>
      <div className="w-full gap-5 space-y-5 md:flex md:space-y-0">
        <TextField
          id="first-name"
          label="First name"
          placeholder={names[0]}
          className="flex-1"
        />
        <TextField
          id="last-name"
          label="Last name"
          placeholder={names[1]}
          className="flex-1"
        />
      </div>
      <Separator className="my-5" />
      <SectionTitle variant="small" className="mb-5">
        Change Password
      </SectionTitle>
      <div className="w-full items-end gap-5 space-y-5 md:flex md:space-y-0">
        <TextField
          id="new-password"
          type="password"
          label="New password"
          placeholder="********"
          className="flex-1"
        />
        <TextField
          id="confirm-password"
          type="password"
          label="Confirm password"
          placeholder="********"
          className="flex-1"
        />
      </div>
      <div className="mt-5 flex justify-end gap-5">
        <SignoutConfirmation>
          <Button variant={"destructive"}>Sign out</Button>
        </SignoutConfirmation>
        <Button>Save changes</Button>
      </div>
    </div>
  );
};
