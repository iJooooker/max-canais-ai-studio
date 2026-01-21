import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import TargetAudience from './components/TargetAudience';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import SocialProof from './components/SocialProof';
import CostComparison from './components/CostComparison';
import { WHATSAPP_LINK } from './constants';
import { MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Stop observing once the element is visible to save resources and ensure it stays visible
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.15, // Slightly increased threshold so elements don't trigger too early
      rootMargin: "0px 0px -50px 0px" // Offset to trigger animation slightly before element is fully in view
    });

    // Select all elements with fade animation classes
    const animatedElements = document.querySelectorAll('.fade-up, .fade-in');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 antialiased selection:bg-brand-red selection:text-white">
      <Navbar />
      <Hero />
      <Benefits />
      <TargetAudience />
      <CostComparison />
      <Pricing />
      <Testimonials />
      <FinalCTA />
      <Footer />
      <SocialProof />
      
      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-105 flex items-center justify-center group animate-pulse-slow hover:animate-none"
        aria-label="Fale conosco no WhatsApp"
      >
        {/* Tooltip */}
        <span className="absolute bottom-full mb-3 right-0 bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none hidden md:block">
          Fale conosco
          {/* Arrow */}
          <span className="absolute -bottom-1 right-6 w-2 h-2 bg-gray-900 transform rotate-45"></span>
        </span>

        <MessageCircle className="w-8 h-8" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap group-hover:pl-2 font-bold">
          Teste Grátis
        </span>
      </a>
    </div>
  );
};

export default App;