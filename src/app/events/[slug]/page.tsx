import React from "react";
import { Cart } from "./Cart";
import { Data } from "./Data";

interface EventDetailProps {
  params: Promise<{ slug: string }>;
}

export default function EventDetail({ params }: EventDetailProps) {
  const { slug } = React.use(params);

  return (
    <main>
      <section className="mt-[70px] flex h-min gap-10">
        <div className="flex-[70%]">
          <Data />
        </div>
        <div className="flex-[30%]">
          <Cart />
        </div>
      </section>
    </main>
  );
}
