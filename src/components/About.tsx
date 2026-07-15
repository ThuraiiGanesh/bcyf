/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data';
import { Users, Presentation, Layers, Globe2, ArrowRight } from 'lucide-react';
import { motion, useInView } from 'motion/react';

interface AboutProps {
  language: Language;
  onExploreSchedule: () => void;
}

// Simple CountUp helper component
function StatCount({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function About({ language, onExploreSchedule }: AboutProps) {
  const t = TRANSLATIONS[language];

  const stats = [
    {
      id: 'stat-delegates',
      label: t.statsRegistrants,
      targetValue: 850,
      suffix: '+',
      icon: Users,
      colorClass: 'text-brand-blue bg-blue-50/50 border-blue-100/60'
    },
    {
      id: 'stat-speakers',
      label: t.statsSpeakers,
      targetValue: 24,
      suffix: '',
      icon: Presentation,
      colorClass: 'text-blue-500 bg-blue-50 border-blue-100'
    },
    {
      id: 'stat-panels',
      label: t.statsPanels,
      targetValue: 8,
      suffix: '',
      icon: Layers,
      colorClass: 'text-indigo-500 bg-indigo-50 border-indigo-100'
    },
    {
      id: 'stat-countries',
      label: t.statsCountries,
      targetValue: 12,
      suffix: '+',
      icon: Globe2,
      colorClass: 'text-emerald-500 bg-emerald-50 border-emerald-100'
    }
  ];

  return (
    <section id="about" className="relative py-24 border-b border-blue-200/40 bg-white/40 backdrop-blur-md overflow-hidden">
      {/* Background soft circular glow */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 rounded-full bg-blue-50/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 rounded-full bg-blue-50/20 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Core Narrative */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center space-y-6"
        >
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-blue bg-blue-50/50 border border-blue-100/60 px-3 py-1.5 rounded-full w-max mx-auto inline-block">
              {language === 'en' ? 'Bicultural Catalyst' : '双语双文化催化剂'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-brand-navy tracking-tight mt-6 leading-tight">
              {t.aboutTitle}
            </h2>
            <p className="text-brand-blue font-display font-bold text-lg sm:text-xl mt-3 leading-snug">
              {t.aboutSubtitle}
            </p>
          </div>

          <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed font-sans font-medium max-w-3xl">
            <p>{t.aboutDesc1}</p>
            <p>{t.aboutDesc2}</p>
          </div>

          <div className="pt-4">
            <button
              id="about-explore-btn"
              onClick={onExploreSchedule}
              className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-brand-navy hover:text-brand-blue font-display group transition-colors duration-200 cursor-pointer"
            >
              <span>{t.exploreBtn}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
