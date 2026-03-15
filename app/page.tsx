import HeroSection from "@/components/sections/landing/HeroSection";
import PhilosophySection from "@/components/sections/landing/PhilosophySection";
import CaseStudiesSection from "@/components/sections/landing/CaseStudiesSection";
import GlobalReachSection from "@/components/sections/landing/GlobalReachSection";
import CTASection from "@/components/sections/landing/CTASection";

export default function HomePage() {
  return (
    <main id="content-wrapper">
      <HeroSection />
      <PhilosophySection />
      <CaseStudiesSection />
      <GlobalReachSection />
      <CTASection />
    </main>
  );
}
