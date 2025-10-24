import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/inputfield";
import { RatingCardProps } from "@/components/ui/rating-card";
import { User } from "lucide-react";

export const AccountSetting = (data: RatingCardProps) => (
  <div className="h-full items-center gap-7 space-y-5 md:flex">
    <User className="h-[150px] w-[150px] rounded-2xl border" />
    <div className="space-y-5 md:w-96">
      <InputField id="username" label="username" />
      <InputField id="email" label="email" />
      <InputField id="password" label="password" />
      <Button className="w-full">Save</Button>
    </div>
  </div>
);
