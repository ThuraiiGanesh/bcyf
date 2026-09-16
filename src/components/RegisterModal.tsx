/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Language } from '../types';
import { TRANSLATIONS } from '../data';
import { X, Calendar, MapPin, Clock, Bell } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface RegisterModalProps {
  language: Language;
  isOpen: boolean;
  onClose: () => void;
}

export default function RegisterModal({
  language,
  isOpen,
  onClose
}: RegisterModalProps) {
  const t = TRANSLATIONS[language];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10"
          >
            {/* Top decorative header */}
            <div className="bg-brand-navy text-white px-6 py-5 flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-blue-300">
                  BCYF 2026
                </span>
                <h3 className="text-lg font-display font-bold">
                  {t.registerModalTitle}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="text-slate-300 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Notice banner */}
              <div className="flex items-start space-x-3.5 bg-amber-50 border border-amber-200/80 rounded-xl p-4 text-amber-900">
                <Bell className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs sm:text-sm">
                  <p className="font-semibold">
                    {language === 'en' ? 'Registration Opening Soon' : '报名通道即将开放'}
                  </p>
                  <p className="text-amber-800/90 leading-relaxed text-xs">
                    {t.registerModalPendingDesc}
                  </p>
                </div>
              </div>

              {/* Event quick recap */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center space-x-2.5">
                  <Calendar className="w-4 h-4 text-brand-blue shrink-0" />
                  <span>{language === 'en' ? '24 October 2026 (Saturday)' : '2026年10月24日（星期六）'}</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Clock className="w-4 h-4 text-brand-blue shrink-0" />
                  <span>{language === 'en' ? '11:00am – 6:00pm' : '上午11:00 – 下午6:00'}</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <MapPin className="w-4 h-4 text-brand-blue shrink-0" />
                  <span>Temasek Polytechnic Auditorium 1, Singapore</span>
                </div>
              </div>

              {/* Ticket tier skeleton placeholder */}
              <div className="space-y-2 pt-1">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                  {language === 'en' ? 'Ticket Tiers [Pending Confirmation]' : '票务类型 [待公布]'}
                </span>
                <div className="placeholder-box p-4 text-center">
                  <span className="text-xs text-slate-500">
                    [PLACEHOLDER — Registration Form & Ticket Tiers]
                  </span>
                </div>
              </div>

              {/* Action button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-2.5 px-4 bg-brand-navy hover:bg-brand-blue text-white text-xs font-bold font-display rounded-xl transition-colors cursor-pointer shadow"
                >
                  {t.closeBtn}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
