"use client";

import { SectionTitle } from "@/components/ui/section-title";
import { formatCurrency, formatDate } from "@/lib/utils";
import clsx from "clsx";
import { Button } from "./ui/button";

export interface Column {
  key: string;
  title: string;
}

export interface TableProps {
  title: string;
  columns: Column[];
  data: Record<string, any>[];
  onActionClick?: (row: Record<string, any>) => void;
  actionLabel?: string;
  className?: string;
}

export const Table = ({
  title,
  columns,
  data,
  onActionClick,
  actionLabel = "Action",
  className,
}: TableProps) => {
  return (
    <div className={clsx("bg-card rounded-lg p-5", className)}>
      {title && <SectionTitle variant="small">{title}</SectionTitle>}

      {data.length === 0 ? (
        <div className="text-muted-foreground mt-5 flex h-[400px] items-center justify-center rounded-2xl border-2 border-dashed">
          No data available
        </div>
      ) : (
        <div className="scroll-hidden mt-5 overflow-x-auto">
          <div className="min-w-max">
            <table className="w-full rounded-md text-left whitespace-nowrap">
              <thead>
                <tr>
                  {columns.map((col) => (
                    <th
                      key={col.key}
                      className={clsx(
                        "text-foreground px-4 py-3 text-sm font-semibold",
                        col.key === "action" && "px-0 text-right",
                      )}
                    >
                      {col.title}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {data.map((row, i) => (
                  <tr
                    key={i}
                    className="border-t transition-colors hover:bg-[var(--container-hover)]"
                  >
                    {columns.map((col) => {
                      const key = col.key;
                      let value = key === "no" ? i + 1 : (row[key] ?? "-");

                      if (key === "amount" && typeof row[key] === "number") {
                        value = formatCurrency(row[key]);
                      }

                      if (key === "startDate" && row[key]) {
                        value = formatDate(row[key], "date");
                      }

                      if (key === "status" && row[key]) {
                        const TRANSACTION_STATUS_LABELS: Record<
                          string,
                          string
                        > = {
                          WAITING_FOR_PAYMENT: "Waiting for Payment",
                          WAITING_FOR_CONFIRMATION: "Waiting for Confirmation",
                          DONE: "Completed",
                          REJECTED: "Rejected",
                          EXPIRED: "Expired",
                          CANCELED: "Canceled",
                        };
                        value = TRANSACTION_STATUS_LABELS[row[key]] ?? row[key];
                      }

                      if (key === "action") {
                        return (
                          <td
                            key={key}
                            className="px-1 text-right whitespace-nowrap"
                          >
                            <Button
                              onClick={() => onActionClick?.(row)}
                              variant="outline"
                            >
                              {actionLabel}
                            </Button>
                          </td>
                        );
                      }

                      return (
                        <td
                          key={key}
                          className="px-4 py-4 text-sm font-light whitespace-nowrap opacity-70"
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
        </div>
      )}
    </div>
  );
};
