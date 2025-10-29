import { z } from "zod";

export const SigninFormSchema = z.object({
  email: z.email(),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type SigninFormValues = z.infer<typeof SigninFormSchema>;

export const SignupFormSchema = z.object({
  username: z.string().min(4, "Username must be at least 4 characters"),
  email: z.email(),
  password: z.string().min(8, "Password must be at least 8 characters"),
  referralCode: z
    .string()
    .max(6, "Referral code must be at most 6 characters")
    .optional(),
});

export type SignupFormValues = z.infer<typeof SignupFormSchema>;

export const ForgetPassFormSchema = z.object({
  email: z.email(),
});

export type ForgetPassFormValues = z.infer<typeof ForgetPassFormSchema>;

export const NewPassFormSchema = z.object({
  newPassword: z.string().min(8, "Password must be at least 8 characters"),
});

export type NewPassFormValues = z.infer<typeof NewPassFormSchema>;
