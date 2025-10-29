"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SignupFormSchema, SignupFormValues } from "../formSchema";
import { useOrgSignup, useSignup } from "../hooks";

export const useSignupForm = () => {
  const { mutateAsync: signup, isPending } = useSignup();

  const [openDialog, setOpenDialog] = useState(false);

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(SignupFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      referralCode: "",
    },
  });

  async function onSubmit(values: SignupFormValues) {
    await signup(values);
    setOpenDialog(true);
  }

  return { form, onSubmit, openDialog, setOpenDialog, isPending };
};

export const useOrgSignupForm = () => {
  const { mutateAsync: orgSignup, isPending } = useOrgSignup();

  const [openDialog, setOpenDialog] = useState(false);

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(SignupFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      referralCode: "",
    },
  });

  async function onSubmit(values: SignupFormValues) {
    await orgSignup(values);
    setOpenDialog(true);
  }

  return { form, onSubmit, openDialog, setOpenDialog, isPending };
};
