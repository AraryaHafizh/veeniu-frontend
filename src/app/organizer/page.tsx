import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";
import { Pagination } from "@/components/ui/pagination";
import { MapPin, User } from "lucide-react";
import OrganizerContent from "./OrganizerContent";

const OrganizerPage = () => {
  return (
    <main>
      <Navbar />
      <div className="mx-5 my-10 gap-10 space-y-6 md:mx-50 md:my-30 md:flex md:space-y-0">
        <User className="h-[150px] w-[150px] rounded-2xl border" />
        <div className="flex flex-col justify-around space-y-2 md:space-y-0">
          <p className="text-3xl font-bold">Sus Organizer AMOGUS</p>
          <div>
            <p>Joined since april 2020</p>
            <p>Rating: 4.8 | 1100 Reviews</p>
            <p className="flex items-center gap-1">
              <MapPin className="h-[20px] w-[20px]" />
              Jakarta
            </p>
          </div>
        </div>
      </div>
      <OrganizerContent />
      <div className="my-10 flex justify-center md:my-30">
        <Pagination page="1" />
      </div>
      <Footer />
    </main>
  );
};

export default OrganizerPage;
