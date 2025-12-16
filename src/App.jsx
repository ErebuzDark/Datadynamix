import MainLayout from './components/layouts/MainLayout';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import ProcessSection from './components/sections/ProcessSection';
import IndustriesSection from './components/sections/IndustriesSection';
import WhyUsSection from './components/sections/WhyUsSection';
import TechnologySection from './components/sections/TechnologySection';
import CTASection from './components/sections/CTASection';

function App() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <IndustriesSection />
      <WhyUsSection />
      <TechnologySection />
      <CTASection />
    </MainLayout>
  );
}

export default App;