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
import { CreateAccountConfirmation } from "../../PopupConfirmation";
import { useOrgSignupForm } from "../form";

const confirmationMsg = {
  title: "Welcome aboard Organizer!",
  desc: "Ready to make some noise? Let’s create events that everyone will remember!",
};

export default function SignupInput() {
  const { form, onSubmit, openDialog, setOpenDialog, isPending } =
    useOrgSignupForm();

  return (
    <section className="w-sm space-y-8 px-5 md:px-0">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="mt-5 w-full" disabled={isPending}>
            {isPending ? <LoadingAnimation /> : "Create Organizer Account"}
          </Button>
        </form>
      </Form>

      <CreateAccountConfirmation
        open={openDialog}
        onOpenChange={setOpenDialog}
        {...confirmationMsg}
      />

      <div>
        <AuthRedirectText
          text="Already a hooman?"
          linkText="Sign in"
          linkHref="/auth/signin"
        />
      </div>
    </section>
  );
}
