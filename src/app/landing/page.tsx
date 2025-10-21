import { Footer } from "@/components/ui/footer";
import WelcomeSection from "./WelcomeSection";
import { Navbar } from "@/components/ui/navbar";
import { LatestSection } from "./LatestSection";
import { CategoryList } from "./CategoryList";
import { Recommendation } from "./Recommendation";

export default function Landing() {
  return (
    <main className="container mx-auto max-w-[1920px]">
      <Navbar />
      <WelcomeSection />
      <LatestSection />
      <CategoryList />
      <Recommendation />
      <Footer />
    </main>
  );
}
