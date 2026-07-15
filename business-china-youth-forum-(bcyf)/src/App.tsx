/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Language } from './types';
import { TRANSLATIONS } from './data';
import Header from './components/Header';
import Countdown from './components/Countdown';
import About from './components/About';
import Schedule from './components/Schedule';
import Speakers from './components/Speakers';
import Experiences from './components/Experiences';
import Faq from './components/Faq';
import Footer from './components/Footer';
import RegisterModal from './components/RegisterModal';
import { motion } from 'motion/react';
import { Sparkles, Ticket, ChevronRight } from 'lucide-react';

export default function App() {
  const [language, setLanguage] = React.useState<Language>('en');
  const [activeSection, setActiveSection] = React.useState<string>('home');
  const [selectedSpeakerId, setSelectedSpeakerId] = React.useState<string | null>(null);
  const [registerModalOpen, setRegisterModalOpen] = React.useState<boolean>(false);
  const [savedItinerary, setSavedItinerary] = React.useState<string[]>([]);

  const t = TRANSLATIONS[language];

  // Load saved itinerary on mount
  React.useEffect(() => {
    const saved = localStorage.getItem('bcyf_saved_itinerary');
    if (saved) {
      try {
        setSavedItinerary(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse itinerary", e);
      }
    }
  }, []);

  // Handle section tracking during scroll
  React.useEffect(() => {
    const handleScrollTracking = () => {
      const sections = ['about', 'schedule', 'speakers', 'interactive', 'faq'];
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

  // Toggle itinerary save
  const toggleItinerary = (id: string) => {
    let updated: string[];
    if (savedItinerary.includes(id)) {
      updated = savedItinerary.filter((i) => i !== id);
    } else {
      updated = [...savedItinerary, id];
    }
    setSavedItinerary(updated);
    localStorage.setItem('bcyf_saved_itinerary', JSON.stringify(updated));
  };

  const handleOpenSpeakerBio = (id: string) => {
    setSelectedSpeakerId(id);
    const speakerSection = document.getElementById('speakers');
    if (speakerSection) {
      speakerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreSchedule = () => {
    const scheduleSection = document.getElementById('schedule');
    if (scheduleSection) {
      scheduleSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-slate-800 font-sans antialiased selection:bg-blue-100 selection:text-brand-blue relative overflow-x-hidden">
      
      {/* Clean light background matching the reference site */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] left-[5%] w-[40%] h-[40%] rounded-full bg-slate-50/50 blur-[100px]" />
        <div className="absolute bottom-[20%] right-[5%] w-[40%] h-[40%] rounded-full bg-slate-50/50 blur-[100px]" />
      </div>

      {/* Elegant Header Navbar */}
      <Header
        language={language}
        setLanguage={setLanguage}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenRegister={() => setRegisterModalOpen(true)}
      />

      {/* Immersive Light Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden border-b border-slate-200/50 bg-[#F8FAFC]"
      >
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,45,88,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,45,88,0.012)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center space-y-8 flex flex-col items-center">
          
          {/* Tagline Badge - Bright, matching the slides theme */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex items-center space-x-2 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full shadow-sm shadow-blue-500/5 select-none"
          >
            <Sparkles className="w-4 h-4 text-brand-blue animate-pulse" />
            <span className="text-xs sm:text-sm font-mono font-bold tracking-wide text-brand-blue">
              {t.heroSubtitle}
            </span>
          </motion.div>

          {/* Main Display Typography Headline - Vibrant Blue & Navy */}
          <div className="space-y-4 max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-brand-navy tracking-tight leading-[1.12]"
            >
              {t.heroTitleFirst}{' '}
              <span className="bg-gradient-to-r from-brand-blue to-brand-navy bg-clip-text text-transparent drop-shadow-sm">
                {t.heroTitleHighlight}
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-slate-500 font-display font-bold uppercase tracking-widest bg-slate-100 border border-slate-200 px-4 py-1 rounded-full w-max mx-auto"
            >
              {t.heroTitleLast}
            </motion.p>
          </div>

          {/* Beautiful Glassmorphic Countdown Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-4xl pt-4"
          >
            <Countdown language={language} />
          </motion.div>

          {/* Call To Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-4"
          >
            <button
              id="hero-cta-register"
              onClick={() => setRegisterModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-brand-blue text-white font-bold font-display shadow-lg shadow-blue-500/15 hover:shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Ticket className="w-5 h-5 text-blue-200" />
              <span>{t.registerBtn}</span>
            </button>

            <button
              id="hero-cta-explore"
              onClick={handleExploreSchedule}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-slate-200 bg-white text-slate-600 hover:text-brand-navy hover:bg-slate-50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center space-x-1 font-semibold text-sm cursor-pointer shadow-sm"
            >
              <span>{t.exploreBtn}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>

        </div>
      </section>

      {/* About Section with Metrics Bento */}
      <About
        language={language}
        onExploreSchedule={handleExploreSchedule}
      />

      {/* Timeline Schedule Planner & Bookmark Itinerary */}
      <Schedule
        language={language}
        savedItinerary={savedItinerary}
        toggleItinerary={toggleItinerary}
        onOpenSpeakerBio={handleOpenSpeakerBio}
      />

      {/* Visionary Speakers Panel Section */}
      <Speakers
        language={language}
        selectedSpeakerId={selectedSpeakerId}
        setSelectedSpeakerId={setSelectedSpeakerId}
      />

      {/* Comprehensive Experiences section implementing requested content opportunities */}
      <Experiences language={language} />

      {/* Accordion FAQ Area */}
      <Faq language={language} />

      {/* Partners banner and Footer links */}
      <Footer language={language} />

      {/* Immersive Ticket Generation and Form Reservation Modal */}
      <RegisterModal
        language={language}
        isOpen={registerModalOpen}
        onClose={() => setRegisterModalOpen(false)}
      />

    </div>
  );
}
