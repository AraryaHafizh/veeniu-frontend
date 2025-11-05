import { Table } from "@/components/table";
import { SectionTitle } from "@/components/ui/section-title";
import { accTableCols, transactionHistoryData } from "@/lib/const-data";
import { formatCurrency, formatDate } from "@/lib/utils";

export const TransactionHistory = () => (
  <section className="bg-card mt-10 flex-1 rounded-lg p-15">
    <SectionTitle variant="small">Transaction history</SectionTitle>
    <div className="text-muted-foreground mt-5 flex h-[400px] w-full items-center justify-center rounded-2xl border-2 border-dashed">
      No transactions
    </div>
    {/* <Table /> */}
  </section>
);
