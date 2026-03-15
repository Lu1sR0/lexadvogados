import ScrollRevealController from "@/components/ui/ScrollRevealController";
import PAHeroSection from "@/components/sections/practice-areas/PAHeroSection";
import PracticeAreasGrid from "@/components/sections/practice-areas/PracticeAreasGrid";
import QuoteSection from "@/components/sections/practice-areas/QuoteSection";
import PACTASection from "@/components/sections/practice-areas/PACTASection";

export const metadata = {
  title: "Áreas de Atuação | LEX Advocacia",
};

export default function PracticeAreasPage() {
  return (
    <main className="pt-24">
      <ScrollRevealController />
      <PAHeroSection />
      <PracticeAreasGrid />
      <QuoteSection />
      <PACTASection />
    </main>
  );
}
