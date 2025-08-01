import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

// const Index = () => {
//   return (
//     <div className="min-h-screen bg-bg-gradient">
//       <Header />
//       <HeroSection />
//       <ServicesSection />
//       <AboutSection />
      
//       <ProcessSection />
//       <PortfolioSection />
//       <TestimonialsSection />
//       <ContactSection />
//       <Footer />
//     </div>
//   );
// };

// export default Index;

const Index = () => {
  useEffect(() => {
    const scrollTo = sessionStorage.getItem("scrollTo");
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        sessionStorage.removeItem("scrollTo");
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-bg-gradient">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

