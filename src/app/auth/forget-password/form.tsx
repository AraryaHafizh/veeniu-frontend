"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ForgetPassFormSchema, ForgetPassFormValues } from "../formSchema";
import { useForgetPassword } from "../hooks";

export const useForgetPassForm = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const { mutateAsync: forgotPassword, isPending } = useForgetPassword();

  const form = useForm<ForgetPassFormValues>({
    resolver: zodResolver(ForgetPassFormSchema),
    defaultValues: { email: "" },
  });

  async function onSubmit(values: ForgetPassFormValues) {
    await forgotPassword(values);
    setOpenDialog(true);
  }

  return { form, onSubmit, openDialog, setOpenDialog, isPending };
};


