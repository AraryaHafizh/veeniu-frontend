import { veeniuApi } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import z from "zod";
import { create } from "zustand";
import {
  ForgetPassFormSchema,
  NewPassFormSchema,
  SigninFormSchema,
  SignupFormSchema,
} from "./formSchema";

const defaultMessage = "Oops, something went wrong";

export const useForgetPassword = () =>
  useMutation({
    mutationFn: async (body: z.infer<typeof ForgetPassFormSchema>) => {
      const { data } = await veeniuApi.post("/auth/forgot-password", body);
      return data;
    },
    onError: (err: any) => {
      const message = err?.response?.data?.message;
      toast(message || defaultMessage);
    },
  });

export const useNewForgetPassword = (token: string) =>
  useMutation({
    mutationFn: async (body: z.infer<typeof NewPassFormSchema>) => {
      const { data } = await veeniuApi.patch("/auth/new-password", body, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return data;
    },
    onError: (err: any) => {
      const message = err?.response?.data?.message;
      toast(message || defaultMessage);
    },
  });

export const useSignin = () => {
  const { storeAuth } = useAuth();
  const router = useRouter();

  return useMutation({
    mutationFn: async (body: z.infer<typeof SigninFormSchema>) => {
      const { data } = await veeniuApi.post("/auth/login", body);
      return data;
    },
    onSuccess: (data) => {
      storeAuth(data.accessToken, data);
      if (data.role === "CUSTOMER") {
        router.replace("/");
      } else {
        router.replace("/dashboard");
      }
    },
    onError: (err: any) => {
      const message = err?.response?.data?.message;
      toast(message || defaultMessage);
    },
  });
};

export const useSignup = () =>
  useMutation({
    mutationFn: async (body: z.infer<typeof SignupFormSchema>) => {
      const { data } = await veeniuApi.post("/auth/register", body);
      return data;
    },
    onError: (err: any) => {
      const message = err?.response?.data?.message;
      toast(message || defaultMessage);
    },
  });

export const useOrgSignup = () =>
  useMutation({
    mutationFn: async (body: z.infer<typeof SignupFormSchema>) => {
      const payload = { ...body, role: "ORGANIZER" };
      const { data } = await veeniuApi.post("/auth/register", payload);
      return data;
    },
    onError: (err: any) => {
      const message = err?.response?.data?.message;
      toast(message || defaultMessage);
    },
  });

// =============================================================

interface AuthState {
  token: string | null;
  user: any | null;
  storeAuth: (token: string, user: any) => void;
  removeAuth: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  token: null,
  user: null,
  storeAuth: (token, user) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    set({ token, user });
  },
  removeAuth: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    set({ token: null, user: null });
  },
}));
