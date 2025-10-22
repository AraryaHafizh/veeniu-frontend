import { FooterAuth } from "../FooterAuth";
import SignupInput from "./input";

export default function Signup() {
  return (
    <main className="relative flex h-screen flex-col items-center justify-center">
      <section className="flex flex-col items-center justify-center text-center md:flex-row md:space-x-28 md:text-left">
        <p className="text-primary mb-10 text-5xl font-black md:mb-0 md:w-[20vw]">
          Hello new <br />
          Hooman!
        </p>
        <SignupInput />
      </section>
      <FooterAuth />
    </main>
  );
}
