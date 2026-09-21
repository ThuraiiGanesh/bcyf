import React from 'react';
import { motion } from 'motion/react';
import { Clock, User, Sparkles, ChevronDown, ChevronUp, Layers, Store, Compass, Briefcase } from 'lucide-react';
import { Language } from '../types';
import { RECOMMENDED_FINAL_TIMELINE_2026, TRANSLATIONS, GOH_2026, GALLERY_SHOWCASE_HIGHLIGHT } from '../data';

interface AgendaSectionProps {
  language: Language;
}

function SpeakerChipSkeleton({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/80 rounded-xl px-2.5 py-1.5">
      <div className="w-7 h-7 rounded-full bg-slate-200/80 border border-dashed border-slate-300 shrink-0 flex items-center justify-center">
        <User className="w-3.5 h-3.5 text-slate-400" />
      </div>
      <div className="space-y-0.5 min-w-0 flex-1">
        <div className="h-2.5 bg-slate-200 rounded w-3/4 animate-pulse" />
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
  const [expandedSessions, setExpandedSessions] = React.useState<Record<string, boolean>>({
    'item-8': true,
    'item-9': true,
    'item-11': true,
  });

  const toggleSession = (id: string) => {
    setExpandedSessions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const getTypeBadge = (type: string, isMajor?: boolean) => {
    if (isMajor) {
      return (
        <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider text-brand-blue bg-blue-50 border border-blue-200/80 px-2.5 py-0.5 rounded-full">
          <Sparkles className="w-3 h-3" />
          {isEn ? 'Core Session' : '核心环节'}
        </span>
      );
    }
    switch (type) {
      case 'keynote':
        return (
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
            {isEn ? 'Keynote / Remarks' : '致辞 / 演讲'}
          </span>
        );
      case 'ceremony':
        return (
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-700 bg-purple-50 border border-purple-200 px-2 py-0.5 rounded-full">
            {isEn ? 'Ceremony' : '仪式'}
          </span>
        );
      case 'break':
        return (
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
            {isEn ? 'Networking Break' : '中场茶歇'}
          </span>
        );
      case 'exhibition':
        return (
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-full">
            {isEn ? 'Gallery Showcase' : '企业展区'}
          </span>
        );
      case 'registration':
        return (
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-600 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-full">
            {isEn ? 'Registration' : '登记就座'}
          </span>
        );
      default:
        return null;
    }
  };

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
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-navy tracking-tight">
            {isEn ? 'Official Programme Agenda' : '论坛官方议程'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
            {isEn
              ? 'Officially confirmed programme schedule for Business China Youth Forum 2026'
              : '2026年通商中国青年论坛官方确认日程安排'}
          </p>
        </motion.div>

        {/* Confirmed Gallery Showcase Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-blue-900 via-brand-navy to-slate-900 text-white p-6 sm:p-8 shadow-xl border border-blue-800/60 relative overflow-hidden"
        >
          {/* Subtle architectural decorative aura */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-48 h-48 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-blue-500/20 text-blue-300 border border-blue-400/30 px-3 py-1 rounded-full flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-blue-400" />
                  {isEn ? GALLERY_SHOWCASE_HIGHLIGHT.badgeEn : GALLERY_SHOWCASE_HIGHLIGHT.badgeZh}
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/60 border border-emerald-700/60 px-2.5 py-1 rounded-full">
                  11:00 – 17:00
                </span>
              </div>
              <span className="text-xs text-blue-200/90 font-mono">
                {isEn ? 'Outside Auditorium 1' : '淡马锡理工礼堂外展区'}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
              {isEn ? GALLERY_SHOWCASE_HIGHLIGHT.titleEn : GALLERY_SHOWCASE_HIGHLIGHT.titleZh}
            </h3>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
              {isEn ? GALLERY_SHOWCASE_HIGHLIGHT.descriptionEn : GALLERY_SHOWCASE_HIGHLIGHT.descriptionZh}
            </p>

            {/* Feature quick badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
              <div className="bg-white/10 rounded-xl p-3 border border-white/10 flex items-center gap-2.5">
                <Briefcase className="w-4 h-4 text-blue-300 shrink-0" />
                <span className="text-xs text-white font-medium">
                  {isEn ? 'Internships & Careers' : '实习就业与职涯机会'}
                </span>
              </div>
              <div className="bg-white/10 rounded-xl p-3 border border-white/10 flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
                <span className="text-xs text-white font-medium">
                  {isEn ? 'AI Tech Product Demos' : 'AI科技与前沿创新展示'}
                </span>
              </div>
              <div className="bg-white/10 rounded-xl p-3 border border-white/10 flex items-center gap-2.5">
                <Store className="w-4 h-4 text-emerald-300 shrink-0" />
                <span className="text-xs text-white font-medium">
                  {isEn ? 'Young Entrepreneurs' : '青年创业故事分享展位'}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Confirmed 13 Official Timeline Items */}
        <div className="max-w-4xl mx-auto space-y-3">
          {RECOMMENDED_FINAL_TIMELINE_2026.map((item, index) => {
            const title = isEn ? item.titleEn : item.titleZh;
            const subtitle = isEn ? item.subtitleEn : item.subtitleZh;
            const desc = isEn ? item.descriptionEn : item.descriptionZh;
            const isMajor = item.isMajorSession;
            const isExpanded = expandedSessions[item.id] ?? false;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: index * 0.025 }}
                className={`rounded-2xl border transition-all duration-200 ${
                  isMajor
                    ? 'bg-gradient-to-r from-[#F0F5FC]/60 via-white to-white border-blue-200/90 shadow-sm hover:shadow-md'
                    : 'bg-white border-slate-200/80 hover:border-slate-300 hover:bg-slate-50/50'
                }`}
              >
                <div className="p-4 sm:p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    
                    {/* Time & Badges */}
                    <div className="flex items-center gap-3 shrink-0">
                      <div className="inline-flex items-center gap-1.5 bg-slate-100/90 border border-slate-200/90 px-3 py-1.5 rounded-xl">
                        <Clock className="w-3.5 h-3.5 text-brand-blue" />
                        <span className="text-xs font-mono font-bold text-slate-700 whitespace-nowrap">
                          {item.time}
                        </span>
                      </div>
                      {getTypeBadge(item.type, isMajor)}
                    </div>

                    {/* Title */}
                    <div className="flex-1 min-w-0 sm:px-3">
                      <div className="flex items-center gap-2">
                        {isMajor && item.sessionNumber && (
                          <span className="text-xs font-mono font-bold text-brand-blue shrink-0">
                            [Session {item.sessionNumber}]
                          </span>
                        )}
                        <h3 className={`font-display text-sm sm:text-base leading-snug truncate ${
                          isMajor ? 'font-extrabold text-brand-navy' : 'font-semibold text-slate-800'
                        }`}>
                          {title}
                        </h3>
                      </div>
                    </div>

                    {/* Toggle button for major sessions */}
                    {isMajor && (
                      <button
                        onClick={() => toggleSession(item.id)}
                        className="self-end sm:self-center text-xs font-medium text-brand-blue hover:text-blue-800 flex items-center gap-1 cursor-pointer bg-blue-50/80 px-2.5 py-1 rounded-lg border border-blue-100 transition-colors"
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? (isEn ? 'Less' : '收起') : (isEn ? 'Details' : '详情')}</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>
                    )}

                  </div>

                  {/* Expandable Core Session Details */}
                  {isMajor && isExpanded && (
                    <div className="mt-4 pt-4 border-t border-blue-100/80 space-y-4">
                      {subtitle && (
                        <p className="text-xs font-mono font-semibold text-brand-blue">
                          {subtitle}
                        </p>
                      )}

                      {desc && (
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {desc}
                        </p>
                      )}

                      {/* Speaker presentation */}
                      {item.sessionNumber === 1 ? (
                        /* Session 1 Fireside Chat Speaker Card (Mr Desmond Tan Kok Ming) */
                        <div className="bg-white rounded-xl border border-blue-200/80 p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
                          <div className="flex items-center gap-3">
                            <img
                              src={GOH_2026.photoUrl}
                              alt={isEn ? GOH_2026.nameEn : GOH_2026.nameZh}
                              className="w-12 h-12 rounded-full object-cover border-2 border-brand-blue/30 shadow-xs"
                            />
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs sm:text-sm font-bold text-brand-navy">
                                  {isEn ? GOH_2026.nameEn : GOH_2026.nameZh}
                                </span>
                                <span className="text-[10px] font-mono font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                                  {isEn ? 'Speaker & GOH' : '主礼嘉宾兼演讲者'}
                                </span>
                              </div>
                              <p className="text-[11px] text-slate-600 leading-tight mt-0.5">
                                {isEn ? GOH_2026.postEn : GOH_2026.postZh}
                              </p>
                            </div>
                          </div>

                          <div className="sm:border-l sm:border-slate-100 sm:pl-4">
                            <span className="text-[10px] font-mono text-slate-400 block mb-1">
                              {isEn ? 'Moderator' : '主持人'}
                            </span>
                            <SpeakerChipSkeleton label={t.agendaSpeakerChipPending} />
                          </div>
                        </div>
                      ) : (
                        /* Other Sessions with Speakers/Moderators Pending */
                        <div className="space-y-1.5 pt-1">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                            {isEn ? 'Panelists & Speakers (Pending Final Confirmation)' : '演讲与研讨嘉宾（待最终确认）'}
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <SpeakerChipSkeleton label={t.agendaSpeakerChipPending} />
                            <SpeakerChipSkeleton label={t.agendaSpeakerChipPending} />
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Non-major sessions with keynote speaker (e.g. Opening Remarks by Business China CEO) */}
                  {item.speakerPhoto && !isMajor && (
                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-2.5">
                      <img
                        src={item.speakerPhoto}
                        alt={isEn ? item.speakerEn : item.speakerZh}
                        className="w-8 h-8 rounded-full object-cover border border-slate-200 shadow-2xs"
                      />
                      <div className="text-xs">
                        <span className="font-semibold text-brand-navy">
                          {isEn ? item.speakerEn : item.speakerZh}
                        </span>
                        <span className="text-slate-400 mx-1.5">·</span>
                        <span className="text-slate-500 text-[11px]">
                          {isEn ? item.speakerRoleEn : item.speakerRoleZh}
                        </span>
                      </div>
                    </div>
                  )}

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
          className="text-xs text-slate-400 italic text-center font-medium pt-2"
        >
          {t.agendaFootnote}
        </motion.p>

      </div>
    </section>
  );
}
