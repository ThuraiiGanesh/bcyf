import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS, GOH_2026 } from '../data';

interface HighlightsCarouselProps {
  language: Language;
}

function SpeakerSkeletonCard({ index }: { index: number }) {
  return (
    <div className="flex-shrink-0 w-48 sm:w-56 bg-white border border-slate-200/80 rounded-2xl p-5 text-center space-y-4 shadow-sm hover:shadow transition-shadow">
      <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center">
        <User className="w-8 h-8 text-slate-300" />
      </div>
      <div className="space-y-2">
        <div className="h-4 bg-slate-200/80 rounded-md w-3/4 mx-auto animate-pulse" />
        <div className="h-3 bg-slate-100 rounded-md w-5/6 mx-auto" />
        <div className="h-2.5 bg-slate-100 rounded-md w-1/2 mx-auto" />
      </div>
      <span className="inline-block text-[10px] font-mono text-slate-400 uppercase tracking-wider">
        [Speaker {index} - Pending]
      </span>
    </div>
  );
}

export default function HighlightsCarousel({ language }: HighlightsCarouselProps) {
  const isEn = language === 'en';
  const t = TRANSLATIONS[language];
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    const scrollAmount = 280;
    if (direction === 'right') {
      if (scrollLeft + clientWidth >= scrollWidth - 25) {
        scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        return;
      }
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else {
      if (scrollLeft <= 15) {
        scrollContainerRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
        return;
      }
      scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="highlights" className="relative py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3"
        >
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-blue bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full inline-block">
            {t.highlightsBadge}
          </span>
        </motion.div>

        {/* GOH & VIP Row (2025 Structural Reference) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* GOH Confirmed Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl border border-blue-200/80 p-6 sm:p-7 text-center space-y-4 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
          >
            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-widest text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                {t.gohBadge}
              </span>
              <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider text-brand-blue bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full">
                {isEn ? GOH_2026.dualRoleNoteEn : GOH_2026.dualRoleNoteZh}
              </span>
            </div>

            {/* Official Headshot */}
            <div className="relative w-32 h-32 mx-auto rounded-full p-1 bg-gradient-to-tr from-brand-blue/30 via-slate-100 to-amber-200/50 shadow-inner">
              <img
                src={GOH_2026.photoUrl}
                alt={isEn ? GOH_2026.nameEn : GOH_2026.nameZh}
                className="w-full h-full rounded-full object-cover shadow-sm bg-white"
              />
            </div>

            {/* Names & Titles */}
            <div className="space-y-1.5 pt-1">
              <h4 className="text-lg sm:text-xl font-display font-extrabold text-brand-navy">
                {isEn ? GOH_2026.nameEn : GOH_2026.nameZh}
              </h4>
              <p className="text-xs sm:text-sm font-semibold text-brand-blue leading-snug">
                {isEn ? GOH_2026.postEn : GOH_2026.postZh}
              </p>
              <p className="text-[11px] font-mono text-slate-500">
                {isEn ? GOH_2026.mpEn : GOH_2026.mpZh}
              </p>
            </div>

            {/* Exact Confirmed Bio Blurb */}
            <div className="pt-2 border-t border-slate-100 text-left">
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {isEn ? GOH_2026.bioEn : GOH_2026.bioZh}
              </p>
            </div>
          </motion.div>

          {/* VIP Card Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-4 shadow-sm"
          >
            <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-widest text-brand-blue bg-blue-50 border border-blue-200 px-3.5 py-1 rounded-full">
              {t.vipBadge}
            </span>
            <div className="w-28 h-28 mx-auto rounded-full bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center">
              <User className="w-12 h-12 text-slate-300" />
            </div>
            <div className="space-y-1.5 pt-1">
              <p className="text-base font-display font-bold text-slate-500">
                [VIP — Pending Confirmation]
              </p>
              <p className="text-xs text-slate-400">
                {t.pendingTitle}
              </p>
            </div>
          </motion.div>
        </div>

        {/* SPEAKERS Carousel Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="space-y-6 pt-4"
        >
          <div className="text-center space-y-1">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-brand-navy">
              {t.speakersBadge}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {t.speakersTbc}
            </p>
          </div>

          <div className="relative group">
            {/* Scroll Container */}
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-5 pb-6 pt-2 no-scrollbar px-2 sm:px-6"
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <SpeakerSkeletonCard key={i} index={i + 1} />
              ))}
            </div>

            {/* Left Scroll Button */}
            <button
              onClick={() => scroll('left')}
              className="absolute top-1/2 -translate-y-1/2 -left-3 sm:-left-5 w-11 h-11 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center text-slate-600 hover:text-brand-blue hover:border-brand-blue/40 transition-all cursor-pointer z-10"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right Scroll Button */}
            <button
              onClick={() => scroll('right')}
              className="absolute top-1/2 -translate-y-1/2 -right-3 sm:-right-5 w-11 h-11 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center text-slate-600 hover:text-brand-blue hover:border-brand-blue/40 transition-all cursor-pointer z-10"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
