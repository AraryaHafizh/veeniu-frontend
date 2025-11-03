import { Table } from "@/components/table";
import { SectionTitle } from "@/components/ui/section-title";
import { accTableCols, transactionHistoryData } from "@/lib/const-data";
import { formatCurrency, formatDate } from "@/lib/utils";

export const TransactionHistory = () => (
  <section className="bg-card mt-10 flex-1 rounded-lg p-15">
    <SectionTitle variant="small">Transaction history</SectionTitle>
    <Table columns={accTableCols} data={transactionHistoryData} />
  </section>
);

interface TableProps {
  columns: string[];
  data: Record<string, any>[];
}

const Table2 = ({ columns, data }: TableProps) => (
  <div>
    {data.length === 0 ? (
      <div className="mt-5 flex h-[400px] items-center justify-center rounded-2xl border-2 border-dashed">
        No data available
      </div>
    ) : (
      <div className="mt-5">
        <table className="min-w-full text-left">
          <thead>
            <tr>
              {columns.map((col, i) => (
                <th key={i} className="px-4 py-2 text-sm font-semibold">
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((row, i) => (
              <tr
                key={i}
                className="border-t hover:bg-[var(--container-hover)]"
              >
                {columns.map((col, j) => {
                  const key = col.toLowerCase();
                  let value = key === "no" ? i + 1 : (row[key] ?? "-");

                  if (key === "amount" && typeof row[key] === "number") {
                    value = formatCurrency(row[key]);
                  }
                  if (key === "date") {
                    value = formatDate(row[key], "date");
                  }

                  return (
                    <td
                      key={j}
                      className="px-4 py-4 text-sm font-light opacity-70"
                    >
                      {value}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
);
