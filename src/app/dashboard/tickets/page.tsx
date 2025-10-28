import { DashboardSheet } from "@/components/ui/dashboard-sheet";
import { Input } from "@/components/ui/input";
import { SectionTitle } from "@/components/ui/dashboard-section-title";
import { InputField } from "@/components/ui/inputfield";
import { Button } from "@/components/ui/button";

export default function OrganizerTicket() {
  return (
    <section>
      <SectionTitle title="My tickets" />
      <div className="mt-10 flex justify-between">
        <Input type="text" placeholder="Search" className="w-[280px]"></Input>
        <DashboardSheet trigger="Create" title="Create ticket">
          <InputField id="ticketName" label="ticket name" />
          <InputField id="ticketCategory" label="event parent" />
          <InputField id="ticketDescription" label="ticket price" />
          <InputField id="ticketDescription" label="ticket quantity" />
          <Button className="w-full">create</Button>
        </DashboardSheet>
      </div>
    </section>
  );
}
