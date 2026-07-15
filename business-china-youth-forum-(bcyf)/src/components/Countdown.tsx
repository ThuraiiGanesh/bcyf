/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CountdownProps {
  language: Language;
}

export default function Countdown({ language }: CountdownProps) {
  const t = TRANSLATIONS[language];
  
  // Set target date: September 12, 2026, 09:00:00 (Singapore SGT, UTC+8)
  const targetDate = React.useMemo(() => new Date('2026-09-12T09:00:00+08:00'), []);

  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false
  });

  React.useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft(prev => ({ ...prev, isExpired: true }));
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds, isExpired: false });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Visual helper for single card
  const TimeBox = ({ value, label }: { value: number; label: string }) => {
    const formattedValue = String(value).padStart(2, '0');
    
    return (
      <div className="flex flex-col items-center">
        {/* Tactile white box with rich shadow */}
        <div className="relative w-20 h-24 sm:w-28 sm:h-32 rounded-2xl flex items-center justify-center overflow-hidden border border-slate-200/80 bg-white shadow-xl shadow-slate-200/50">
          {/* Subtle warm overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/5 to-blue-100/10 pointer-events-none" />
          
          {/* Subtle splitter line */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-slate-100 z-10" />

          {/* Simple, stable, and highly legible digits without distracting sliding/flickering */}
          <span className="font-mono text-3xl sm:text-5xl lg:text-6xl font-bold text-brand-navy tracking-tight z-20">
            {formattedValue}
          </span>
        </div>
        <span className="mt-3 text-[10px] sm:text-xs font-mono tracking-widest text-brand-blue font-bold uppercase">
          {label}
        </span>
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col items-center select-none">
      {timeLeft.isExpired ? (
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="px-8 py-4 rounded-2xl bg-blue-50 border border-blue-100 text-brand-blue font-display font-bold text-lg sm:text-xl text-center shadow-md"
        >
          🚀 {t.countdownFinished}
        </motion.div>
      ) : (
        <div className="flex items-center space-x-3 sm:space-x-5 md:space-x-6">
          <TimeBox value={timeLeft.days} label={t.countdownDays} />
          <div className="text-3xl font-bold text-slate-300 self-start mt-8 hidden sm:block">:</div>
          <TimeBox value={timeLeft.hours} label={t.countdownHours} />
          <div className="text-3xl font-bold text-slate-300 self-start mt-8 hidden sm:block">:</div>
          <TimeBox value={timeLeft.minutes} label={t.countdownMinutes} />
          <div className="text-3xl font-bold text-slate-300 self-start mt-8 hidden sm:block">:</div>
          <TimeBox value={timeLeft.seconds} label={t.countdownSeconds} />
        </div>
      )}

      {/* Embedded Location and Date Cards in Light Panel */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-10 max-w-2xl w-full grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        <div className="flex items-center space-x-3 p-4 rounded-xl border border-slate-200 bg-white shadow-md">
          <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-100 text-brand-blue">
            <Calendar className="w-5 h-5" />
          </div>
          <div className="text-left">
            <p className="text-[10px] uppercase font-mono tracking-wider text-slate-500 font-bold">Date & Time</p>
            <p className="text-xs sm:text-sm font-bold text-brand-navy font-display mt-0.5">{t.heroDate}</p>
          </div>
        </div>

        <div className="flex items-center space-x-3 p-4 rounded-xl border border-slate-200 bg-white shadow-md">
          <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-100 text-brand-blue">
            <MapPin className="w-5 h-5 animate-bounce" />
          </div>
          <div className="text-left">
            <p className="text-[10px] uppercase font-mono tracking-wider text-slate-500 font-bold">Conference Venue</p>
            <p className="text-xs sm:text-sm font-bold text-brand-navy font-display mt-0.5 leading-snug">{t.heroVenue}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
