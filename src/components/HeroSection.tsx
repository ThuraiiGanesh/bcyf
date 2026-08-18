import { motion } from 'motion/react';
import Logo from './Logo';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-[#F8FAFC]"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,45,88,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,45,88,0.012)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center space-y-10 flex flex-col items-center">
        
        {/* Event Wordmark / Logo Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-center"
        >
          <div className="placeholder-box w-full max-w-lg h-48 sm:h-56">
            <div className="text-center space-y-2">
              <Logo className="h-16 sm:h-20 w-auto mx-auto" />
              <span className="text-[10px] block">[PLACEHOLDER — event wordmark/logo]</span>
            </div>
          </div>
        </motion.div>

        {/* Theme Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="space-y-3 max-w-3xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-brand-navy tracking-tight leading-tight">
            <span className="placeholder-text">[PLACEHOLDER — EN theme title]</span>
          </h1>
          <p className="text-xl sm:text-2xl font-display font-bold text-slate-400">
            <span className="placeholder-text">[PLACEHOLDER — 中文 theme title]</span>
          </p>
        </motion.div>

        {/* Date + Venue Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-flex items-center space-x-3 bg-white border border-slate-200 px-6 py-3 rounded-full shadow-sm">
            <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
            <span className="text-sm sm:text-base font-display font-bold text-brand-navy tracking-wide">
              21 November 2026, Temasek Polytechnic, Singapore
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
