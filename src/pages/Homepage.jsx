import HeroSection from "@components/sections/HeroSection";
import AboutSection from "@components/sections/AboutSection";
import ServicesSection from "@components/sections/ServicesSection";
import LogoMarqueeSection from "@components/sections/LogoMarqueeSection";
import ProcessSection from "@components/sections/ProcessSection";
import IndustriesSection from "@components/sections/IndustriesSection";
import WhyUsSection from "@components/sections/WhyUsSection";
import TechnologySection from "@components/sections/TechnologySection";
import CTASection from "@components/sections/CTASection";

export const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <IndustriesSection />
      <LogoMarqueeSection />
      <WhyUsSection />
      <TechnologySection />
      <CTASection />
    </div>
  );
};
