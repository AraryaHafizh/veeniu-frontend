import { auth } from "@/auth";
import { Wrapper } from "@/components/ui/wrapper";
import { redirect } from "next/navigation";
import { Data } from "./Data";
import { Header } from "./Header";
import { Points } from "./Points";
import { ReferenceCode } from "./ReferenceCode";
import { Tickets } from "./Tickets";
import { TransactionHistory } from "./TransactionHistory";

const Account = async () => {
  const session = await auth();

  if (!session?.user.id) return redirect("/auth/signin");

  return (
    <main className="flex w-full justify-center">
      <Wrapper className="mt-[100px]">
        <Header />
        <Data />
        <div className="flex gap-10">
          <ReferenceCode />
          <Points />
        </div>
        <Tickets />
        <TransactionHistory />
      </Wrapper>
    </main>
  );
};

export default Account;
