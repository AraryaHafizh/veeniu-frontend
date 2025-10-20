import { Input } from "./input";
import { Label } from "./label";

export const InputField = ({
  id,
  label,
  type = "text",
}: {
  id: string;
  label: string;
  type?: string;
}) => (
  <div className="space-y-2">
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} type={type} />
  </div>
);