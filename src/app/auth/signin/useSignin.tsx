import { veeniuApi } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import z from "zod";
import { signinSchema } from "./Forms";
import { toast } from "sonner";

export const useSignin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: async (body: z.infer<typeof signinSchema>) => {
      const { data } = await veeniuApi.post("/auth/login", body);
      return data;
    },
    onSuccess: async (data) => {
      console.log(data.accessToken);

      await signIn("credentials", { ...data, redirect: false });
      {
        data.role === "ORGANIZER"
          ? router.push("/dashboard")
          : router.push("/");
      }
    },
    onError: (error: AxiosError<{ message: string }>) => {
      toast(error.response?.data.message ?? "Something went wrong!");
    },
  });
};
