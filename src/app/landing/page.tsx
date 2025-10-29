"use client";

import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";
import { CategoryList } from "./CategoryList";
import { LatestSection } from "./LatestSection";
import { Recommendation } from "./Recommendation";
import WelcomeSection from "./WelcomeSection";
import { useLatestEvent, useRandomEvent } from "./hooks";

export default function Landing() {
  const { data: latestEvent = { data: [] }, isPending: isLoadingLatest } =
    useLatestEvent();
  const { data: randomEvent = { data: [] }, isPending: isLoadingRandom } =
    useRandomEvent();

  return (
    <main className="container mx-auto max-w-[1920px]">
      <Navbar />
      <WelcomeSection data={randomEvent.data} isPending={true}/>
      <LatestSection data={latestEvent.data} isPending={true} />
      <CategoryList/>
      <Recommendation data={randomEvent.data} isPending={true} />
      <Footer />
    </main>
  );
}
