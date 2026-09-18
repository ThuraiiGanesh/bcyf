/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Language } from './types';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ForumTheme from './components/ForumTheme';
import HighlightsCarousel from './components/HighlightsCarousel';
import AgendaSection from './components/AgendaSection';
import AboutUs from './components/AboutUs';
import WatchSection from './components/WatchSection';
import PhotoGallery from './components/PhotoGallery';
import PartnersSection from './components/PartnersSection';
import RegisterModal from './components/RegisterModal';

export default function App() {
  const [language, setLanguage] = React.useState<Language>('en');
  const [activeSection, setActiveSection] = React.useState<string>('home');
  const [registerModalOpen, setRegisterModalOpen] = React.useState<boolean>(false);
  const [showBackToTop, setShowBackToTop] = React.useState<boolean>(false);

  // Auto scroll back up to the start when reaching the end of the page
  React.useEffect(() => {
    let autoScrollTimer: any = null;

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      setShowBackToTop(scrollTop > 400);

      // Check if user has scrolled to the bottom (within 40px margin)
      const isAtBottom = windowHeight + scrollTop >= documentHeight - 40;

      if (isAtBottom) {
        if (!autoScrollTimer) {
          // Pause briefly (2s) at the bottom so user can view footer/partners, then smoothly scroll back to start
          autoScrollTimer = setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            autoScrollTimer = null;
          }, 2000);
        }
      } else {
        if (autoScrollTimer) {
          clearTimeout(autoScrollTimer);
          autoScrollTimer = null;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (autoScrollTimer) clearTimeout(autoScrollTimer);
    };
  }, []);

  // Handle section tracking during scroll
  React.useEffect(() => {
    const handleScrollTracking = () => {
      const sections = ['home', 'forum-theme', 'highlights', 'agenda', 'about', 'watch', 'photo-gallery', 'partners'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            return;
          }
        }
      }
      setActiveSection('home');
    };

    window.addEventListener('scroll', handleScrollTracking);
    return () => window.removeEventListener('scroll', handleScrollTracking);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-slate-800 font-sans antialiased selection:bg-blue-100 selection:text-brand-blue relative overflow-x-hidden">
      
      {/* Soft ambient background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] left-[5%] w-[40%] h-[40%] rounded-full bg-slate-50/50 blur-[100px]" />
        <div className="absolute bottom-[20%] right-[5%] w-[40%] h-[40%] rounded-full bg-slate-50/50 blur-[100px]" />
      </div>

      {/* 1. Header/Nav (sticky) */}
      <Header
        language={language}
        setLanguage={setLanguage}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenRegister={() => setRegisterModalOpen(true)}
      />

      {/* 2. Hero Section */}
      <HeroSection language={language} />

      {/* 3. Forum Theme Section */}
      <ForumTheme language={language} />

      {/* 4. Highlights Carousel */}
      <HighlightsCarousel language={language} />

      {/* 5. Agenda Section */}
      <AgendaSection language={language} />

      {/* 6. About Us Section */}
      <AboutUs language={language} />

      {/* 7. Watch Section */}
      <WatchSection language={language} />

      {/* 8. Photo Gallery */}
      <PhotoGallery language={language} />

      {/* 9. Partners/Sponsors Section */}
      <PartnersSection language={language} />

      {/* Register Modal */}
      <RegisterModal
        language={language}
        isOpen={registerModalOpen}
        onClose={() => setRegisterModalOpen(false)}
      />

      {/* Floating Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-40 px-3.5 py-2.5 rounded-full bg-brand-blue/95 hover:bg-brand-navy text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 cursor-pointer border border-white/20 backdrop-blur-md ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-4 h-4" />
        <span className="text-xs font-semibold pr-0.5 hidden sm:inline">
          {language === 'en' ? 'Back to top' : '回到顶部'}
        </span>
      </button>

    </div>
  );
}
