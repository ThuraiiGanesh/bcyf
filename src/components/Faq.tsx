/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, FAQS } from '../data';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FaqProps {
  language: Language;
}

export default function Faq({ language }: FaqProps) {
  const t = TRANSLATIONS[language];
  
  const [activeCategory, setActiveCategory] = React.useState<string>('all');
  const [openFaqId, setOpenFaqId] = React.useState<string | null>(null);

  const categories = [
    { id: 'all', label: t.faqCatAll },
    { id: 'general', label: t.faqCatGeneral },
    { id: 'registration', label: t.faqCatReg },
    { id: 'venue', label: t.faqCatVenue }
  ];

  const filteredFaqs = FAQS.filter(
    (faq) => activeCategory === 'all' || faq.category === activeCategory
  );

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-24 border-b border-slate-200/50 bg-[#FDFDFB] overflow-hidden">
      {/* Background radial soft light */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-blue-100/10 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Head */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-blue bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full">
            {language === 'en' ? 'Help Desk' : '会务帮助台'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-navy tracking-tight mt-4">
            {t.faqTitle}
          </h2>
          <p className="text-sm text-slate-500 mt-2 font-medium">
            {t.faqSubtitle}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`faq-cat-tab-${cat.id}`}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setOpenFaqId(null);
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold font-display transition-all border cursor-pointer ${
                  isActive
                    ? 'bg-brand-navy text-white border-brand-navy shadow-md shadow-slate-900/10'
                    : 'bg-white text-slate-600 border-slate-200 hover:text-brand-navy hover:bg-slate-50'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openFaqId === faq.id;
              
              return (
                <motion.div
                  key={faq.id}
                  id={`faq-accordion-item-${faq.id}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className={`rounded-2xl border transition-all duration-300 text-left ${
                    isOpen
                      ? 'border-blue-200 bg-blue-50/20 shadow-sm'
                      : 'border-slate-200 bg-white hover:border-blue-100 hover:bg-blue-50/5'
                  }`}
                >
                  {/* Summary trigger */}
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 select-none cursor-pointer"
                  >
                    <span className={`text-sm sm:text-base font-display font-extrabold transition-colors duration-200 ${
                      isOpen ? 'text-brand-blue' : 'text-brand-navy'
                    }`}>
                      {language === 'en' ? faq.question : faq.questionZh}
                    </span>
                    <div className={`p-1.5 rounded-lg border transition-colors ${
                      isOpen ? 'bg-blue-100 border-blue-200 text-brand-blue' : 'bg-slate-50 border-slate-200 text-slate-400'
                    }`}>
                      {isOpen ? <ChevronUp className="w-4 h-4 stroke-[2.5]" /> : <ChevronDown className="w-4 h-4 stroke-[2.5]" />}
                    </div>
                  </button>

                  {/* Expandable answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed border-t border-slate-100 pt-4">
                          {language === 'en' ? faq.answer : faq.answerZh}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
