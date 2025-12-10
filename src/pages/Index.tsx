import HeroSection from "@/components/landing/HeroSection";
import KPISection from "@/components/landing/KPISection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import ProcessSection from "@/components/landing/ProcessSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <KPISection />
      <BenefitsSection />
      <ProcessSection />
      <Footer />
    </main>
  );
};

export default Index;
