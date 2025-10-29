"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { NewPassFormSchema, NewPassFormValues } from "../formSchema";
import { useNewForgetPassword } from "../hooks";

export const useNewPassForm = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const { mutateAsync: newPassword, isPending } = useNewForgetPassword();

  const form = useForm<NewPassFormValues>({
    resolver: zodResolver(NewPassFormSchema),
    defaultValues: {
      newPassword: "",
    },
  });

  async function onSubmit(values: NewPassFormValues) {
    await newPassword(values);
    setOpenDialog(true);
  }

  return { form, onSubmit, openDialog, setOpenDialog, isPending };
};
