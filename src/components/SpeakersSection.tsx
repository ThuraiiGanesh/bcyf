import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, User, ExternalLink, Sparkles } from 'lucide-react';
import { Language, Speaker } from '../types';
import { TRANSLATIONS, SPEAKERS_2026 } from '../data';

interface SpeakersSectionProps {
  language: Language;
}

export default function SpeakersSection({ language }: SpeakersSectionProps) {
  const isEn = language === 'en';
  const t = TRANSLATIONS[language];

  // Carousel & Modal states
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [selectedSpeaker, setSelectedSpeaker] = React.useState<Speaker | null>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  const speakers = SPEAKERS_2026;
  const totalSpeakers = speakers.length;

  // Calculate items per view for dots indicator
  const checkScrollState = React.useCallback(() => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);

    // Approximate active page for dots indicator
    const cardWidth = clientWidth >= 1024 ? clientWidth / 4 : clientWidth >= 640 ? clientWidth / 2 : clientWidth;
    const newIdx = Math.round(scrollLeft / cardWidth);
    setCurrentIndex(Math.min(Math.max(newIdx, 0), totalSpeakers - 1));
  }, [totalSpeakers]);

  React.useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    checkScrollState();
    el.addEventListener('scroll', checkScrollState, { passive: true });
    window.addEventListener('resize', checkScrollState);
    return () => {
      el.removeEventListener('scroll', checkScrollState);
      window.removeEventListener('resize', checkScrollState);
    };
  }, [checkScrollState]);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const { clientWidth, scrollLeft, scrollWidth } = scrollContainerRef.current;
    // Step by approximately one view width or 2 cards
    const step = clientWidth >= 1024 ? clientWidth : clientWidth * 0.8;

    if (direction === 'right') {
      if (scrollLeft + clientWidth >= scrollWidth - 15) {
        scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollContainerRef.current.scrollBy({ left: step, behavior: 'smooth' });
      }
    } else {
      if (scrollLeft <= 15) {
        scrollContainerRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
      } else {
        scrollContainerRef.current.scrollBy({ left: -step, behavior: 'smooth' });
      }
    }
  };

  const scrollToSpeaker = (idx: number) => {
    if (!scrollContainerRef.current) return;
    const { clientWidth } = scrollContainerRef.current;
    const cardWidth = clientWidth >= 1024 ? clientWidth / 4 : clientWidth >= 640 ? clientWidth / 2 : clientWidth;
    scrollContainerRef.current.scrollTo({
      left: idx * cardWidth,
      behavior: 'smooth'
    });
  };

  // Close modal with ESC key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedSpeaker(null);
    };
    if (selectedSpeaker) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedSpeaker]);

  return (
    <section
      id="speakers"
      className="relative py-20 sm:py-28 bg-gradient-to-b from-[#EFF2F9] via-[#F4F6FC] to-[#FFFFFF] border-b border-slate-200/70 overflow-hidden"
    >
      {/* Subtle decorative background gradient glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-50/50 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header with Orange Pill Badge (matching FCGF layout in picture 1) */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 sm:mb-14">
          <div className="space-y-3">
            {/* Coral/Orange pill badge matching screenshot */}
            <div className="inline-flex items-center px-7 py-2.5 rounded-full bg-gradient-to-r from-[#FF5238] to-[#EF3F26] text-white shadow-md shadow-orange-500/25">
              <span className="text-sm sm:text-base font-extrabold tracking-widest uppercase">
                {t.speakersBadge}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-xl">
              {t.speakersSubtitle}
            </p>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative group">

          {/* Left Arrow Button */}
          <button
            onClick={() => scroll('left')}
            className="absolute top-1/2 -translate-y-1/2 -left-3 sm:-left-6 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-white text-[#1A264F] hover:text-brand-blue border border-slate-200/80 shadow-md hover:shadow-xl flex items-center justify-center transition-all cursor-pointer z-20 backdrop-blur-sm"
            aria-label="Previous speakers"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll('right')}
            className="absolute top-1/2 -translate-y-1/2 -right-3 sm:-right-6 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-white text-[#1A264F] hover:text-brand-blue border border-slate-200/80 shadow-md hover:shadow-xl flex items-center justify-center transition-all cursor-pointer z-20 backdrop-blur-sm"
            aria-label="Next speakers"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Horizontal Scrolling Card Track */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scroll-smooth gap-6 sm:gap-7 pb-8 pt-3 no-scrollbar px-2 sm:px-4 snap-x snap-mandatory"
          >
            {speakers.map((speaker, idx) => {
              const displayName = isEn ? speaker.name : speaker.nameZh;
              const displaySession = isEn ? speaker.sessionTagEn : speaker.sessionTagZh;
              const displayOrg = isEn ? speaker.organizationEn : speaker.organizationZh;

              return (
                <div
                  key={speaker.id}
                  onClick={() => setSelectedSpeaker(speaker)}
                  className="flex-shrink-0 w-[260px] sm:w-[270px] lg:w-[calc(25%-18px)] snap-start group/card cursor-pointer focus:outline-none"
                  tabIndex={0}
                  role="button"
                  aria-label={`View bio of ${displayName}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedSpeaker(speaker);
                    }
                  }}
                >
                  <div className="h-full flex flex-col items-center text-center p-5 sm:p-6 rounded-2xl bg-white/80 hover:bg-white border border-slate-200/80 hover:border-blue-300 shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5">
                    
                    {/* Speaker Circular Headshot (Reference 1st picture) */}
                    <div className="relative mb-5">
                      <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1 bg-gradient-to-tr from-blue-100 via-white to-slate-100 shadow-md group-hover/card:shadow-lg transition-all">
                        {speaker.photoUrl ? (
                          <img
                            src={speaker.photoUrl}
                            alt={displayName}
                            className="w-full h-full rounded-full object-cover object-top border-4 border-white bg-slate-100"
                            loading="lazy"
                          />
                        ) : (
                          /* Initial / Silhouette Avatar Placeholder (e.g. Glex Low) */
                          <div className="w-full h-full rounded-full border-4 border-white bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center text-brand-blue">
                            <span className="text-2xl sm:text-3xl font-display font-extrabold tracking-wider">
                              {speaker.name
                                .split(' ')
                                .map((n) => n[0])
                                .slice(0, 2)
                                .join('')}
                            </span>
                            <span className="text-[10px] font-mono uppercase text-slate-400 mt-1">
                              {isEn ? 'Photo Pending' : '照片待更新'}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Speaker Name */}
                    <h3 className="text-base sm:text-lg font-display font-bold text-[#1A264F] group-hover/card:text-brand-blue transition-colors line-clamp-2 min-h-[2.75rem] flex items-center justify-center">
                      {displayName}
                    </h3>

                    {/* Session Tag (Rule 2: Drop designation/title — replaced with session tag) */}
                    <div className="mt-2.5 flex flex-wrap items-center justify-center gap-1.5">
                      <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-brand-blue bg-blue-50 border border-blue-200/80 px-2.5 py-0.5 rounded-full">
                        {displaySession}
                      </span>
                      {speaker.isModerator && (
                        <span className="inline-block text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-600 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-full">
                          {isEn ? 'Moderator' : '主持人'}
                        </span>
                      )}
                    </div>

                    {/* Organization Name (if available) */}
                    {displayOrg && (
                      <p className="mt-2 text-xs sm:text-[13px] text-slate-500 font-medium leading-snug line-clamp-2 px-1">
                        {displayOrg}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots Pagination Indicator (matching FCGF layout in picture 1) */}
          <div className="flex items-center justify-center gap-2 pt-2">
            {Array.from({ length: Math.ceil(totalSpeakers / 2) }).map((_, i) => {
              const active = Math.floor(currentIndex / 2) === i;
              return (
                <button
                  key={`dot-${i}`}
                  onClick={() => scrollToSpeaker(i * 2)}
                  className={`rounded-full transition-all cursor-pointer ${
                    active
                      ? 'w-6 h-2.5 bg-[#1A264F]'
                      : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              );
            })}
          </div>

        </div>

      </div>

      {/* Speaker Full Bio Modal (Rule 1: Click card to reveal full bio) */}
      <AnimatePresence>
        {selectedSpeaker && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSpeaker(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.35 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[85vh] flex flex-col"
            >
              {/* Header */}
              <div className="bg-[#1A264F] text-white px-6 py-5 flex items-center justify-between shrink-0">
                <div className="flex items-center space-x-4">
                  {selectedSpeaker.photoUrl ? (
                    <img
                      src={selectedSpeaker.photoUrl}
                      alt={isEn ? selectedSpeaker.name : selectedSpeaker.nameZh}
                      className="w-14 h-14 rounded-full object-cover object-top border-2 border-white/50 shadow-sm shrink-0"
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-blue-100 text-brand-navy border-2 border-white/50 flex items-center justify-center font-bold text-lg shrink-0">
                      {selectedSpeaker.name
                        .split(' ')
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join('')}
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg sm:text-xl font-display font-bold leading-tight">
                      {isEn ? selectedSpeaker.name : selectedSpeaker.nameZh}
                    </h3>
                    <div className="flex flex-wrap items-center gap-1.5 mt-1">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-200 bg-white/10 px-2 py-0.5 rounded-full">
                        {isEn ? selectedSpeaker.sessionTagEn : selectedSpeaker.sessionTagZh}
                      </span>
                      {selectedSpeaker.isModerator && (
                        <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-amber-300 bg-white/10 px-2 py-0.5 rounded-full">
                          {isEn ? 'Moderator' : '主持人'}
                        </span>
                      )}
                    </div>
                    {selectedSpeaker.organizationEn && (
                      <p className="text-xs text-blue-200/90 mt-1 line-clamp-1">
                        {isEn ? selectedSpeaker.organizationEn : selectedSpeaker.organizationZh}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedSpeaker(null)}
                  className="text-slate-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10 cursor-pointer"
                  aria-label="Close bio modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 space-y-4 overflow-y-auto text-xs sm:text-sm text-slate-700 leading-relaxed">
                {(isEn ? selectedSpeaker.bioEn : selectedSpeaker.bioZh) ? (
                  (isEn ? selectedSpeaker.bioEn : selectedSpeaker.bioZh)!
                    .split('\n\n')
                    .map((paragraph, idx) => (
                      <p key={idx} className="leading-relaxed">
                        {paragraph}
                      </p>
                    ))
                ) : (
                  <p className="text-slate-500 italic">
                    {t.bioComingSoon}
                  </p>
                )}
              </div>

              {/* Footer */}
              <div className="bg-slate-50 px-6 py-3.5 border-t border-slate-200 flex justify-end shrink-0">
                <button
                  type="button"
                  onClick={() => setSelectedSpeaker(null)}
                  className="px-5 py-2 bg-[#1A264F] hover:bg-brand-blue text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  {t.closeBio}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
