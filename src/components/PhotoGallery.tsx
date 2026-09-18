import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, ZoomIn, Images } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS, GALLERY_PHOTOS_2025 } from '../data';

interface PhotoGalleryProps {
  language: Language;
}

export default function PhotoGallery({ language }: PhotoGalleryProps) {
  const isEn = language === 'en';
  const t = TRANSLATIONS[language];
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [activePhotoIndex, setActivePhotoIndex] = React.useState<number | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const amount = 380;
    if (direction === 'right') {
      if (scrollLeft + clientWidth >= scrollWidth - 25) {
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        return;
      }
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    } else {
      if (scrollLeft <= 15) {
        scrollRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
        return;
      }
      scrollRef.current.scrollBy({ left: -amount, behavior: 'smooth' });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (activePhotoIndex === null) return;
    if (e.key === 'Escape') setActivePhotoIndex(null);
    if (e.key === 'ArrowLeft') {
      setActivePhotoIndex(prev => (prev !== null && prev > 0 ? prev - 1 : GALLERY_PHOTOS_2025.length - 1));
    }
    if (e.key === 'ArrowRight') {
      setActivePhotoIndex(prev => (prev !== null && prev < GALLERY_PHOTOS_2025.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <section id="photo-gallery" className="relative py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest text-brand-blue bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full">
            <Images className="w-3.5 h-3.5" />
            <span>{t.galleryBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-navy tracking-tight">
            {isEn ? 'Forum Moments Gallery' : '往届论坛精彩瞬间集锦'}
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative group px-1"
        >
          {/* Scrollable Ribbon */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 sm:gap-5 pb-6 pt-2 no-scrollbar snap-x snap-mandatory px-2 sm:px-4"
          >
            {GALLERY_PHOTOS_2025.map((photo, i) => (
              <div
                key={photo.id}
                onClick={() => setActivePhotoIndex(i)}
                className="flex-shrink-0 w-72 sm:w-80 h-52 sm:h-60 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 snap-start cursor-pointer group/card relative flex flex-col"
              >
                <div className="relative w-full h-full overflow-hidden bg-slate-100">
                  <img
                    src={photo.thumb}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <div className="flex items-center justify-between w-full text-white">
                      <span className="text-xs font-mono font-medium drop-shadow-sm">
                        Photo #{i + 1}
                      </span>
                      <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center">
                        <ZoomIn className="w-3.5 h-3.5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Left / Right Nav Controls */}
          <button
            onClick={() => scroll('left')}
            className="absolute top-1/2 -translate-y-1/2 -left-2 sm:-left-4 w-11 h-11 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center text-slate-700 hover:text-brand-blue hover:border-brand-blue/40 transition-all cursor-pointer z-10"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute top-1/2 -translate-y-1/2 -right-2 sm:-right-4 w-11 h-11 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center text-slate-700 hover:text-brand-blue hover:border-brand-blue/40 transition-all cursor-pointer z-10"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activePhotoIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              tabIndex={0}
              onKeyDown={handleKeyDown}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 outline-none"
            >
              {/* Close Button */}
              <button
                onClick={() => setActivePhotoIndex(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors z-20"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev Button */}
              <button
                onClick={() => setActivePhotoIndex(prev => (prev !== null && prev > 0 ? prev - 1 : GALLERY_PHOTOS_2025.length - 1))}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center cursor-pointer transition-colors z-20"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={() => setActivePhotoIndex(prev => (prev !== null && prev < GALLERY_PHOTOS_2025.length - 1 ? prev + 1 : 0))}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center cursor-pointer transition-colors z-20"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Active Image Container */}
              <div className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center space-y-3">
                <img
                  src={GALLERY_PHOTOS_2025[activePhotoIndex].src}
                  alt={GALLERY_PHOTOS_2025[activePhotoIndex].alt}
                  className="max-h-[75vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
                />
                <div className="flex items-center justify-between w-full text-white/80 px-2 text-xs font-mono">
                  <span>
                    {isEn ? 'BCYF Archive Photo' : 'BCYF 往届现场图集'}
                  </span>
                  <span>
                    {activePhotoIndex + 1} / {GALLERY_PHOTOS_2025.length}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
