import { motion } from 'motion/react';
import { Language } from '../types';
import { FORUM_THEME_2026 } from '../data';

interface ForumThemeProps {
  language: Language;
}

export default function ForumTheme({ language }: ForumThemeProps) {
  const content = FORUM_THEME_2026[language];

  return (
    <section id="forum-theme" className="relative py-20 sm:py-28 bg-white border-b border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Pill Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-blue bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full">
            {content.badge}
          </span>
        </motion.div>

        {/* Subheading / Theme Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-brand-navy tracking-tight leading-tight"
        >
          {content.title}
        </motion.h2>

        {/* Verbatim Body Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 max-w-3xl mx-auto text-left"
        >
          {content.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal"
            >
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
