"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoadingAnimation } from "@/components/ui/loading-animation";
import { AuthRedirectText } from "@/components/ui/redirect-text";
import { PasswordChangeConfirmation } from "../../PopupConfirmation";
import { useNewPassForm } from "./form";

export default function NewPassInput({ token }: { token: string }) {
  const { form, onSubmit, openDialog, setOpenDialog, isPending } =
    useNewPassForm(token);

  return (
    <section className="w-sm space-y-8 px-5 md:px-0">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New password</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <AuthRedirectText
            text="New to Veeniu?"
            linkText="Sign up"
            linkHref="/auth/signup"
            className="flex gap-1 pt-5"
          />
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? <LoadingAnimation /> : "Send reset link"}
          </Button>
        </form>
      </Form>

      <PasswordChangeConfirmation
        open={openDialog}
        onOpenChange={setOpenDialog}
      />

      <AuthRedirectText
        text="Already a hooman?"
        linkText="Sign in"
        linkHref="/auth/signin"
        className="mt-8"
      />
    </section>
  );
}
