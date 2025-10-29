"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { SigninFormSchema, SigninFormValues } from "../formSchema";
import { useSignin } from "../hooks";

export const useSigninForm = () => {
  const { mutateAsync: signin, isPending } = useSignin();

  const form = useForm<SigninFormValues>({
    resolver: zodResolver(SigninFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: SigninFormValues) {
    await signin(values);
  }

  return { form, onSubmit, isPending };
};
