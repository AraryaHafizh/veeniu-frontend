import { SectionText } from "@/components/ui/section-text";
import { SectionTitle } from "@/components/ui/section-title";
import { Separator } from "@/components/ui/separator";
import { transactionData } from "@/lib/const-data";
import { formatCurrency, formatDate } from "@/lib/utils";

export const Detail = () => {
  return (
    <section className="bg-card rounded-lg p-5">
      <OrderSummary />
      <Separator className="my-5" />
      <OrderDetail />
      <Separator className="my-5" />
      <OrderPriceDetail />
    </section>
  );
};

const OrderSummary = () => (
  <div>
    <SectionTitle variant="small">Order summary</SectionTitle>
    <div className="mt-3 space-y-2">
      <div className="flex justify-between">
        <SectionText>Order ID</SectionText>
        <p>{transactionData.eventId}</p>
      </div>
      <div className="flex justify-between">
        <SectionText>Transaction date</SectionText>
        <p>{formatDate(transactionData.createdAt)}</p>
      </div>
    </div>
  </div>
);

const OrderDetail = () => (
  <div>
    <SectionTitle variant="small">{transactionData.event.title}</SectionTitle>
    <div className="mt-3 space-y-2">
      <SectionText>{formatDate(transactionData.event.startDate)}</SectionText>
      <SectionText>{transactionData.event.location}</SectionText>
    </div>
  </div>
);

const OrderPriceDetail = () => (
  <div>
    <div className="flex justify-between">
      <SectionText>Ticket price</SectionText>
      <p>{formatCurrency(transactionData.totalAmount)}</p>
    </div>
    <div className="flex justify-between">
      <SectionText>Discount</SectionText>
      <p>{formatCurrency(transactionData.discountAmount)}</p>
    </div>
    <div className="flex justify-between font-medium">
      <p>Total</p>
      <p className="text-primary">
        {formatCurrency(transactionData.finalAmount)}
      </p>
    </div>
  </div>
);
