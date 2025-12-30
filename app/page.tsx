'use client';

import Link from 'next/link';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PartnersSection from './components/PartnersSection';
import AdvantagesSection from './components/AdvantagesSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PartnersSection />
      <AdvantagesSection />
      <GallerySection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
