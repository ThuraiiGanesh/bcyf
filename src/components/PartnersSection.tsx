import { motion } from 'motion/react';
import { Language } from '../types';
import { TRANSLATIONS, STRATEGIC_PARTNER, SPONSORS_ROW_1, PARTNERS_ROW_2 } from '../data';

interface PartnersSectionProps {
  language: Language;
}

export default function PartnersSection({ language }: PartnersSectionProps) {
  const isEn = language === 'en';
  const t = TRANSLATIONS[language];

  return (
    <section id="partners" className="relative py-20 sm:py-28 bg-brand-navy text-white overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-32 right-10 w-[500px] h-[300px] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">

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
            {t.partnersTitle}
          </h2>
          <p className="text-xs sm:text-sm text-blue-200/80 max-w-xl mx-auto">
            {t.hostPartnerNote}
          </p>
        </motion.div>

        {/* 1) Strategic Partner Group (Separate, Centered) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="text-center">
            <h3 className="text-xs sm:text-sm font-semibold text-blue-300/90 uppercase tracking-widest font-mono">
              {t.strategicPartner}
            </h3>
          </div>
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="w-56 sm:w-64 bg-white rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center h-28 sm:h-32 border border-white/90 group"
            >
              <img
                src={STRATEGIC_PARTNER.logo}
                alt={isEn ? STRATEGIC_PARTNER.name : (STRATEGIC_PARTNER.nameZh || STRATEGIC_PARTNER.name)}
                title={isEn ? STRATEGIC_PARTNER.name : (STRATEGIC_PARTNER.nameZh || STRATEGIC_PARTNER.name)}
                className="max-h-16 sm:max-h-20 max-w-[85%] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* 2) Sponsors and Partners Group (Exact EDM 2-Row Format: Matching 4th pic) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6 pt-2"
        >
          <div className="text-center">
            <h3 className="text-xs sm:text-sm font-semibold text-blue-300/90 uppercase tracking-widest font-mono">
              {t.sponsorsAndPartners}
            </h3>
          </div>

          <div className="space-y-4 sm:space-y-5">
            {/* Row 1: Corporate Sponsors (Hyperforge, GKC, Keppel, Steelcore, Hisense) */}
            <div className="max-w-[1060px] mx-auto">
              <div className="flex flex-wrap justify-center gap-3.5 sm:gap-4 md:gap-5 items-stretch">
                {SPONSORS_ROW_1.map((partner, index) => {
                  const displayName = isEn ? partner.name : (partner.nameZh || partner.name);
                  return (
                    <motion.div
                      key={partner.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: index * 0.03 }}
                      className="w-[calc(50%-0.5rem)] sm:w-44 md:w-48 bg-white rounded-2xl p-3 sm:p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center h-24 sm:h-28 border border-white/90 group"
                    >
                      <img
                        src={partner.logo}
                        alt={displayName}
                        title={displayName}
                        className="max-h-12 sm:max-h-14 max-w-[85%] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Row 2: Partners (CHAGEE, OCBC, Huawei, Yuewen, Zall Bookstore, CSAIA, Fuchsia Lane, Teahills) */}
            <div className="max-w-[860px] mx-auto">
              <div className="flex flex-wrap justify-center gap-3.5 sm:gap-4 md:gap-5 items-stretch">
                {PARTNERS_ROW_2.map((partner, index) => {
                  const displayName = isEn ? partner.name : (partner.nameZh || partner.name);
                  return (
                    <motion.div
                      key={partner.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.15 + index * 0.03 }}
                      className="w-[calc(50%-0.5rem)] sm:w-44 md:w-48 bg-white rounded-2xl p-3 sm:p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center h-24 sm:h-28 border border-white/90 group"
                    >
                      <img
                        src={partner.logo}
                        alt={displayName}
                        title={displayName}
                        className="max-h-12 sm:max-h-14 max-w-[85%] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer-style bottom bar */}
        <div className="border-t border-slate-800/80 pt-8 text-center space-y-2">
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
