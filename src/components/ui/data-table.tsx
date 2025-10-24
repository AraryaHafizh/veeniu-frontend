"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

interface DataTableProps {
  title: string;
  tableTitle: string[];
  tableData: any[];
  statusData: string[];
  route?: string;
}

interface TableStatusProps {
  selected: string;
  data: string[];
  val: string;
  setVal: (pos: string) => void;
}

export const DataTable = ({
  title,
  tableTitle,
  tableData,
  statusData,
  route,
}: DataTableProps) => {
  const [statusList, setStatusList] = useState(tableData.map((d) => d.status));

  const handleSetStatus = (index: number, newVal: string) => {
    const updated = [...statusList];
    updated[index] = newVal;
    setStatusList(updated);
    toast("Status updated!");
  };

  return (
    <div className="mt-15 space-y-3">
      <section className="flex items-end justify-between">
        <p className="text-primary text-lg font-bold md:text-2xl">{title}</p>
        {route && (
          <Link
            href={route}
            className="hover:text-secondary text-xs underline transition-all duration-300 ease-in-out md:text-sm"
          >
            See all
          </Link>
        )}
      </section>

      <section className="scroll-hidden w-full overflow-x-auto rounded-xl bg-[var(--container)] p-5">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              {tableTitle.map((col, i) => {
                const align =
                  col === "No" || col === "Status"
                    ? "text-center"
                    : "text-left";
                return (
                  <th
                    key={i}
                    className={`px-4 text-lg font-bold text-[var(--footer-text)] ${align}`}
                  >
                    {col}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, ri) => (
              <tr
                key={ri}
                className="hover:bg-foreground/10 rounded-xl transition-all duration-300"
              >
                {tableTitle.map((col, ci) => {
                  const lowerKey = col.toLowerCase();
                  const align =
                    col === "No" || col === "Status"
                      ? "text-center"
                      : "text-left";

                  return (
                    <td
                      key={ci}
                      className={`max-w-[300px] truncate overflow-hidden px-4 py-2 ${align} text-sm font-light whitespace-nowrap text-[var(--footer-text)]`}
                    >
                      {lowerKey === "status" ? (
                        <TableStatus
                          selected={statusList[ri]}
                          data={statusData}
                          val={statusList[ri]}
                          setVal={(newVal) => handleSetStatus(ri, newVal)}
                        />
                      ) : lowerKey === "no" ? (
                        <p>{ri + 1}</p>
                      ) : (
                        row[lowerKey]
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

const TableStatus = ({ selected, data, val, setVal }: TableStatusProps) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button className="w-[90px] capitalize" variant="ghost" size="sm">
        {selected}
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuRadioGroup
        value={val}
        onValueChange={(newVal) => setVal(newVal)}
      >
        {data.map((category, i) => (
          <DropdownMenuRadioItem key={i} value={category}>
            {category}
          </DropdownMenuRadioItem>
        ))}
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
);
