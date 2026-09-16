import { motion } from 'motion/react';
import { Play } from 'lucide-react';
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

        {/* Featured Video (Confirmed BCYF 2025 Highlight Video) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl mx-auto space-y-3"
        >
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-navy">
              {featured.year} — {isEn ? featured.titleEn : featured.titleZh}
            </span>
            <span className="text-[10px] font-mono font-semibold uppercase text-brand-blue bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
              {t.featuredVideo}
            </span>
          </div>

          <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900">
            <iframe
              src={featured.embedUrl}
              title={featured.titleEn}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </motion.div>

        {/* Grid of Past Videos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4 pt-4"
        >
          <h3 className="text-lg sm:text-xl font-display font-bold text-brand-navy text-center">
            {t.pastVideos}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pastEditions.map((item) => (
              <div
                key={item.year}
                className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-4 space-y-3 shadow-sm hover:shadow transition-shadow"
              >
                <div className="aspect-video rounded-xl bg-slate-200/80 border border-slate-300/80 flex flex-col items-center justify-center text-slate-500 gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/90 shadow flex items-center justify-center">
                    <Play className="w-4 h-4 text-brand-blue fill-brand-blue ml-0.5" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-slate-600">
                    {item.placeholderText}
                  </span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[11px] font-mono font-bold text-brand-blue block">
                    {item.year}
                  </span>
                  <p className="text-xs font-semibold text-slate-700">
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
