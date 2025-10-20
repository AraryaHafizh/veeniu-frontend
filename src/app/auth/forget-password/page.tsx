import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

const ForgetPassword = () => {
  return (
    <div className="relative h-screen flex-col items-center justify-center">
      <div className="z-50 flex flex-col text-center h-full w-full items-center justify-center md:flex-row md:text-left md:space-x-28">
        <p className="text-primary text-5xl font-bold">Uh oh forget <br /> your password?</p>
        <div className="w-sm space-y-8">
          <div className="space-y-2">
            <Label>Email</Label>
            <Input type="email" />
          </div>
          <p>
            New to veeniu?{" "}
            <Link href="/" className="underline">
              sign up
            </Link>
          </p>
          <Button className="w-full">Send Code</Button>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
