"use client";

import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";

const data = {
  couponCode: "SAVE50",
  value: "Rp 50.000",
};

interface PriceDetProps {
  title: string;
  value: string | number;
  onRemove?: () => void;
}

export const Cashier = () => {
  return (
    <section className="flex-[1] space-y-5">
      <p className="text-primary text-3xl font-bold">Coupons</p>
      <div className="grid grid-cols-2 gap-5">
        {Array.from({ length: 8 }).map((_, i) => (
          <CouponCard key={i} />
        ))}
      </div>
      <p className="text-primary text-3xl font-bold">Points</p>
      <UserPoint />
      <div className="bg-foreground/20 mt-16 h-0.5 w-full"></div>
      <Price />
      <Button className="w-full" onClick={() => {}}>
        Checkout
      </Button>
    </section>
  );
};

const CouponCard = () => (
  <div className="flex w-fit cursor-pointer items-center gap-10 rounded-xl border px-8 py-2 transition-all duration-300 ease-in-out hover:bg-[var(--container-hover)]">
    <div>
      <p className="text-2xl font-bold">{data.couponCode}</p>
      <p className="text-sm font-light">{data.value}</p>
    </div>
    <Plus />
  </div>
);

const UserPoint = () => (
  <div className="flex justify-between">
    <p>10.000</p>
    <p>use point</p>
  </div>
);

const Price = () => (
  <div>
    <PriceDet title="base price" value={"950.000"} />
    <PriceDet title="SAVE50" value={"50.000"} onRemove={() => {}} />
    <PriceDet title="Points" value={"10.000"} onRemove={() => {}} />
    <div className="mt-5 flex justify-between text-3xl font-bold">
      <p className="text-primary">Total</p>
      <p>Rp 950.000</p>
    </div>
  </div>
);

const PriceDet = ({ title, value, onRemove }: PriceDetProps) => (
  <div className="flex justify-between">
    <div className="flex items-center gap-2">
      <p>{title}</p>
      {onRemove && (
        <X
          className="hover:text-destructive cursor-pointer transition-all duration-300 ease-in-out"
          onClick={onRemove}
          size={20}
        />
      )}
    </div>
    <p>
      {onRemove ? `-` : `Rp `}
      {value}
    </p>
  </div>
);
