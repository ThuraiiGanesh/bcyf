import { motion } from 'motion/react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data';
import { Building2 } from 'lucide-react';

interface PartnerGroupProps {
  title: string;
  count: number;
  delay: number;
  highlightFirst?: { name: string; tag: string };
}

function PartnerGroup({ title, count, delay, highlightFirst }: PartnerGroupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay }}
      className="space-y-4"
    >
      <h3 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-widest text-center">
        {title}
      </h3>
      <div className="flex flex-wrap justify-center gap-4">
        {highlightFirst && (
          <div className="w-44 sm:w-52 h-20 sm:h-24 bg-white/10 border border-blue-400/40 rounded-xl p-3 flex flex-col items-center justify-center text-center shadow-sm">
            <span className="text-[9px] font-mono uppercase tracking-wider text-blue-300 font-bold block">
              {highlightFirst.tag}
            </span>
            <span className="text-xs font-display font-bold text-white mt-1">
              {highlightFirst.name}
            </span>
          </div>
        )}
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="w-36 sm:w-44 h-16 sm:h-20 rounded-xl border border-dashed border-slate-600/70 bg-white/5 flex flex-col items-center justify-center text-slate-400 text-center p-2"
          >
            <Building2 className="w-4 h-4 text-slate-500 mb-1 opacity-60" />
            <span className="text-[9px] font-mono text-slate-400">
              [Logo Pending]
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

interface PartnersSectionProps {
  language: Language;
}

export default function PartnersSection({ language }: PartnersSectionProps) {
  const isEn = language === 'en';
  const t = TRANSLATIONS[language];

  return (
    <section id="partners" className="relative py-20 sm:py-28 bg-brand-navy text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3"
        >
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-300 bg-blue-950/80 border border-blue-800/60 px-4 py-1.5 rounded-full inline-block">
            {t.partnersBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            {isEn ? 'Partners & Sponsors' : '合作伙伴与赞助机构'}
          </h2>
          <p className="text-xs text-blue-200/80 max-w-md mx-auto">
            {t.hostPartnerNote}
          </p>
        </motion.div>

        {/* Partner Tier Groups */}
        <div className="space-y-12 max-w-4xl mx-auto">
          <PartnerGroup
            title={t.strategicPartners}
            count={3}
            delay={0.1}
            highlightFirst={{
              name: isEn ? 'Temasek Polytechnic' : '淡马锡理工学院',
              tag: isEn ? 'Host Venue Partner' : '场地合作方'
            }}
          />

          <div className="border-t border-slate-700/50" />
          <PartnerGroup title={t.singaporePartners} count={4} delay={0.15} />

          <div className="border-t border-slate-700/50" />
          <PartnerGroup title={t.chinaPartners} count={4} delay={0.2} />

          <div className="border-t border-slate-700/50" />
          <PartnerGroup title={t.sponsors} count={4} delay={0.25} />
        </div>

        {/* Footer-style bottom bar */}
        <div className="border-t border-slate-800 pt-8 text-center space-y-2">
          <p className="text-xs text-slate-400 font-medium">
            {t.footerCopyright}
          </p>
          <p className="text-[11px] text-slate-500 font-mono">
            {t.footerSlogan}
          </p>
        </div>

      </div>
    </section>
  );
}
