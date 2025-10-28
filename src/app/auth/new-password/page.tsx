"use client";

import { FooterAuth } from "../FooterAuth";
import NewPassInput from "./input";

const ForgetPassword = () => {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center md:flex-row md:space-x-28 md:text-left">
        <p className="text-primary mb-10 text-5xl font-black md:mb-0 md:w-[20vw]">
          Insert your <br /> new password
        </p>
        <NewPassInput />
      </div>
      <FooterAuth />
    </div>
  );
};

export default ForgetPassword;
