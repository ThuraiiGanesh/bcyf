import { motion } from 'motion/react';

interface PartnerGroupProps {
  title: string;
  count: number;
  delay: number;
}

function PartnerGroup({ title, count, delay }: PartnerGroupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay }}
      className="space-y-4"
    >
      <h3 className="text-sm font-display font-bold text-brand-navy uppercase tracking-wider text-center">
        {title}
      </h3>
      <div className="flex flex-wrap justify-center gap-4">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="placeholder-box w-36 sm:w-44 h-16 sm:h-20"
          >
            <span className="text-[9px]">[LOGO]</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function PartnersSection() {
  return (
    <section id="partners" className="relative py-20 sm:py-28 bg-brand-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-2"
        >
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 bg-blue-950/60 border border-blue-900/50 px-3 py-1.5 rounded-full">
            Partners & Sponsors
          </span>
        </motion.div>

        {/* Partner Groups */}
        <div className="space-y-12">
          <PartnerGroup title="Strategic Partners" count={3} delay={0.1} />
          <div className="border-t border-slate-700/50" />
          <PartnerGroup title="Singapore Partners" count={4} delay={0.15} />
          <div className="border-t border-slate-700/50" />
          <PartnerGroup title="China Partners" count={4} delay={0.2} />
          <div className="border-t border-slate-700/50" />
          <PartnerGroup title="Sponsors" count={5} delay={0.25} />
        </div>

        {/* Footer-style bottom bar */}
        <div className="border-t border-slate-700/50 pt-8 text-center">
          <p className="text-[11px] text-slate-500 font-medium">
            © 2026 Business China. All rights reserved. Business China (通商中国) is a non-profit organization.
          </p>
        </div>

      </div>
    </section>
  );
}
