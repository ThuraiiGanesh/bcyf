import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { Language } from '../types';
import { WATCH_2026, TRANSLATIONS } from '../data';

interface WatchSectionProps {
  language: Language;
}

export default function WatchSection({ language }: WatchSectionProps) {
  const isEn = language === 'en';
  const t = TRANSLATIONS[language];
  const { featured, pastEditions } = WATCH_2026;

  return (
    <section id="watch" className="relative py-20 sm:py-28 bg-white border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3"
        >
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-blue bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full inline-block">
            {t.watchBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-navy tracking-tight">
            {isEn ? 'Watch Forum Highlights' : '论坛精彩视频回顾'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
            {t.watchSubtitle}
          </p>
        </motion.div>

        {/* 1. Featured Video (BCYF 2025 Highlight Video) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl mx-auto space-y-3"
        >
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-blue animate-pulse" />
              <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-brand-navy">
                {featured.year} — {isEn ? featured.titleEn : featured.titleZh}
              </span>
            </div>
            <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              <Sparkles className="w-3 h-3" />
              {t.featuredVideo}
            </span>
          </div>

          <div className="relative aspect-video w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900">
            <iframe
              src={featured.embedUrl}
              title={featured.titleEn}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </motion.div>

        {/* 2. Grid of Past Videos (2024, 2023, 2022) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6 pt-6"
        >
          <div className="text-center space-y-1">
            <h3 className="text-lg sm:text-xl font-display font-bold text-brand-navy">
              {t.pastVideos}
            </h3>
            <p className="text-xs text-slate-400 font-mono">
              {isEn ? 'Archived highlight videos from previous editions' : '往届精彩回顾视频'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pastEditions.map((item) => (
              <div
                key={item.year}
                className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-3.5 space-y-3 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-xs border border-slate-200 bg-slate-900">
                  <iframe
                    src={item.embedUrl}
                    title={item.titleEn}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="space-y-0.5 px-1">
                  <span className="text-[11px] font-mono font-bold text-brand-blue block">
                    {item.year}
                  </span>
                  <p className="text-xs font-bold text-slate-800">
                    {isEn ? item.titleEn : item.titleZh}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
