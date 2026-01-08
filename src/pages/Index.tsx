import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SystemSection } from "@/components/sections/SystemSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { SwotSection } from "@/components/sections/SwotSection";
import { TargetSection } from "@/components/sections/TargetSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <div className="section-divider" />
        <AboutSection />
        <div className="section-divider" />
        <ServicesSection />
        <div className="section-divider" />
        <SystemSection />
        <div className="section-divider" />
        <BenefitsSection />
        <div className="section-divider" />
        <PricingSection />
        <div className="section-divider" />
        <SwotSection />
        <div className="section-divider" />
        <TargetSection />
        <div className="section-divider" />
        <ImpactSection />
        <div className="section-divider" />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
