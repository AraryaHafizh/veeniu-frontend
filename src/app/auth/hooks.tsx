import { veeniuApi } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import z from "zod";
import {
  ForgetPassFormSchema,
  NewPassFormSchema,
  SigninFormSchema,
  SignupFormSchema,
} from "./formSchema";
import { toast } from "sonner";

export const useForgetPassword = () =>
  useMutation({
    mutationFn: async (body: z.infer<typeof ForgetPassFormSchema>) => {
      const { data } = await veeniuApi.post("/auth/forgot-password", body);
      return data;
    },
    // onSuccess: () => {
    //   alert("send email success");
    // },
    // onError: () => {
    //   alert("send email failed");
    // },
  });

export const useNewForgetPassword = () =>
  useMutation({
    mutationFn: async (body: z.infer<typeof NewPassFormSchema>) => {
      const { data } = await veeniuApi.post("/auth/new-password", body);
      return data;
    },
  });

export const useSignin = () =>
  useMutation({
    mutationFn: async (body: z.infer<typeof SigninFormSchema>) => {
      const { data } = await veeniuApi.post("/auth/login", body);
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      toast("login success");
    },
    onError: (error) => {
      console.log(error);
    },
  });

export const useSignup = () =>
  useMutation({
    mutationFn: async (body: z.infer<typeof SignupFormSchema>) => {
      const { data } = await veeniuApi.post("/auth/register", body);
      return data;
    },
    onError: (error) => {
      console.log(error);
    },
  });

export const useOrgSignup = () =>
  useMutation({
    mutationFn: async (body: z.infer<typeof SignupFormSchema>) => {
      const { data } = await veeniuApi.post("/auth/register-organizer", body);
      return data;
    },
  });
