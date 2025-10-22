import { User } from "lucide-react";
import { OrganizerEvents } from "./OrganizerEvents";
import { Footer } from "@/components/ui/footer";
import { Pagination } from "@/components/ui/pagination";
import Link from "next/link";
import { Navbar } from "@/components/ui/navbar";
import { Button } from "@/components/ui/button";
import { RatingDrawer } from "./RatingDrawer";

const OrganizerPage = () => {
  return (
    <main>
      <Navbar />
      <div className="mt-30 mb-30 flex gap-10 pl-50">
        <User className="h-[150px] w-[150px] border rounded-2xl" />
        <div className="grid grid-cols-1 items-center">
          <p className="text-2xl">Sus Organizer AMOGUS</p>
          <p>Joined since april 2020</p>
          <RatingDrawer />
        </div>
      </div>
      <OrganizerEvents />
      <div className="mt-30 mb-20 flex justify-center">
        <Pagination page="1" />
      </div>
      <Footer />
    </main>
  );
};

export default OrganizerPage;
