import { DashboardSheet } from "@/components/ui/dashboard-sheet";
import { Input } from "@/components/ui/input";
import { SectionTitle } from "@/components/ui/dashboard-section-title";
import { InputField } from "@/components/ui/inputfield";
import { Button } from "@/components/ui/button";

export default function OrganizerVoucker() {
  return (
    <section>
      <SectionTitle title="My vouchers" />
      <div className="mt-10 flex justify-between">
        <Input type="text" placeholder="Search" className="w-[280px]"></Input>
        <DashboardSheet trigger="Create" title="Create voucher">
            <InputField id="voucherName" label="voucher name" />
            <InputField id="voucherCategory" label="event parent" />
            <InputField id="voucherDescription" label="voucher value" />
            <InputField id="voucherDescription" label="voucher quantity" />
            <Button className="w-full">create</Button>
        </DashboardSheet>
      </div>
    </section>
  );
}
