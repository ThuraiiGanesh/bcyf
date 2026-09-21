/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Language } from '../types';
import { TRANSLATIONS, INTERIM_REGISTRATION_URL, REGISTRATION_QR_URL } from '../data';
import { X, Calendar, MapPin, Clock, ExternalLink, QrCode } from 'lucide-react';
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
  const isEn = language === 'en';
  const t = TRANSLATIONS[language];

  // SWAP NOTE: Replace INTERIM_REGISTRATION_URL when the official EO landing page is available
  const handleOpenForm = () => {
    window.open(INTERIM_REGISTRATION_URL, '_blank', 'noopener,noreferrer');
  };

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
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[90vh] flex flex-col"
          >
            {/* Top decorative header */}
            <div className="bg-brand-navy text-white px-6 py-4 sm:py-5 flex items-center justify-between shrink-0">
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
                className="text-slate-300 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/10 cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-7 space-y-5 overflow-y-auto">
              
              {/* Event quick recap (Corrected End Time: 5:00pm) */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 space-y-2 text-xs text-slate-600">
                <div className="flex items-center space-x-2.5">
                  <Calendar className="w-4 h-4 text-brand-blue shrink-0" />
                  <span className="font-medium text-slate-700">
                    {isEn ? '24 October 2026 (Saturday)' : '2026年10月24日（星期六）'}
                  </span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Clock className="w-4 h-4 text-brand-blue shrink-0" />
                  <span className="font-semibold text-brand-navy">
                    {/* Event end time correction: 5:00pm NOT 6:00pm */}
                    {isEn ? '11:00am – 5:00pm' : '上午11:00 – 下午5:00'}
                  </span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <MapPin className="w-4 h-4 text-brand-blue shrink-0" />
                  <span>Temasek Polytechnic Auditorium 1, Singapore</span>
                </div>
              </div>

              {/* Interim Registration Action Box */}
              <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white border border-blue-200/90 p-1 flex items-center justify-center shrink-0 shadow-xs">
                    <img
                      src="/gmail-icon.png"
                      alt="Email Sign-Up"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-blue bg-white border border-blue-200 px-2 py-0.5 rounded-full inline-block">
                      {t.interimFormTag}
                    </span>
                    <h4 className="text-sm font-display font-bold text-brand-navy">
                      {isEn ? 'Priority Mailing List & Registration' : '优先通讯录与意向登记'}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {t.registerModalPendingDesc}
                    </p>
                  </div>
                </div>

                {/* Primary CTA button pointing to Google Form */}
                <button
                  type="button"
                  id="interim-register-btn"
                  onClick={handleOpenForm}
                  className="w-full py-3 px-4 bg-brand-blue hover:bg-brand-navy text-white text-xs sm:text-sm font-bold font-display rounded-xl transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
                >
                  <span>{t.openInterimFormBtn}</span>
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>

                {/* QR Code Section */}
                <div className="pt-3 border-t border-blue-200/60 flex flex-col sm:flex-row items-center gap-4">
                  <div className="bg-white p-2 rounded-xl border border-blue-200/80 shadow-xs shrink-0">
                    <img
                      src={REGISTRATION_QR_URL}
                      alt="BCYF 2026 Registration QR Code"
                      className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
                    />
                  </div>
                  <div className="text-center sm:text-left space-y-1">
                    <div className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-navy">
                      <QrCode className="w-3.5 h-3.5 text-brand-blue" />
                      <span>{isEn ? 'Mobile Registration' : '手机扫码登记'}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-snug">
                      {t.scanQrNote}
                    </p>
                    <a
                      href={INTERIM_REGISTRATION_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-mono text-brand-blue hover:underline break-all block pt-0.5"
                    >
                      {INTERIM_REGISTRATION_URL}
                    </a>
                  </div>
                </div>
              </div>

              {/* Close button */}
              <div className="pt-1">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold font-display rounded-xl transition-colors cursor-pointer"
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
