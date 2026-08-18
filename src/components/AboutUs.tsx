import { motion } from 'motion/react';

export default function AboutUs() {
  return (
    <section id="about" className="relative py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-navy tracking-tight">
            About Us
          </h2>
        </motion.div>

        {/* About Business China Youth Forum */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          <h3 className="text-lg sm:text-xl font-display font-bold text-brand-navy">
            About Business China Youth Forum
          </h3>
          <div className="placeholder-box p-6 min-h-[100px]">
            <p className="placeholder-text text-sm leading-relaxed text-center max-w-xl">
              [PLACEHOLDER — Describe BCYF's mission, history, and role in nurturing bilingual bicultural youth leaders. Include founding year, key milestones, and the forum's impact on Singapore-China youth engagement.]
            </p>
          </div>
        </motion.div>

        {/* About Business China */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="text-lg sm:text-xl font-display font-bold text-brand-navy">
            About Business China
          </h3>
          <div className="placeholder-box p-6 min-h-[100px]">
            <p className="placeholder-text text-sm leading-relaxed text-center max-w-xl">
              [PLACEHOLDER — Describe Business China's mission as a non-profit organisation established in 2007, its role in promoting bilingualism and biculturalism, and its flagship programmes including FCGF.]
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
