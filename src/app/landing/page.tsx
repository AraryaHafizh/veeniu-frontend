"use client";

import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";
import { CategoryList } from "./CategoryList";
import { LatestSection } from "./LatestSection";
import { Recommendation } from "./Recommendation";
import WelcomeSection from "./WelcomeSection";
import { useLatestEvent, useRandomEvent } from "./hooks";
import { LoadingScreen } from "@/components/ui/loading-animation";

export default function Landing() {
  const { data: latestEvent = { data: [] }, isLoading: isLoadingLatest } =
    useLatestEvent();
  const { data: randomEvent = { data: [] }, isLoading: isLoadingRandom } =
    useRandomEvent();

  return (
    <main className="container mx-auto max-w-[1920px]">
      <Navbar />
      <WelcomeSection data={randomEvent.data} isLoading={true}/>
      <LatestSection data={latestEvent.data} isLoading={true} />
      <CategoryList/>
      <Recommendation data={randomEvent.data} isLoading={true} />
      <Footer />
    </main>
  );
}
