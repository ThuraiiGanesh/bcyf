/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, SPEAKERS, AGENDA } from '../data';
import { X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SpeakersProps {
  language: Language;
  selectedSpeakerId: string | null;
  setSelectedSpeakerId: (id: string | null) => void;
}

export default function Speakers({
  language,
  selectedSpeakerId,
  setSelectedSpeakerId
}: SpeakersProps) {
  const t = TRANSLATIONS[language];

  const selectedSpeaker = SPEAKERS.find((s) => s.id === selectedSpeakerId);

  // Find what sessions this speaker is presenting in
  const speakerSessions = selectedSpeaker
    ? AGENDA.filter((item) => item.speakers.includes(selectedSpeaker.id))
    : [];

  // Gradient seeds for avatar letters
  const getAvatarGradient = (id: string) => {
    switch (id) {
      case 'guest-of-honour':
        return 'from-amber-500 to-rose-600 shadow-rose-500/10';
      case 'speaker-1':
        return 'from-blue-600 to-indigo-700 shadow-blue-500/10';
      case 'speaker-2':
        return 'from-emerald-500 to-cyan-500 shadow-emerald-500/10';
      case 'speaker-3':
        return 'from-purple-600 to-indigo-500 shadow-indigo-500/10';
      case 'speaker-4':
        return 'from-cyan-500 to-blue-600 shadow-cyan-500/10';
      default:
        return 'from-violet-500 to-fuchsia-600 shadow-fuchsia-500/10';
    }
  };

  return (
    <section id="speakers" className="relative py-24 border-b border-blue-200/40 bg-white/45 backdrop-blur-md overflow-hidden">
      {/* Background soft playful accents */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-orange-100/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-100/20 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Head */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-blue bg-blue-50/50 border border-blue-100/60 px-3 py-1.5 rounded-full">
            {language === 'en' ? 'Bicultural Minds' : '双语双文化思想家'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-navy tracking-tight mt-4">
            {t.speakersTitle}
          </h2>
          <p className="text-sm text-slate-500 mt-2 font-medium">
            {t.speakersSubtitle}
          </p>
        </div>

        {/* Speakers Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPEAKERS.map((speaker, idx) => {
            const grad = getAvatarGradient(speaker.id);
            return (
              <motion.div
                key={speaker.id}
                id={`speaker-card-${speaker.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setSelectedSpeakerId(speaker.id)}
                className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 hover:border-blue-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="text-left">
                  {/* Avatar Frame */}
                  <div className="relative mb-5 w-max">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${grad} flex items-center justify-center font-display font-bold text-lg text-white shadow`}>
                      {speaker.avatar}
                    </div>
                    {/* Tiny visual category tag on card */}
                    <span className="absolute -bottom-1 -right-2 px-1.5 py-0.5 rounded text-[8px] font-mono font-bold uppercase bg-blue-50 border border-blue-100/60 text-brand-blue shadow-sm">
                      {language === 'en' ? speaker.category.split(' ')[0] : speaker.categoryZh.slice(0, 4)}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg font-display font-extrabold text-brand-navy group-hover:text-brand-blue transition-colors">
                      {language === 'en' ? speaker.name : speaker.nameZh}
                    </h3>
                    <p className="text-xs text-brand-blue font-mono font-bold">
                      {language === 'en' ? speaker.company : speaker.companyZh}
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed mt-2 font-medium line-clamp-2">
                      {language === 'en' ? speaker.role : speaker.roleZh}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-slate-400 group-hover:text-brand-blue transition-colors">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-wider">
                    {language === 'en' ? 'View Bio' : '查看简介'}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Bio Modal Dialog */}
      <AnimatePresence>
        {selectedSpeaker && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSpeakerId(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              id="speaker-bio-modal"
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="relative max-w-xl w-full rounded-3xl border border-slate-200 bg-white shadow-2xl p-6 sm:p-8 overflow-hidden z-10 text-left"
            >
              {/* Close Button */}
              <button
                id="close-speaker-modal"
                onClick={() => setSelectedSpeakerId(null)}
                className="absolute top-5 right-5 p-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-brand-navy transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-6">
                
                {/* Header Information */}
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr ${getAvatarGradient(selectedSpeaker.id)} flex items-center justify-center font-display font-bold text-xl sm:text-2xl text-white shadow-lg shrink-0`}>
                    {selectedSpeaker.avatar}
                  </div>
                  <div className="space-y-1.5 text-left">
                    <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase bg-blue-50 border border-blue-100/60 text-brand-blue">
                      {language === 'en' ? selectedSpeaker.category : selectedSpeaker.categoryZh}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-extrabold text-brand-navy tracking-tight">
                      {language === 'en' ? selectedSpeaker.name : selectedSpeaker.nameZh}
                    </h3>
                    <p className="text-xs sm:text-sm font-bold text-brand-blue">
                      {language === 'en' ? selectedSpeaker.company : selectedSpeaker.companyZh}
                    </p>
                  </div>
                </div>

                {/* Subtitle details */}
                <div className="p-3.5 rounded-xl border border-slate-100 bg-slate-50 text-xs text-slate-600 font-semibold leading-relaxed">
                  {language === 'en' ? selectedSpeaker.role : selectedSpeaker.roleZh}
                </div>

                {/* Bio text */}
                <div className="space-y-2">
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    {t.speakersModalBio}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {language === 'en' ? selectedSpeaker.bio : selectedSpeaker.bioZh}
                  </p>
                </div>

                {/* Speaker Sessions panel */}
                {speakerSessions.length > 0 && (
                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      {t.speakersModalTopic}
                    </h4>
                    {speakerSessions.map((session) => (
                      <div
                        key={session.id}
                        className="p-3 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between gap-3 text-xs"
                      >
                        <div className="space-y-1 text-left">
                          <p className="font-bold text-slate-800 leading-snug">
                            {language === 'en' ? session.title : session.titleZh}
                          </p>
                          <p className="text-[10px] text-brand-blue font-mono font-bold">
                            {session.startTime} - {session.endTime} @ {language === 'en' ? session.location : session.locationZh}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
