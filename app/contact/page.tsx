import ScrollRevealController from "@/components/ui/ScrollRevealController";
import ContactSection from "@/components/sections/contact/ContactSection";
import OfficesSection from "@/components/sections/contact/OfficesSection";
import MapSection from "@/components/sections/contact/MapSection";

export const metadata = {
  title: "Contato | LEX Advocacia",
};

export default function ContactPage() {
  return (
    <main className="pt-32">
      <ScrollRevealController />
      <ContactSection />
      <OfficesSection />
      <MapSection />
    </main>
  );
}
