import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data';

interface PhotoGalleryProps {
  language: Language;
}

export default function PhotoGallery({ language }: PhotoGalleryProps) {
  const t = TRANSLATIONS[language];
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="photo-gallery" className="relative py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3"
        >
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-blue bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full inline-block">
            {t.galleryBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-navy tracking-tight">
            {language === 'en' ? 'Forum Moments' : '论坛精彩瞬间'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
            {t.gallerySubtitle}
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative group"
        >
          {/* Scroll Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-5 pb-6 pt-2 no-scrollbar snap-x snap-mandatory px-2 sm:px-4"
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-72 sm:w-80 h-48 sm:h-56 bg-white border border-slate-200 rounded-2xl p-4 shadow-sm snap-start flex flex-col items-center justify-center gap-3 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400">
                  <ImageIcon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-slate-600 block">
                    {language === 'en' ? `Archive Photo 0${i + 1}` : `精彩照片 0${i + 1}`}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 block">
                    [PLACEHOLDER — 2025 Edition Photo]
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Arrows */}
          <button
            onClick={() => scroll('left')}
            className="absolute top-1/2 -translate-y-1/2 -left-3 sm:-left-5 w-11 h-11 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center text-slate-600 hover:text-brand-blue hover:border-brand-blue/40 transition-all cursor-pointer z-10"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute top-1/2 -translate-y-1/2 -right-3 sm:-right-5 w-11 h-11 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center text-slate-600 hover:text-brand-blue hover:border-brand-blue/40 transition-all cursor-pointer z-10"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
