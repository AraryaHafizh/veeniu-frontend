import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/dashboard-section-title";
import { DashboardSheet } from "@/components/ui/dashboard-sheet";
import { Input } from "@/components/ui/input";
import { InputField } from "@/components/ui/inputfield";

export default function OrganizerEvent() {
  return (
    <section>
      <SectionTitle title="My events" />
      <div className="mt-10 flex justify-between">
        <Input type="text" placeholder="Search" className="w-[280px]"></Input>
        <DashboardSheet trigger="Create" title="Create event">
          <InputField id="eventName" label="event name" />
          <InputField id="eventCategory" label="event category" />
          <InputField id="eventDescription" label="event description" />
          <InputField id="eventDescription" label="start date" />
          <InputField id="eventDescription" label="end date" />
          <InputField id="eventDescription" label="start time" />
          <InputField id="eventDescription" label="end time" />
          <InputField id="eventDescription" label="location" />
          <InputField id="eventDescription" label="city" />
          <InputField id="eventDescription" label="latitude" />
          <InputField id="eventDescription" label="longitude" />
          <Button className="w-full">create</Button>
        </DashboardSheet>
      </div>
    </section>
  );
}
