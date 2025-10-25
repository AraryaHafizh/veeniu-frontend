import { Input } from "@/components/ui/input";
import { SectionTitle } from "@/components/ui/dashboard-section-title";

export default function OrganizerTransaction() {
  return (
    <section>
      <SectionTitle title="Transactions" />
      <div className="mt-10 flex justify-between">
        <Input type="text" placeholder="Search" className="w-[280px]"></Input>
      </div>
    </section>
  );
}
