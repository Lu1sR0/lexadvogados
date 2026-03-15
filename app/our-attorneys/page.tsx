import ScrollRevealController from "@/components/ui/ScrollRevealController";
import AttorneyHero from "@/components/sections/attorneys/AttorneyHero";
import HistoryVisionSection from "@/components/sections/attorneys/HistoryVisionSection";
import AttorneysList from "@/components/sections/attorneys/AttorneysList";
import StatsSection from "@/components/sections/attorneys/StatsSection";
import AttorneyCTASection from "@/components/sections/attorneys/AttorneyCTASection";

export const metadata = {
  title: "Nossos Advogados | LEX Advocacia",
};

export default function OurAttorneysPage() {
  return (
    <main className="pt-20">
      <ScrollRevealController />
      <AttorneyHero />
      <HistoryVisionSection />
      <AttorneysList />
      <StatsSection />
      <AttorneyCTASection />
    </main>
  );
}
