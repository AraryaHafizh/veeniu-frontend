import { Navbar } from "@/components/ui/navbar";
import { UserInteraction } from "./UserInteraction";
import { EventList } from "./EventList";
import { Pagintaion } from "@/components/ui/pagination";
import { Footer } from "@/components/ui/footer";

export default function Events() {
  return (
    <main>
      <Navbar />
      <UserInteraction />
      <EventList />
      <div className="mt-30 mb-20 flex justify-center">
        <Pagintaion page="1" />
      </div>
      <Footer />
    </main>
  );
}
