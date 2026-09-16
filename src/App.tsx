/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
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

    </div>
  );
}
