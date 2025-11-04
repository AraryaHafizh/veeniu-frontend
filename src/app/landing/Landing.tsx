"use client";

import { LoadingScreen } from "@/components/ui/loading-animation";
import { EventCardProps } from "@/props/eventCard.props";
import { useGetEvents } from "../../hooks/event/useGetEvents";
import { Highlight } from "./Highlight";
import { Latest } from "./Latest";
import { useGetTransactions } from "@/hooks/transaction/useGetTransactions";
import { useState } from "react";

export const Landing = () => {
  const { data, isPending } = useGetEvents();
  const { data: transactions, isPending: isPending2 } = useGetTransactions({
    limit: 6,
  });
  const eventCard: EventCardProps[] = data?.data ?? [];

  if (isPending || isPending2) return <LoadingScreen />;

  return (
    <main>
      <Highlight eventCard={eventCard} transactions={transactions} />
      <Latest eventCard={eventCard} />
    </main>
  );
};
