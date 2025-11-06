"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useEventStore } from "@/store/event-store";
import { useSidebarStore } from "@/store/sidebar-store";
import { signOut } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { ReactNode } from "react";

interface CreateAccountConfirmationProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  desc: string;
}

export const CreateAccountConfirmation = ({
  title,
  desc,
  open,
  onOpenChange,
}: CreateAccountConfirmationProps) => {
  const router = useRouter();

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{desc}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={() => router.replace("/auth/signin")}>
            Let's go
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

interface PassChangeConfirmationProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const PasswordChangeConfirmation = ({
  open,
  onOpenChange,
}: PassChangeConfirmationProps) => {
  const router = useRouter();
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Password changed successfully!</AlertDialogTitle>
          <AlertDialogDescription>
            You can now sign in with your new password.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={() => router.replace("/auth/signin")}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export const SendLinkConfirmation = ({
  open,
  onOpenChange,
}: PassChangeConfirmationProps) => {
  const router = useRouter();

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Reset password link sent!</AlertDialogTitle>
          <AlertDialogDescription>
            We've sent a password reset link to your email. Please check your
            inbox and follow the instructions to set a new password.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={() => router.replace("/auth/signin")}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export const SignoutConfirmation = ({ children }: { children: ReactNode }) => {
  async function clearAllStores() {
    useEventStore.persist.clearStorage();
    useEventStore.getState().reset();
    await useEventStore.persist.rehydrate();

    useSidebarStore.persist.clearStorage();
    useSidebarStore.getState().reset();
    await useSidebarStore.persist.rehydrate();
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Leaving so soon?</AlertDialogTitle>
          <AlertDialogDescription>
            You’re about to sign out. Don’t worry, you can always come back
            later!
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={async () => {
              await signOut({ redirect: false });
              await clearAllStores();
              redirect("/");
            }}
            className="bg-transparant hover:bg-destructive active:bg-destructive border-destructive text-destructive border hover:text-white active:text-white"
          >
            Sign out
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

interface SignInNeededDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SignInNeededDialog = ({
  open,
  onOpenChange,
}: SignInNeededDialogProps) => {
  const router = useRouter();

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Sign In Required</AlertDialogTitle>
          <AlertDialogDescription>
            You need to sign in to continue. Please log in to your account to
            proceed.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={() => router.replace("/auth/signin")}>
            Go to Sign In
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

interface UploadPaymentProofConfirmationProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const UploadPaymentProofConfirmation = ({
  open,
  onOpenChange,
}: UploadPaymentProofConfirmationProps) => {
  const router = useRouter();

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Payment Proof Uploaded</AlertDialogTitle>
          <AlertDialogDescription>
            Awesome! 🎉 We’ve received your payment proof. Sit back and relax
            while we verify it for you.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={() => router.replace("/account")}>
            Okay
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
