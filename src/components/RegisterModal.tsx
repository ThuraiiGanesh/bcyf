/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data';
import { X, Sparkles, User, Mail, Building, Briefcase, Printer, Check, Ticket, QrCode } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface RegisterModalProps {
  language: Language;
  isOpen: boolean;
  onClose: () => void;
}

interface RegistrationData {
  name: string;
  email: string;
  organization: string;
  designation: string;
  diet: string;
  ticketId: string;
  seatCode: string;
  registeredAt: string;
}

export default function RegisterModal({
  language,
  isOpen,
  onClose
}: RegisterModalProps) {
  const t = TRANSLATIONS[language];

  // Check if user is already registered on component load
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    organization: '',
    designation: '',
    diet: 'None'
  });

  const [registration, setRegistration] = React.useState<RegistrationData | null>(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const savedReg = localStorage.getItem('bcyf_registration');
    if (savedReg) {
      try {
        setRegistration(JSON.parse(savedReg));
      } catch (e) {
        console.error("Failed to load registration data", e);
      }
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.organization) return;

    setLoading(true);

    setTimeout(() => {
      const ticketId = 'BCYF-2026-' + Math.floor(100000 + Math.random() * 900000);
      const row = String.fromCharCode(65 + Math.floor(Math.random() * 10)); // Row A-J
      const seatNum = Math.floor(1 + Math.random() * 30);
      const seatCode = `BALLROOM-L4-${row}${seatNum}`;
      
      const newReg: RegistrationData = {
        name: formData.name,
        email: formData.email,
        organization: formData.organization,
        designation: formData.designation || 'Special Delegate',
        diet: formData.diet,
        ticketId,
        seatCode,
        registeredAt: new Date().toLocaleDateString(language === 'en' ? 'en-US' : 'zh-CN')
      };

      localStorage.setItem('bcyf_registration', JSON.stringify(newReg));
      setRegistration(newReg);
      setLoading(false);
    }, 1500);
  };

  const handleCancelRegistration = () => {
    localStorage.removeItem('bcyf_registration');
    setRegistration(null);
    setFormData({
      name: '',
      email: '',
      organization: '',
      designation: '',
      diet: 'None'
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Modal backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
          />

          {/* Modal box */}
          <motion.div
            id="register-modal-content"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative max-w-lg w-full rounded-3xl border border-slate-200 bg-white shadow-2xl overflow-hidden z-10 p-6 sm:p-8 text-left"
          >
            {/* Ambient glows */}
            <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-blue-50/50 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-blue-100/30 blur-[80px] pointer-events-none" />

            {/* Close Button */}
            <button
              id="close-register-modal"
              onClick={onClose}
              className="absolute top-5 right-5 p-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-brand-navy transition-colors cursor-pointer"
            >
              <X className="w-4.5 h-4.5" />
            </button>

            {!registration ? (
              /* Registration Form Stage */
              <div className="space-y-6 text-left">
                <div>
                  <div className="flex items-center space-x-2 text-brand-blue">
                    <Ticket className="w-5 h-5 text-brand-blue" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest">
                      {language === 'en' ? 'Admission Gateway' : '席位预订通道'}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-brand-navy tracking-tight mt-1">
                    {t.registerTitle}
                  </h3>
                  <p className="text-xs text-slate-500 leading-normal mt-1 font-medium">
                    {t.registerFormSubtitle}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name field */}
                  <div className="space-y-1">
                    <label htmlFor="reg-name" className="block text-[10px] font-mono font-bold uppercase text-slate-500">
                      {t.registerFormName} *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="reg-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={language === 'en' ? 'e.g. Alexis Tan' : '例如: 陈明伟'}
                        className="w-full px-4 py-2.5 pl-10 rounded-xl text-xs bg-white border border-slate-200 text-slate-800 focus:outline-none focus:border-brand-blue/50 transition-colors shadow-sm"
                      />
                      <User className="absolute left-3.5 top-3 w-4.5 h-4.5 text-slate-400" />
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="space-y-1">
                    <label htmlFor="reg-email" className="block text-[10px] font-mono font-bold uppercase text-slate-500">
                      {t.registerFormEmail} *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="reg-email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="example@bcyf.org"
                        className="w-full px-4 py-2.5 pl-10 rounded-xl text-xs bg-white border border-slate-200 text-slate-800 focus:outline-none focus:border-brand-blue/50 transition-colors shadow-sm"
                      />
                      <Mail className="absolute left-3.5 top-3 w-4.5 h-4.5 text-slate-400" />
                    </div>
                  </div>

                  {/* Org/Univ */}
                  <div className="space-y-1">
                    <label htmlFor="reg-org" className="block text-[10px] font-mono font-bold uppercase text-slate-500">
                      {t.registerFormOrg} *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="reg-org"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder={language === 'en' ? 'e.g. NUS / Goldman Sachs' : '就职公司或就读高校名称'}
                        className="w-full px-4 py-2.5 pl-10 rounded-xl text-xs bg-white border border-slate-200 text-slate-800 focus:outline-none focus:border-brand-blue/50 transition-colors shadow-sm"
                      />
                      <Building className="absolute left-3.5 top-3 w-4.5 h-4.5 text-slate-400" />
                    </div>
                  </div>

                  {/* Designation */}
                  <div className="space-y-1">
                    <label htmlFor="reg-major" className="block text-[10px] font-mono font-bold uppercase text-slate-500">
                      {t.registerFormDesignation}
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="reg-major"
                        value={formData.designation}
                        onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                        placeholder={language === 'en' ? 'e.g. AI Researcher / MBA Student' : '职务职位 / 专业'}
                        className="w-full px-4 py-2.5 pl-10 rounded-xl text-xs bg-white border border-slate-200 text-slate-800 focus:outline-none focus:border-brand-blue/50 transition-colors shadow-sm"
                      />
                      <Briefcase className="absolute left-3.5 top-3 w-4.5 h-4.5 text-slate-400" />
                    </div>
                  </div>

                  {/* Diet selection */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono font-bold uppercase text-slate-500">
                      {t.registerFormDiet}
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'None', label: t.registerFormDietNone },
                        { id: 'Halal/Veg', label: t.registerFormDietVeg },
                        { id: 'Gluten/Vegan', label: t.registerFormDietGluten }
                      ].map((dietOpt) => (
                        <button
                          key={dietOpt.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, diet: dietOpt.id })}
                          className={`py-2 rounded-xl text-[10px] font-bold border transition-colors cursor-pointer ${
                            formData.diet === dietOpt.id
                              ? 'bg-blue-50 text-brand-blue border-blue-200'
                              : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'
                          }`}
                        >
                          {dietOpt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-navy hover:scale-[1.01] active:scale-[0.99] font-bold text-sm text-white shadow-lg shadow-blue-500/10 transition-all font-display flex items-center justify-center space-x-2 mt-4 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <div className="w-4.5 h-4.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Compiling Pass Credentials...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 text-blue-200 animate-pulse" />
                        <span>{t.registerFormSubmit}</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              /* Success Stage: Dynamic Ticket Pass */
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-2 animate-bounce">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <h3 className="text-lg font-display font-extrabold text-brand-navy tracking-tight">
                    {t.registerSuccessTitle}
                  </h3>
                  <p className="text-[11px] text-slate-500 max-w-sm mx-auto font-medium mt-1 leading-relaxed">
                    {t.registerSuccessDesc}
                  </p>
                </div>

                {/* Printable Digital Pass */}
                <div className="p-5 sm:p-6 rounded-2xl border border-slate-300 bg-white/90 relative shadow-lg font-sans overflow-hidden text-left">
                  
                  {/* Decorative ticket cutouts */}
                  <div className="absolute top-1/2 -left-3.5 w-7 h-7 rounded-full bg-[#F0F5FC] border-r border-slate-300 -translate-y-1/2 z-10" />
                  <div className="absolute top-1/2 -right-3.5 w-7 h-7 rounded-full bg-[#F0F5FC] border-l border-slate-300 -translate-y-1/2 z-10" />

                  {/* Top segment: Header */}
                  <div className="flex justify-between items-start border-b border-dashed border-slate-200 pb-4">
                    <div className="space-y-1">
                      <p className="text-[9px] uppercase font-mono tracking-widest text-brand-blue font-bold">
                        Business China BCYF
                      </p>
                      <h4 className="text-sm font-display font-extrabold text-brand-navy leading-tight">
                        DELEGATE PASS
                      </h4>
                    </div>
                    <span className="text-[8px] font-mono text-brand-blue border border-blue-200 bg-blue-50 px-2 py-0.5 rounded font-bold shadow-sm">
                      VIP COMPLIMENTARY
                    </span>
                  </div>

                  {/* Middle segment: Info & QR */}
                  <div className="grid grid-cols-12 gap-4 py-5 border-b border-dashed border-slate-200 relative">
                    <div className="col-span-8 space-y-3.5">
                      {/* Name */}
                      <div>
                        <p className="text-[8px] uppercase font-mono tracking-wider text-slate-400 font-bold">Attendee Name</p>
                        <p className="text-sm font-display font-extrabold text-brand-navy tracking-tight mt-0.5">{registration.name}</p>
                      </div>

                      {/* Org */}
                      <div>
                        <p className="text-[8px] uppercase font-mono tracking-wider text-slate-400 font-bold">Affiliation</p>
                        <p className="text-xs font-bold text-slate-800 mt-0.5">{registration.organization}</p>
                        <p className="text-[10px] text-slate-500 font-medium">{registration.designation}</p>
                      </div>

                      {/* Row/Seat */}
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <p className="text-[8px] uppercase font-mono tracking-wider text-slate-400 font-bold">Seat allocation</p>
                          <p className="text-[11px] font-mono font-bold text-brand-blue mt-0.5">{registration.seatCode}</p>
                        </div>
                        <div>
                          <p className="text-[8px] uppercase font-mono tracking-wider text-slate-400 font-bold">Issue Date</p>
                          <p className="text-[10px] font-mono text-slate-500 font-medium mt-0.5">{registration.registeredAt}</p>
                        </div>
                      </div>
                    </div>

                    {/* QR Code Graphic Column */}
                    <div className="col-span-4 flex flex-col items-center justify-center border-l border-slate-100 pl-4">
                      <div className="p-2 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm relative group">
                        <QrCode className="w-16 h-16 text-slate-900" />
                        <div className="absolute inset-0 border border-blue-200 rounded-xl opacity-20 group-hover:scale-105 transition-transform" />
                      </div>
                      <span className="text-[8px] font-mono text-slate-400 tracking-tight mt-2 text-center select-all font-semibold">
                        {registration.ticketId}
                      </span>
                    </div>
                  </div>

                  {/* Bottom segment: Footer notice */}
                  <div className="pt-4 flex justify-between items-center text-[8px] font-mono text-slate-500 font-bold">
                    <span>Sands Expo Convention • Level 4</span>
                    <span className="text-brand-blue uppercase tracking-wider">Admit 1 Guest</span>
                  </div>

                </div>

                {/* Print and cancel controls */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button
                    onClick={handlePrint}
                    className="py-2.5 rounded-xl border border-slate-200 bg-white text-slate-600 hover:text-brand-navy hover:bg-slate-50 transition-colors text-xs font-bold font-display flex items-center justify-center space-x-2 cursor-pointer shadow-sm"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Print Badge</span>
                  </button>

                  <button
                    onClick={onClose}
                    className="py-2.5 rounded-xl bg-brand-navy hover:bg-slate-800 text-white transition-colors text-xs font-bold font-display text-center cursor-pointer shadow-sm"
                  >
                    {t.registerCloseBtn}
                  </button>
                </div>

                <div className="text-center">
                  <button
                    onClick={handleCancelRegistration}
                    className="text-[10px] font-mono text-rose-500 hover:text-rose-600 transition-colors underline cursor-pointer font-bold"
                  >
                    {language === 'en' ? 'Cancel & Reset Ticket' : '取消注册并释放门票'}
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
