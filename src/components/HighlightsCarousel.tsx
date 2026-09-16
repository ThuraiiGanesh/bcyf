import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data';

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
  const t = TRANSLATIONS[language];
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 280;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
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
          {/* GOH Card Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-4 shadow-sm"
          >
            <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 px-3.5 py-1 rounded-full">
              {t.gohBadge}
            </span>
            <div className="w-28 h-28 mx-auto rounded-full bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center">
              <User className="w-12 h-12 text-slate-300" />
            </div>
            <div className="space-y-1.5 pt-1">
              <p className="text-base font-display font-bold text-slate-500">
                [GOH — Pending Confirmation]
              </p>
              <p className="text-xs text-slate-400">
                {t.pendingTitle}
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
