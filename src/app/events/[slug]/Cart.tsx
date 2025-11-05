"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { SectionText } from "@/components/ui/section-text";
import { SectionTitle } from "@/components/ui/section-title";
import { Separator } from "@/components/ui/separator";
import { formatCurrency } from "@/lib/utils";
import {
  EventDetailProps,
  TicketProps,
  VoucherProps,
} from "@/props/event.props";
import { TicketPercent } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const MAX_TOTAL_TICKETS = 5;

export const Cart = ({ eventDetail }: { eventDetail: EventDetailProps }) => {
  return (
    <section className="bg-card sticky top-[70px] mx-5 mr-5 rounded-lg p-5 md:mx-0 md:mr-20">
      <div>
        <SectionTitle className="mb-5" variant="small">
          Available tickets
        </SectionTitle>
        <EventTicket tickets={eventDetail.tickets} />
        <Separator className="my-5" />
        <EventVoucher vouchers={eventDetail.vouchers} />
        <Separator className="my-5" />
        <Subtotal />
      </div>
    </section>
  );
};

const EventTicket = ({ tickets }: { tickets: TicketProps[] }) => {
  const [quantities, setQuantities] = useState<Record<string, number>>(
    Object.fromEntries(tickets.map((t) => [t.id, 0])),
  );

  const totalTickets = Object.values(quantities).reduce((a, b) => a + b, 0);

  const handleChange = (id: string, delta: number) => {
    setQuantities((prev) => {
      const newQty = { ...prev };
      const newTotal = totalTickets + delta;

      if (delta > 0 && newTotal > MAX_TOTAL_TICKETS) return prev;

      newQty[id] = Math.max(0, (newQty[id] ?? 0) + delta);
      return newQty;
    });
  };

  return (
    <div className="space-y-5">
      {tickets.map((ticket) => (
        <div key={ticket.id} className="flex items-center justify-between">
          <div>
            <p className="text-sm md:text-base">{ticket.name}</p>
            <SectionText>{formatCurrency(ticket.price)}</SectionText>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              onClick={() => handleChange(ticket.id, -1)}
              disabled={quantities[ticket.id] === 0}
            >
              −
            </Button>
            <p className="w-3">{quantities[ticket.id]}</p>
            <Button
              variant="outline"
              onClick={() => handleChange(ticket.id, +1)}
              disabled={totalTickets >= MAX_TOTAL_TICKETS}
            >
              +
            </Button>
          </div>
        </div>
      ))}

      <SectionText className="text-right">
        Total selected: {totalTickets}/{MAX_TOTAL_TICKETS}
      </SectionText>
    </div>
  );
};

const EventVoucher = ({ vouchers }: { vouchers: VoucherProps[] }) => (
  <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>
        <SectionTitle variant="small">Vouchers & Points</SectionTitle>
      </AccordionTrigger>
      <AccordionContent className="space-y-2">
        {vouchers.map((voucher, i) => (
          <div
            key={i}
            className="flex cursor-pointer items-center gap-5 rounded-lg p-5 transition-all duration-200 hover:bg-[var(--container-hover)] active:bg-[var(--container-hover)]"
          >
            <TicketPercent className="h-7 w-7" />
            <div>
              <p className="font-bold md:text-lg">{voucher.code}</p>
              <SectionText>{formatCurrency(voucher.value)}</SectionText>
            </div>
          </div>
        ))}
        <UserPoint />
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

const UserPoint = () => (
  <Label className="flex cursor-pointer items-center justify-between p-5">
    <div className="flex items-center gap-5">
      <Checkbox id="point" />
      <div className="grid space-y-1">
        <Label htmlFor="point">Use my point</Label>
        <SectionText>You have 15.000 points.</SectionText>
      </div>
    </div>
    <p>-Rp 15.000</p>
  </Label>
);

const Subtotal = () => {
  const router = useRouter();
  const PriceDetail = ({ title, value }: { title: string; value: string }) => (
    <div className="flex justify-between">
      <SectionText>{title}</SectionText>
      <SectionText>{value}</SectionText>
    </div>
  );

  return (
    <div className="space-y-2">
      <PriceDetail title="subtotal" value="Rp 5.500.000" />
      <PriceDetail title="discount" value="- Rp 500.000" />
      <div className="flex justify-between text-xl font-bold">
        <p>Total</p>
        <p>Rp 5.000.000</p>
      </div>
      <Button className="mt-5 w-full" onClick={() => router.push("/payment")}>
        Checkout
      </Button>
    </div>
  );
};
