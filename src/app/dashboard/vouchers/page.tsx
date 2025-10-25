import { DashboardSheet } from "@/components/ui/dashboard-sheet";
import { Input } from "@/components/ui/input";
import { SectionTitle } from "@/components/ui/dashboard-section-title";

export default function OrganizerVoucker() {
  return (
    <section>
      <SectionTitle title="My vouchers" />
      <div className="mt-10 flex justify-between">
        <Input type="text" placeholder="Search" className="w-[280px]"></Input>
        <DashboardSheet trigger="Create" title="Create voucher">
          <div></div>
        </DashboardSheet>
      </div>
    </section>
  );
}
