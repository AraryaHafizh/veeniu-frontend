import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";
import { UserTicket } from "./UserTicket";
import { Cashier } from "./Cashier";

export default function Checkout() {
  return (
    <main>
      <Navbar />
      <section className="mt-15 mb-20 flex justify-between px-[52px]">
        <UserTicket />
        <Cashier />
      </section>
      <Footer />
    </main>
  );
}
