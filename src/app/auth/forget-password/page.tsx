"use client";

import { useRouter } from "next/navigation";
import { FooterAuth } from "../FooterAuth";
import ForgetPassInput from "./input";

const ForgetPassword = () => {
  const router = useRouter();
  return (
    <div className="relative flex h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center md:flex-row md:space-x-28 md:text-left">
        <p className="text-primary mb-10 text-5xl font-black md:mb-0 md:w-[20vw]">
          Uh oh forget <br /> your password?
        </p>
        <ForgetPassInput />
      </div>
      <FooterAuth />
    </div>
  );
};

export default ForgetPassword;
