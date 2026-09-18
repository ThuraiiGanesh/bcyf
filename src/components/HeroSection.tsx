import { motion } from 'motion/react';
import { Language } from '../types';
import { EVENT_BASICS_2026 } from '../data';
import { Calendar, MapPin, Clock } from 'lucide-react';

interface HeroSectionProps {
  language: Language;
}

export default function HeroSection({ language }: HeroSectionProps) {
  const isEn = language === 'en';

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#F0F5FC]/90 via-[#F8FAFC] to-white border-b border-slate-200/60"
    >
      {/* Subtle architectural grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,45,88,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,45,88,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-10">
        
        {/* Confirmed Official Hero Banner Asset */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-blue-200/70 shadow-lg shadow-blue-900/5 bg-white p-2 sm:p-3 transition-transform hover:shadow-xl duration-300">
            <img
              src="/BCYF_2026_Email_Banner_.png"
              alt="Business China Youth Forum 2026 - Riding the New Wave: Future of Work Reimagined"
              className="w-full h-auto object-cover rounded-xl sm:rounded-2xl"
            />
          </div>
        </motion.div>

        {/* Confirmed Theme Titles & Date/Venue Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-4xl mx-auto space-y-6 text-center"
        >
          {/* Pill Tag */}
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200/80 px-4 py-1.5 rounded-full">
            <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-blue">
              {isEn ? '2026 Flagship Youth Edition' : '2026 旗舰青年论坛'}
            </span>
          </div>

          {/* Confirmed Themes */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-brand-navy tracking-tight leading-[1.15]">
              {EVENT_BASICS_2026.themeEn}
            </h1>
            <p className="text-2xl sm:text-3xl font-display font-bold text-slate-600">
              {EVENT_BASICS_2026.themeZh}
            </p>
          </div>

          {/* Confirmed Date, Time & Venue Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto text-left pt-2">
            <div className="bg-white/90 border border-slate-200/80 rounded-2xl p-5 shadow-sm flex items-start space-x-3.5">
              <Calendar className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider block">
                  {isEn ? 'Date & Time' : '日期与时间'}
                </span>
                <span className="text-sm sm:text-base font-semibold text-brand-navy mt-0.5 block">
                  {isEn ? EVENT_BASICS_2026.dateEn : EVENT_BASICS_2026.dateZh}
                </span>
              </div>
            </div>

            <div className="bg-white/90 border border-slate-200/80 rounded-2xl p-5 shadow-sm flex items-start space-x-3.5">
              <MapPin className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider block">
                  {isEn ? 'Venue' : '举办地点'}
                </span>
                <span className="text-sm sm:text-base font-semibold text-brand-navy mt-0.5 block leading-snug">
                  {isEn ? (
                    <>
                      <span>Temasek Polytechnic Auditorium 1,</span>
                      <span className="block">21 Tampines Ave 1, Singapore 529757</span>
                    </>
                  ) : (
                    <>
                      <span>淡马锡理工学院第一大礼堂，</span>
                      <span className="block">新加坡淡马锡大道21号，邮编529757</span>
                    </>
                  )}
                </span>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
