import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-bg-gradient">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
    </div>
  );
};

export default Index;
