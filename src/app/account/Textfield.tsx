import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import clsx from "clsx"

interface TextFieldProps {
  id: string
  label: string
  placeholder?: string
  className?: string
  autoComplete?: string
}

export const TextField = ({
  id,
  label,
  placeholder = "",
  className,
  autoComplete = "off",
}: TextFieldProps) => {
  return (
    <div className={clsx("flex flex-col gap-2", className)}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
    </div>
  )
}
