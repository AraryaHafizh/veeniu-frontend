import { LucidePlus } from "lucide-react";

export interface CouponCardProps {
  code: string;
  value: string;
}

export const CouponCard = ({ code, value }: CouponCardProps) => {
  return (
    <div className="hover:bg-foreground/10 flex w-[231px] items-center justify-around space-x-10 rounded-xl border-2 py-2 transition-all duration-300 ease-in-out hover:cursor-pointer">
      <div className="grid">
        <p>{code}</p>
        <p>{value}</p>
      </div>
      <LucidePlus />
    </div>
  );
};
