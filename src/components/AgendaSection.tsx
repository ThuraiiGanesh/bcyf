import { motion } from 'motion/react';
import { Clock, User, AlertCircle } from 'lucide-react';
import { Language } from '../types';
import { CONFIRMED_SESSIONS_2026, TRANSLATIONS } from '../data';

interface AgendaSectionProps {
  language: Language;
}

function SpeakerChipSkeleton({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-2">
      <div className="w-8 h-8 rounded-full bg-slate-200/80 border border-dashed border-slate-300 shrink-0 flex items-center justify-center">
        <User className="w-4 h-4 text-slate-400" />
      </div>
      <div className="space-y-1 min-w-0 flex-1">
        <div className="h-3 bg-slate-200 rounded w-4/5 animate-pulse" />
        <span className="text-[10px] font-mono text-slate-400 block truncate">
          {label}
        </span>
      </div>
    </div>
  );
}

export default function AgendaSection({ language }: AgendaSectionProps) {
  const isEn = language === 'en';
  const t = TRANSLATIONS[language];

  return (
    <section id="agenda" className="relative py-20 sm:py-28 bg-white border-b border-slate-200/60">
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
            {t.agendaBadge}
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-navy">
            {isEn ? 'Programme Agenda' : '论坛议程'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
            {t.agendaSubtitle}
          </p>
        </motion.div>

        {/* Notice of Pending Run-of-Show Timings */}
        <div className="bg-slate-50 border border-dashed border-slate-300 rounded-2xl p-4 flex items-center gap-3 text-slate-600 max-w-3xl mx-auto">
          <AlertCircle className="w-5 h-5 text-brand-blue shrink-0" />
          <p className="text-xs sm:text-sm leading-relaxed">
            {isEn
              ? 'Detailed timeline, session timings, and final sequence are currently pending resolution across organizing committees. The confirmed sessions below reflect the core programme structure.'
              : '论坛具体时间节点与详细开幕流程正由组委会核定中。以下为已确认的核心论坛环节与描述。'}
          </p>
        </div>

        {/* Confirmed Sessions Timeline */}
        <div className="divide-y divide-slate-100 max-w-5xl mx-auto">
          {CONFIRMED_SESSIONS_2026.map((session, index) => {
            const title = isEn ? session.titleEn : session.titleZh;
            const desc = isEn ? session.descriptionEn : session.descriptionZh;
            const sessionType = isEn ? session.sessionTypeEn : session.sessionTypeZh;

            return (
              <motion.div
                key={session.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
              >
                {/* Time Column (Skeleton / Pending) */}
                <div className="md:col-span-3 space-y-2">
                  <div className="inline-flex items-center gap-1.5 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-lg">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-xs font-mono font-bold text-slate-500">
                      {t.agendaTimingPending}
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-blue block">
                      {sessionType}
                    </span>
                  </div>
                </div>

                {/* Session Description (Exact Confirmed Copy) */}
                <div className="md:col-span-6 space-y-2.5">
                  <h3 className="text-base sm:text-lg font-display font-bold text-brand-navy leading-snug">
                    {title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {desc}
                  </p>
                </div>

                {/* Speakers Chips (Skeleton Placeholder) */}
                <div className="md:col-span-3 space-y-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                    {isEn ? 'Panelists & Guests' : '出席嘉宾'}
                  </span>
                  <div className="space-y-2">
                    <SpeakerChipSkeleton label={t.agendaSpeakerChipPending} />
                    <SpeakerChipSkeleton label={t.agendaSpeakerChipPending} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xs text-slate-400 italic text-center font-medium pt-4"
        >
          {t.agendaFootnote}
        </motion.p>

      </div>
    </section>
  );
}
