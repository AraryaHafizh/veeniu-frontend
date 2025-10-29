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
import { AuthRedirectText } from "@/components/ui/redirect-text";
import { SendLinkConfirmation } from "../PopupConfirmation";
import { useForgetPassForm } from "./form";
import { LoadingAnimation } from "@/components/ui/loading-animation";

export default function ForgetPassInput() {
  const { form, onSubmit, openDialog, setOpenDialog, isPending } =
    useForgetPassForm();

  return (
    <section className="w-sm space-y-8 px-5 md:px-0">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
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

      <SendLinkConfirmation open={openDialog} onOpenChange={setOpenDialog} />
    </section>
  );
}
