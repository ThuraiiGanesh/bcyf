import { motion } from 'motion/react';
import { Language } from '../types';
import { ABOUT_US_2026 } from '../data';

interface AboutUsProps {
  language: Language;
}

export default function AboutUs({ language }: AboutUsProps) {
  const content = ABOUT_US_2026[language];

  return (
    <section id="about" className="relative py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Section Pill / Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3"
        >
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-blue bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full inline-block">
            {content.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-navy tracking-tight">
            {content.mainTitle}
          </h2>
        </motion.div>

        {/* About Business China Youth Forum */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm"
        >
          <h3 className="text-xl sm:text-2xl font-display font-bold text-brand-navy">
            {content.bcyfTitle}
          </h3>
          <p className="text-base text-slate-700 leading-relaxed font-normal">
            {content.bcyfDesc}
          </p>
        </motion.div>

        {/* About Business China */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm"
        >
          <h3 className="text-xl sm:text-2xl font-display font-bold text-brand-navy">
            {content.bcTitle}
          </h3>
          <p className="text-base text-slate-700 leading-relaxed font-normal">
            {content.bcDesc}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
