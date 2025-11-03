import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { SectionText } from "@/components/ui/section-text";
import { SectionTitle } from "@/components/ui/section-title";
import { Separator } from "@/components/ui/separator";
import { bankData } from "@/lib/const-data";

export const Info = () => {
  return (
    <section className="bg-card rounded-lg p-5">
      <BankInfo />
      <Separator className="my-5" />
      <SectionTitle variant="small" className="mb-2">
        Upload payment proof
      </SectionTitle>
      <SectionText>Acceptedformats: JPG. PNG, PDE Max size: 5MB.</SectionText>
      <PaymentProof />
      <Button className="w-full">Confirm payment</Button>
    </section>
  );
};

const BankInfo = () => (
  <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>
        <SectionTitle variant="small">Bank tranfers details</SectionTitle>
      </AccordionTrigger>
      <AccordionContent className="space-y-2">
        <SectionText>
          Please transfer the exact total amount to the following bank account.
        </SectionText>
        <div className="mt-5 rounded-lg border bg-black/5 p-5 dark:bg-black/30">
          {bankData.map((data, i) => (
            <div key={i} className="flex justify-between space-y-2">
              <SectionText>{data.key}</SectionText>
              <p>{data.val}</p>
            </div>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

const PaymentProof = () => (
  <div className="border-primary/50 my-5 flex h-[200px] cursor-pointer items-center justify-center rounded-lg border-2 border-dashed transition-all duration-200 hover:bg-[var(--container-hover)] active:bg-[var(--container-hover)]">
    <SectionText>Upload payment proof</SectionText>
  </div>
);
