"use client";

import { PageTitle } from "@/components/ui/page-title";
import { SectionText } from "@/components/ui/section-text";
import { useEffect, useState } from "react";

interface TimerContainerProps {
  data: string;
  label: string;
}

export const Countdown = () => {
  return (
    <section className="mt-[140px]">
      <PageTitle className="mb-2">Complete Your Payment</PageTitle>
      <SectionText>
        Please upload payment proof within the time limit below.
      </SectionText>
      <CountdownTimer />
    </section>
  );
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(30 * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timeLeft % 60).toString().padStart(2, "0");

  const TimerContainer = ({ data, label }: TimerContainerProps) => (
    <div>
      <div className="bg-card flex w-36 flex-col items-center justify-center rounded-lg border p-5 text-center">
        <p className="text-destructive text-4xl font-semibold">{data}</p>
      </div>
      <SectionText className="mt-1 text-center">{label}</SectionText>
    </div>
  );

  return (
    <div className="mt-5 flex gap-5">
      <TimerContainer data={minutes} label="Minutes" />
      <TimerContainer data={seconds} label="Seconds" />
    </div>
  );
};
