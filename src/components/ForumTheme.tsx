import { motion } from 'motion/react';

export default function ForumTheme() {
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
            FORUM THEME
          </span>
        </motion.div>

        {/* Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-brand-navy tracking-tight leading-tight"
        >
          <span className="placeholder-text">[PLACEHOLDER — theme title]</span>
        </motion.h2>

        {/* Body Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-5 max-w-3xl mx-auto"
        >
          <div className="placeholder-box p-6 min-h-[80px] text-left">
            <p className="placeholder-text text-sm leading-relaxed w-full text-center">
              [PLACEHOLDER — paragraph 1: Describe the forum theme, its significance, and how it connects to BCYF's mission of nurturing bilingual bicultural youth leaders.]
            </p>
          </div>

          <div className="placeholder-box p-6 min-h-[80px] text-left">
            <p className="placeholder-text text-sm leading-relaxed w-full text-center">
              [PLACEHOLDER — paragraph 2: Elaborate on the theme's relevance to current global trends, Singapore-China relations, and youth empowerment.]
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
