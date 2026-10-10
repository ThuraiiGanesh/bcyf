import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, BookOpen } from 'lucide-react';
import { Language, GOHPerson, CEOPerson } from '../types';
import { TRANSLATIONS, GOH_2026, CEO_2026 } from '../data';

interface HighlightsCarouselProps {
  language: Language;
}



export default function HighlightsCarousel({ language }: HighlightsCarouselProps) {
  const isEn = language === 'en';
  const t = TRANSLATIONS[language];

  // Bio modal state
  const [selectedBioPerson, setSelectedBioPerson] = React.useState<GOHPerson | CEOPerson | null>(null);

  return (
    <section id="highlights" className="relative py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3"
        >
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-blue bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full inline-block">
            {t.highlightsBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-navy tracking-tight">
            {isEn ? 'Guest of Honour & Business China CEO' : '主礼嘉宾与通商中国总裁'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
            {isEn 
              ? 'Distinguished leadership gracing Business China Youth Forum 2026'
              : '莅临2026年通商中国青年论坛的重量级领导与嘉宾'}
          </p>
        </motion.div>

        {/* GOH & Business China CEO Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* GOH Confirmed Card (Mr Desmond Tan Kok Ming) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl border border-blue-200/80 p-6 sm:p-7 text-center space-y-4 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Badges */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-widest text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                  {t.gohBadge}
                </span>
              </div>

              {/* Official Headshot */}
              <div className="relative w-32 h-32 mx-auto rounded-full p-1 bg-gradient-to-tr from-brand-blue/30 via-slate-100 to-amber-200/50 shadow-inner">
                <img
                  src={GOH_2026.photoUrl}
                  alt={isEn ? GOH_2026.nameEn : GOH_2026.nameZh}
                  className="w-full h-full rounded-full object-cover shadow-sm bg-white"
                />
              </div>

              {/* Names & Titles */}
              <div className="space-y-1.5 pt-1">
                <h4 className="text-lg sm:text-xl font-display font-extrabold text-brand-navy">
                  {isEn ? GOH_2026.nameEn : GOH_2026.nameZh}
                </h4>
                <p className="text-xs sm:text-sm font-semibold text-brand-blue leading-snug">
                  {isEn ? GOH_2026.postEn : GOH_2026.postZh}
                </p>
              </div>

              {/* Exact Confirmed Bio Blurb */}
              <div className="pt-3 border-t border-slate-100 text-left">
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {isEn ? GOH_2026.bioEn : GOH_2026.bioZh}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-end">
              <button
                onClick={() => setSelectedBioPerson(GOH_2026)}
                className="text-xs font-semibold text-brand-blue hover:text-brand-navy inline-flex items-center gap-1 cursor-pointer transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>{t.readFullBio}</span>
              </button>
            </div>
          </motion.div>

          {/* Business China CEO Card (Ms Kwek Poh Heok) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl border border-blue-200/80 p-6 sm:p-7 text-center space-y-4 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Badges */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-widest text-brand-blue bg-blue-50 border border-blue-200 px-3.5 py-1 rounded-full">
                  {t.ceoBadge}
                </span>
              </div>

              {/* Official Headshot (green top) */}
              <div className="relative w-32 h-32 mx-auto rounded-full p-1 bg-gradient-to-tr from-brand-blue/30 via-slate-100 to-emerald-200/50 shadow-inner">
                <img
                  src={CEO_2026.photoUrl}
                  alt={isEn ? CEO_2026.nameEn : CEO_2026.nameZh}
                  className="w-full h-full rounded-full object-cover object-top shadow-sm bg-white"
                />
              </div>

              {/* Names & Titles */}
              <div className="space-y-1.5 pt-1">
                <h4 className="text-lg sm:text-xl font-display font-extrabold text-brand-navy">
                  {isEn ? CEO_2026.nameEn : CEO_2026.nameZh}
                </h4>
                <p className="text-xs sm:text-sm font-semibold text-brand-blue leading-snug">
                  {isEn ? CEO_2026.postEn : CEO_2026.postZh}
                </p>
              </div>

              {/* Exact Confirmed Short Bio Blurb (Verbatim from doc) */}
              <div className="pt-3 border-t border-slate-100 text-left">
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {isEn ? CEO_2026.bioEn : CEO_2026.bioZh}
                </p>
              </div>
            </div>

            {/* Read Full Bio Modal trigger */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-end">
              <button
                onClick={() => setSelectedBioPerson(CEO_2026)}
                className="text-xs font-semibold text-brand-blue hover:text-brand-navy inline-flex items-center gap-1 cursor-pointer transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>{t.readFullBio}</span>
              </button>
            </div>
          </motion.div>

        </div>



      </div>

      {/* Bio Modal Dialog */}
      <AnimatePresence>
        {selectedBioPerson && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBioPerson(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[85vh] flex flex-col"
            >
              {/* Header */}
              <div className="bg-brand-navy text-white px-6 py-5 flex items-center justify-between shrink-0">
                <div className="flex items-center space-x-3.5">
                  <img
                    src={selectedBioPerson.photoUrl}
                    alt={isEn ? selectedBioPerson.nameEn : selectedBioPerson.nameZh}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white/40 shadow-sm"
                  />
                  <div>
                    <h3 className="text-base sm:text-lg font-display font-bold">
                      {isEn ? selectedBioPerson.nameEn : selectedBioPerson.nameZh}
                    </h3>
                    <p className="text-xs text-blue-200">
                      {isEn ? selectedBioPerson.postEn : selectedBioPerson.postZh}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedBioPerson(null)}
                  className="text-slate-300 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/10 cursor-pointer"
                  aria-label="Close bio modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 space-y-4 overflow-y-auto text-xs sm:text-sm text-slate-700 leading-relaxed">
                {'fullBioEn' in selectedBioPerson && selectedBioPerson.fullBioEn ? (
                  isEn ? (
                    selectedBioPerson.fullBioEn.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))
                  ) : (
                    selectedBioPerson.fullBioZh.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))
                  )
                ) : (
                  <p>{isEn ? selectedBioPerson.bioEn : selectedBioPerson.bioZh}</p>
                )}
              </div>

              {/* Footer */}
              <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex justify-end shrink-0">
                <button
                  type="button"
                  onClick={() => setSelectedBioPerson(null)}
                  className="px-4 py-2 bg-brand-navy hover:bg-brand-blue text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  {t.closeBio}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
