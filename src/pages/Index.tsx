import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import KPISection from "@/components/landing/KPISection";
import ServicesSection from "@/components/landing/ServicesSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import ConstructaSection from "@/components/landing/ConstructaSection";
import ClientsSection from "@/components/landing/ClientsSection";
import AboutSection from "@/components/landing/AboutSection";
import TeamSection from "@/components/landing/TeamSection";
import ProcessSection from "@/components/landing/ProcessSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <KPISection />
      <ServicesSection />
      <BenefitsSection />
      <ConstructaSection />
      <ClientsSection />
      <AboutSection />
      <TeamSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
