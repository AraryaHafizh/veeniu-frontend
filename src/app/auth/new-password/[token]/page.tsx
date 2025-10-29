import React from "react";
import { FooterAuth } from "../../FooterAuth";
import NewPassInput from "./input";

interface NewPasswordProps {
  params: Promise<{ token: string }>;
}

export default function NewPasswordPage({ params }: NewPasswordProps) {
  const { token } = React.use(params);

  return (
    <div className="relative flex h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center md:flex-row md:space-x-28 md:text-left">
        <p className="text-primary mb-10 text-5xl font-black md:mb-0 md:w-[20vw]">
          Insert your <br /> new password
        </p>
        <NewPassInput token={token} />
      </div>
      <FooterAuth />
    </div>
  );
}
