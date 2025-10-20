import SigninInput from "./input";

export default function Signin() {
  return (
    <main className="relative flex h-screen flex-col items-center justify-center">
      <section className="z-50 flex flex-col items-center justify-center text-center md:flex-row md:space-x-28 md:text-left">
        <p className="text-primary text-5xl font-black">
          Welcome back <br />
          Hooman
        </p>
        <SigninInput />
      </section>

      <footer className="text-secondary absolute bottom-20 z-40 w-full text-center font-bold">
        © 2025 Veeniu
      </footer>
    </main>
  );
}
