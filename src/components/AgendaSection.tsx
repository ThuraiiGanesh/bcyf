import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, User, Sparkles, ChevronDown, ChevronUp, Layers, Store, Compass, Briefcase, X } from 'lucide-react';
import { Language, Speaker } from '../types';
import { RECOMMENDED_FINAL_TIMELINE_2026, TRANSLATIONS, GOH_2026, GALLERY_SHOWCASE_HIGHLIGHT, SPEAKERS_2026 } from '../data';

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

  const [selectedBioSpeaker, setSelectedBioSpeaker] = React.useState<Speaker | null>(null);

  const toggleSession = (id: string) => {
    setExpandedSessions(prev => ({ ...prev, [id]: !prev[id] }));
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
                    
                    {/* Time */}
                    <div className="flex items-center gap-3 shrink-0">
                      <div className="inline-flex items-center gap-1.5 bg-slate-100/90 border border-slate-200/90 px-3 py-1.5 rounded-xl">
                        <Clock className="w-3.5 h-3.5 text-brand-blue" />
                        <span className="text-xs font-mono font-bold text-slate-700 whitespace-nowrap">
                          {item.time}
                        </span>
                      </div>
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

                      {/* Session 1 Fireside Chat Lineup */}
                      {item.sessionNumber === 1 && (
                        <div className="space-y-3 pt-1">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {/* Confirmed Speaker: SMS Desmond Tan Kok Ming */}
                            <div
                              onClick={() => setSelectedBioSpeaker(SPEAKERS_2026.find(s => s.id === 'desmond-tan') || null)}
                              className="bg-white rounded-xl border border-blue-200/80 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-md hover:border-brand-blue/50 transition-all cursor-pointer group"
                            >
                              <img
                                src={GOH_2026.photoUrl}
                                alt={isEn ? GOH_2026.nameEn : GOH_2026.nameZh}
                                className="w-14 h-14 rounded-full object-cover border-2 border-brand-blue/40 shadow-xs shrink-0 group-hover:scale-105 transition-transform"
                              />
                              <div className="min-w-0">
                                <div className="flex flex-wrap items-center gap-1.5">
                                  <span className="text-sm font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                                    {isEn ? 'SMS Desmond Tan Kok Ming' : '陈国明先生'}
                                  </span>
                                  <span className="text-[10px] font-mono font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                                    {isEn ? 'Speaker' : '演讲嘉宾'}
                                  </span>
                                </div>
                                <p className="text-xs text-slate-500 font-medium truncate mt-0.5">
                                  {isEn ? 'Senior Minister of State' : '高级政务部长'}
                                </p>
                              </div>
                            </div>

                            {/* Confirmed Moderator: Tan Wei Wei Celeste */}
                            <div
                              onClick={() => setSelectedBioSpeaker(SPEAKERS_2026.find(s => s.id === 'celeste-tan') || null)}
                              className="bg-white rounded-xl border border-blue-200/80 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-md hover:border-brand-blue/50 transition-all cursor-pointer group"
                            >
                              <img
                                src="/speakers/celeste-tan.jpg"
                                alt={isEn ? 'Tan Wei Wei Celeste' : '陈薇薇'}
                                className="w-14 h-14 rounded-full object-cover border-2 border-brand-blue/40 shadow-xs shrink-0 group-hover:scale-105 transition-transform"
                              />
                              <div className="min-w-0">
                                <div className="flex flex-wrap items-center gap-1.5">
                                  <span className="text-sm font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                                    {isEn ? 'Tan Wei Wei Celeste' : '陈薇薇'}
                                  </span>
                                  <span className="text-[10px] font-mono font-bold text-brand-blue bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full">
                                    {isEn ? 'Moderator' : '主持人'}
                                  </span>
                                </div>
                                <p className="text-xs text-slate-500 font-medium truncate mt-0.5">
                                  {isEn ? 'Enterprise Singapore' : '新加坡企业发展局'}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Session 2 Panel Lineup (Future Media / Health / Connectivity) */}
                      {item.sessionNumber === 2 && (
                        <div className="space-y-3 pt-1">
                          {/* Moderator */}
                          <div className="space-y-1.5">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                              {isEn ? 'Moderator' : '主持人'}
                            </span>
                            <div
                              onClick={() => setSelectedBioSpeaker(SPEAKERS_2026.find(s => s.id === 'howie-lau') || null)}
                              className="bg-white rounded-xl border border-blue-200/80 p-3 flex items-center gap-3 shadow-2xs hover:shadow-md hover:border-brand-blue/50 transition-all cursor-pointer group max-w-md"
                            >
                              <img
                                src="/speakers/howie-lau.jpg"
                                alt="Howie Lau How Sin"
                                className="w-11 h-11 rounded-full object-cover border border-brand-blue/30 shadow-xs shrink-0 group-hover:scale-105 transition-transform"
                              />
                              <div className="min-w-0">
                                <div className="flex items-center gap-1.5">
                                  <span className="text-xs sm:text-sm font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                                    {isEn ? 'Howie Lau How Sin' : '刘浩新'}
                                  </span>
                                  <span className="text-[9px] font-mono font-bold text-brand-blue bg-blue-50 border border-blue-200 px-1.5 py-0.5 rounded-full">
                                    {isEn ? 'Moderator' : '主持人'}
                                  </span>
                                </div>
                                <p className="text-[11px] text-slate-500 truncate mt-0.5">
                                  {isEn ? 'Technology Leader' : '科技行业领袖'}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Panelists */}
                          <div className="space-y-1.5">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                                {isEn ? 'Panelists (at least 2 more speakers TBC)' : '研讨嘉宾（至少2名嘉宾待定）'}
                              </span>
                              <span className="text-[10px] font-mono text-brand-blue bg-blue-50 px-2 py-0.5 rounded-full">
                                {t.panelPendingNote}
                              </span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                              {/* Confirmed Panelist: Zhang Tianyi */}
                              <div
                                onClick={() => setSelectedBioSpeaker(SPEAKERS_2026.find(s => s.id === 'zhang-tianyi') || null)}
                                className="bg-white rounded-xl border border-blue-200/80 p-3 flex items-center gap-3 shadow-2xs hover:shadow-md hover:border-brand-blue/50 transition-all cursor-pointer group"
                              >
                                <img
                                  src="/speakers/zhang-tianyi.jpg"
                                  alt="Zhang Tianyi"
                                  className="w-11 h-11 rounded-full object-cover border border-brand-blue/30 shadow-xs shrink-0 group-hover:scale-105 transition-transform"
                                />
                                <div className="min-w-0">
                                  <div className="flex items-center gap-1.5">
                                    <span className="text-xs sm:text-sm font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                                      {isEn ? 'Zhang Tianyi' : '张天翊'}
                                    </span>
                                  </div>
                                  <p className="text-[11px] text-slate-500 truncate mt-0.5">
                                    PuzzleLogic
                                  </p>
                                </div>
                              </div>

                              {/* Confirmed Panelist: Glex Low */}
                              <div
                                onClick={() => setSelectedBioSpeaker(SPEAKERS_2026.find(s => s.id === 'glex-low') || null)}
                                className="bg-white rounded-xl border border-blue-200/80 p-3 flex items-center gap-3 shadow-2xs hover:shadow-md hover:border-brand-blue/50 transition-all cursor-pointer group"
                              >
                                <div className="w-11 h-11 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-brand-blue font-bold text-xs shrink-0 group-hover:scale-105 transition-transform">
                                  GL
                                </div>
                                <div className="min-w-0">
                                  <div className="flex items-center gap-1.5">
                                    <span className="text-xs sm:text-sm font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                                      Glex Low
                                    </span>
                                  </div>
                                  <p className="text-[11px] text-slate-500 truncate mt-0.5">
                                    Storyworld.AI
                                  </p>
                                </div>
                              </div>

                              {/* Pending Panelist 1 */}
                              <SpeakerChipSkeleton label={isEn ? 'Panelist 3 (TBC)' : '研讨嘉宾 3（待定）'} />

                              {/* Pending Panelist 2 */}
                              <SpeakerChipSkeleton label={isEn ? 'Panelist 4 (TBC)' : '研讨嘉宾 4（待定）'} />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Session 3 Debate Lineup (AI & Workforce Inequalities) */}
                      {item.sessionNumber === 3 && (
                        <div className="space-y-3 pt-1">
                          {/* Moderator Pending */}
                          <div className="space-y-1.5">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                              {isEn ? 'Debate Moderator' : '辩论主持人'}
                            </span>
                            <div className="max-w-md">
                              <SpeakerChipSkeleton label={isEn ? 'Debate Moderator (TBC - In Discussion)' : '辩论主持人（商讨中待定）'} />
                            </div>
                          </div>

                          {/* Debaters */}
                          <div className="space-y-1.5">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                                {isEn ? 'Debaters (2 more speakers TBC)' : '辩论嘉宾（2名嘉宾待定）'}
                              </span>
                              <span className="text-[10px] font-mono text-brand-blue bg-blue-50 px-2 py-0.5 rounded-full">
                                {t.debatePendingNote}
                              </span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                              {/* Confirmed Debater: Prof. Adam Chee */}
                              <div
                                onClick={() => setSelectedBioSpeaker(SPEAKERS_2026.find(s => s.id === 'adam-chee') || null)}
                                className="bg-white rounded-xl border border-blue-200/80 p-3 flex items-center gap-3 shadow-2xs hover:shadow-md hover:border-brand-blue/50 transition-all cursor-pointer group"
                              >
                                <img
                                  src="/speakers/adam-chee.jpg"
                                  alt="Prof. Adam Chee"
                                  className="w-11 h-11 rounded-full object-cover border border-brand-blue/30 shadow-xs shrink-0 group-hover:scale-105 transition-transform"
                                />
                                <div className="min-w-0">
                                  <div className="flex items-center gap-1.5">
                                    <span className="text-xs sm:text-sm font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                                      {isEn ? 'Prof. Adam Chee' : '齐亚当教授'}
                                    </span>
                                  </div>
                                  <p className="text-[11px] text-slate-500 truncate mt-0.5">
                                    {isEn ? 'Singapore General Hospital' : '新加坡中央医院'}
                                  </p>
                                </div>
                              </div>

                              {/* Confirmed Debater: Yiyang He */}
                              <div
                                onClick={() => setSelectedBioSpeaker(SPEAKERS_2026.find(s => s.id === 'he-yiyang') || null)}
                                className="bg-white rounded-xl border border-blue-200/80 p-3 flex items-center gap-3 shadow-2xs hover:shadow-md hover:border-brand-blue/50 transition-all cursor-pointer group"
                              >
                                <img
                                  src="/speakers/he-yiyang.jpg"
                                  alt="Yiyang He"
                                  className="w-11 h-11 rounded-full object-cover border border-brand-blue/30 shadow-xs shrink-0 group-hover:scale-105 transition-transform"
                                />
                                <div className="min-w-0">
                                  <div className="flex items-center gap-1.5">
                                    <span className="text-xs sm:text-sm font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                                      {isEn ? 'Yiyang He' : '何依洋'}
                                    </span>
                                  </div>
                                  <p className="text-[11px] text-slate-500 truncate mt-0.5">
                                    {isEn ? 'National University of Singapore' : '新加坡国立大学'}
                                  </p>
                                </div>
                              </div>

                              {/* Confirmed Debater: Yi KaiZhi */}
                              <div
                                onClick={() => setSelectedBioSpeaker(SPEAKERS_2026.find(s => s.id === 'yi-kaizhi') || null)}
                                className="bg-white rounded-xl border border-blue-200/80 p-3 flex items-center gap-3 shadow-2xs hover:shadow-md hover:border-brand-blue/50 transition-all cursor-pointer group"
                              >
                                <img
                                  src="/speakers/yi-kaizhi.jpg"
                                  alt="Yi KaiZhi"
                                  className="w-11 h-11 rounded-full object-cover border border-brand-blue/30 shadow-xs shrink-0 group-hover:scale-105 transition-transform"
                                />
                                <div className="min-w-0">
                                  <div className="flex items-center gap-1.5">
                                    <span className="text-xs sm:text-sm font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                                      {isEn ? 'Yi KaiZhi' : '易凯智'}
                                    </span>
                                  </div>
                                  <p className="text-[11px] text-slate-500 truncate mt-0.5">
                                    {isEn ? 'SagePaths Group' : '联智教育集团'}
                                  </p>
                                </div>
                              </div>

                              {/* Pending Debater 1 */}
                              <SpeakerChipSkeleton label={isEn ? 'Debater 4 (TBC)' : '辩论嘉宾 4（待定）'} />

                              {/* Pending Debater 2 */}
                              <SpeakerChipSkeleton label={isEn ? 'Debater 5 (TBC)' : '辩论嘉宾 5（待定）'} />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Non-major sessions with keynote speaker (e.g. Opening Remarks by Business China CEO) */}
                  {item.speakerPhoto && !isMajor && (
                    <div className="mt-3.5 pt-3.5 border-t border-slate-100 flex items-center gap-3.5 bg-slate-50/70 p-3 rounded-xl border border-slate-200/60">
                      <img
                        src={item.speakerPhoto}
                        alt={isEn ? item.speakerEn : item.speakerZh}
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover object-top border-2 border-brand-blue/30 shadow-sm shrink-0"
                      />
                      <div className="space-y-0.5">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-bold text-brand-navy text-sm sm:text-base">
                            {isEn ? item.speakerEn : item.speakerZh}
                          </span>
                          <span className="text-[10px] font-mono font-bold text-brand-blue bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
                            {isEn ? 'Opening Remarks' : '致开幕辞'}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 font-medium">
                          {isEn ? item.speakerRoleEn : item.speakerRoleZh}
                        </p>
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

      {/* Speaker Bio Modal */}
      <AnimatePresence>
        {selectedBioSpeaker && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBioSpeaker(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.35 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[85vh] flex flex-col"
            >
              <div className="bg-[#1A264F] text-white px-6 py-5 flex items-center justify-between shrink-0">
                <div className="flex items-center space-x-3.5">
                  {selectedBioSpeaker.photoUrl ? (
                    <img
                      src={selectedBioSpeaker.photoUrl}
                      alt={isEn ? selectedBioSpeaker.name : selectedBioSpeaker.nameZh}
                      className="w-12 h-12 rounded-full object-cover object-top border-2 border-white/50 shadow-sm shrink-0"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-blue-100 text-brand-navy border-2 border-white/50 flex items-center justify-center font-bold text-sm shrink-0">
                      {selectedBioSpeaker.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                    </div>
                  )}
                  <div>
                    <h3 className="text-base sm:text-lg font-display font-bold">
                      {isEn ? selectedBioSpeaker.name : selectedBioSpeaker.nameZh}
                    </h3>
                    <div className="flex flex-wrap items-center gap-1.5 mt-0.5">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-200 bg-white/10 px-2 py-0.5 rounded-full">
                        {isEn ? selectedBioSpeaker.sessionTagEn : selectedBioSpeaker.sessionTagZh}
                      </span>
                      {selectedBioSpeaker.isModerator && (
                        <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-amber-300 bg-white/10 px-2 py-0.5 rounded-full">
                          {isEn ? 'Moderator' : '主持人'}
                        </span>
                      )}
                    </div>
                    {selectedBioSpeaker.organizationEn && (
                      <p className="text-xs text-blue-200/90 mt-0.5 line-clamp-1">
                        {isEn ? selectedBioSpeaker.organizationEn : selectedBioSpeaker.organizationZh}
                      </p>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedBioSpeaker(null)}
                  className="text-slate-300 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/10 cursor-pointer"
                  aria-label="Close bio modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-4 overflow-y-auto text-xs sm:text-sm text-slate-700 leading-relaxed">
                {(isEn ? selectedBioSpeaker.bioEn : selectedBioSpeaker.bioZh) ? (
                  (isEn ? selectedBioSpeaker.bioEn : selectedBioSpeaker.bioZh)!
                    .split('\n\n')
                    .map((para, i) => (
                      <p key={i}>{para}</p>
                    ))
                ) : (
                  <p className="text-slate-500 italic">
                    {t.bioComingSoon}
                  </p>
                )}
              </div>

              <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex justify-end shrink-0">
                <button
                  type="button"
                  onClick={() => setSelectedBioSpeaker(null)}
                  className="px-4 py-2 bg-[#1A264F] hover:bg-brand-blue text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
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
