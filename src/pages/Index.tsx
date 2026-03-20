import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProcessSection from "@/components/ProcessSection";
import WhyUsSection from "@/components/WhyUsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <WhyUsSection />
      <FAQSection />
      <CTASection />
    </main>
    <Footer />
    <WhatsAppButton />
    <CookieBanner />
  </>
);

export default Index;
