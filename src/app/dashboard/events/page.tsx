import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectionTitle } from "@/components/ui/dashboard-section-title";
import Link from "next/link";

export default function OrganizerEvent() {
  return (
    <section>
      <SectionTitle title="My events" />
      <div className="mt-10 flex justify-between">
        <Input type="text" placeholder="Search" className="w-[280px]"></Input>
        <Link href="/dashboard/events/create">
          <Button type="button">Create</Button>
        </Link>
      </div>
    </section>
  );
}
