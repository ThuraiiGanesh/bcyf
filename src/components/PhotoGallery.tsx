import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Image } from 'lucide-react';

export default function PhotoGallery() {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="photo-gallery" className="relative py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* Pill Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-blue bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full">
            [Year] PHOTO GALLERY
          </span>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative"
        >
          {/* Scroll Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-5 pb-4 no-scrollbar snap-x snap-mandatory"
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-72 sm:w-80 h-48 sm:h-56 placeholder-box snap-start"
              >
                <div className="flex flex-col items-center gap-2">
                  <Image className="w-8 h-8 text-slate-400" />
                  <span className="text-[10px]">[PLACEHOLDER — image {i + 1}]</span>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Arrows */}
          <button
            onClick={() => scroll('left')}
            className="absolute top-1/2 -translate-y-1/2 -left-3 sm:-left-5 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center text-slate-500 hover:text-brand-blue hover:border-brand-blue/40 transition-all cursor-pointer z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute top-1/2 -translate-y-1/2 -right-3 sm:-right-5 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center text-slate-500 hover:text-brand-blue hover:border-brand-blue/40 transition-all cursor-pointer z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
