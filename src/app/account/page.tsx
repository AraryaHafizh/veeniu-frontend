import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";
import AccountContent from "./AccountContent";

const Account = () => {
  return (
    <main>
      <Navbar />
      <div className="mb-10 items-center px-5 md:mb-20 md:flex md:px-[52px]">
        <div className="flex-[30%]">
          <p className="text-primary text-3xl font-bold md:text-5xl">
            Good morning, <br />
            Hooman
          </p>
        </div>
        <AccountContent />
      </div>
      <Footer />
    </main>
  );
};

export default Account;
