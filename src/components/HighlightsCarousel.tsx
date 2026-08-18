import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function SpeakerCard({ index }: { index: number; key?: React.Key }) {
  return (
    <div className="flex-shrink-0 w-44 sm:w-52 space-y-3 text-center">
      <div className="placeholder-photo w-20 h-20 sm:w-24 sm:h-24 mx-auto">
        <span className="text-[8px]">PHOTO</span>
      </div>
      <div className="space-y-1">
        <p className="placeholder-text text-sm font-semibold">[Speaker {index} Name]</p>
        <p className="placeholder-text text-xs">[Title]</p>
        <p className="placeholder-text text-[11px]">[Organisation]</p>
      </div>
    </div>
  );
}

export default function HighlightsCarousel() {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const slides = ['HIGHLIGHTS', 'SPEAKERS'];

  return (
    <section id="highlights" className="relative py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Dots Nav at Top */}
        <div className="flex justify-center gap-2 mb-10">
          {slides.map((label, i) => (
            <button
              key={label}
              onClick={() => setActiveSlide(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeSlide === i
                  ? 'bg-brand-blue text-white shadow-md'
                  : 'bg-white text-slate-500 border border-slate-200 hover:border-brand-blue/40'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${activeSlide === i ? 'bg-white' : 'bg-slate-300'}`} />
              {label}
            </button>
          ))}
        </div>

        {/* Slide Content */}
        <motion.div
          key={activeSlide}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          {activeSlide === 0 ? (
            /* HIGHLIGHTS Slide — GOH + VIP */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* GOH Card */}
              <div className="glass-card rounded-2xl p-8 text-center space-y-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-600 bg-amber-50 border border-amber-100 px-3 py-1 rounded-full">
                  Guest-of-Honour
                </span>
                <div className="placeholder-photo w-28 h-28 mx-auto">
                  <span className="text-[9px]">GOH PHOTO</span>
                </div>
                <div className="space-y-1">
                  <p className="placeholder-text text-lg font-display font-bold">[PLACEHOLDER — GOH name]</p>
                  <p className="placeholder-text text-sm">[PLACEHOLDER — GOH title]</p>
                </div>
              </div>

              {/* VIP Card */}
              <div className="glass-card rounded-2xl p-8 text-center space-y-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-blue bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                  VIP
                </span>
                <div className="placeholder-photo w-28 h-28 mx-auto">
                  <span className="text-[9px]">VIP PHOTO</span>
                </div>
                <div className="space-y-1">
                  <p className="placeholder-text text-lg font-display font-bold">[PLACEHOLDER — VIP name]</p>
                  <p className="placeholder-text text-sm">[PLACEHOLDER — VIP title]</p>
                </div>
              </div>
            </div>
          ) : (
            /* SPEAKERS Slide — Scrollable Row */
            <div className="relative">
              <div className="flex overflow-x-auto gap-6 pb-4 no-scrollbar px-4">
                {Array.from({ length: 8 }).map((_, i) => (
                  <SpeakerCard key={i} index={i + 1} />
                ))}
              </div>
              {/* Scroll Hints */}
              <div className="hidden sm:flex absolute top-1/2 -translate-y-1/2 -left-4 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md items-center justify-center text-slate-400 pointer-events-none">
                <ChevronLeft className="w-5 h-5" />
              </div>
              <div className="hidden sm:flex absolute top-1/2 -translate-y-1/2 -right-4 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md items-center justify-center text-slate-400 pointer-events-none">
                <ChevronRight className="w-5 h-5" />
              </div>
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
}
