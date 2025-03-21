
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollReveal from '@/components/ScrollReveal';
import { Clock } from 'lucide-react';

const Index = () => {
  // Update document title
  useEffect(() => {
    document.title = "MJ Locações | Tendas, Mesas e Cadeiras";
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Fixed WhatsApp Button */}
      <WhatsAppButton />
      
      {/* ScrollReveal Component */}
      <ScrollReveal />
    </div>
  );
};

export default Index;
