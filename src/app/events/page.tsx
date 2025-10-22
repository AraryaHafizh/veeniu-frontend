import { Navbar } from "@/components/ui/navbar";
import { UserInteraction } from "./UserInteraction";
import { EventList } from "./EventList";
import { Pagination } from "@/components/ui/pagination";
import { Footer } from "@/components/ui/footer";

export default function Event() {
  return (
    <main className="container mx-auto max-w-[1920px]">
      <Navbar />
      <UserInteraction />
      <EventList />
      <div className="mt-30 mb-20 flex justify-center">
        <Pagination page="1" />
      </div>
      <Footer />
    </main>
  );
}
