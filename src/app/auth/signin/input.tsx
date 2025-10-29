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
import Link from "next/link";
import { useSigninForm } from "./form";

export default function SigninInput() {
  const { form, onSubmit, isPending } = useSigninForm();

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

          <Link
            href="/auth/forget-password"
            className="text-foreground/70 flex pt-5 text-right text-sm"
          >
            Forget password?
          </Link>

          <Button type="submit" className="w-full" disabled={isPending}>
            {}
            {isPending ? <LoadingAnimation /> : "Sign in"}
          </Button>
        </form>
      </Form>

      <AuthRedirectText
        text="New to Veeniu?"
        linkText="Sign up"
        linkHref="/auth/signup"
      />
    </section>
  );
}
