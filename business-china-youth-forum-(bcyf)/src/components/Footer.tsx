/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, PARTNERS } from '../data';
import { Compass, Mail, Phone, MapPin, Send, Check, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

interface FooterProps {
  language: Language;
}

export default function Footer({ language }: FooterProps) {
  const t = TRANSLATIONS[language];
  
  const [newsletterEmail, setNewsletterEmail] = React.useState('');
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    // Simulate subscription
    setSubscribed(true);
    setNewsletterEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy border-t border-slate-800 relative pt-20 pb-10 text-slate-300">
      {/* Top section: Partners Board */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 border-b border-slate-800 pb-16">
        <div className="text-center mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 bg-blue-950/60 border border-blue-900/50 px-3 py-1.5 rounded-full">
            {language === 'en' ? 'Institutional Support' : '组织与机构支持'}
          </span>
          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight mt-3">
            {t.partnersTitle}
          </h3>
          <p className="text-xs text-slate-400 mt-2 max-w-lg mx-auto font-medium leading-normal">
            {t.partnersSubtitle}
          </p>
        </div>

        {/* Sponsor Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-stretch justify-center">
          {PARTNERS.map((partner) => (
            <a
              key={partner.id}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-brand-blue/40 hover:bg-slate-900 flex flex-col justify-between text-center transition-all duration-300 select-none cursor-pointer"
            >
              <div className="text-[10px] font-mono text-slate-500 font-bold uppercase mb-3">
                {language === 'en' ? partner.category : partner.categoryZh}
              </div>
              <div className="font-display font-extrabold text-sm text-slate-300 hover:text-white transition-colors">
                {partner.logoText}
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Middle section: Brand & Newsletter & Contact info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
        
        {/* Brand narrative */}
        <div className="md:col-span-5 space-y-5 text-left">
          <div className="flex items-center group py-1">
            <Logo light={true} className="h-10 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-[1.02]" />
          </div>

          <p className="text-xs text-slate-400 font-medium leading-relaxed max-w-sm">
            {t.footerSlogan}
          </p>

          <div className="space-y-2 text-xs text-slate-400 pt-2 font-medium">
            <div className="flex items-center space-x-2.5">
              <MapPin className="w-4.5 h-4.5 text-brand-blue shrink-0" />
              <span>滨海湾金沙会展中心，新加坡 (Sands Expo, Singapore)</span>
            </div>
            <div className="flex items-center space-x-2.5">
              <Mail className="w-4.5 h-4.5 text-brand-blue shrink-0" />
              <a href="mailto:support@businesschina.org.sg" className="hover:text-brand-blue transition-colors">support@businesschina.org.sg</a>
            </div>
            <div className="flex items-center space-x-2.5">
              <Phone className="w-4.5 h-4.5 text-brand-blue shrink-0" />
              <span>+65 6842 1234</span>
            </div>
          </div>
        </div>

        {/* Quick Links / Resources */}
        <div className="md:col-span-3 space-y-4 text-xs font-medium text-left">
          <h4 className="font-display font-extrabold text-sm text-white tracking-tight">
            {language === 'en' ? 'Important Portals' : '重要参会服务'}
          </h4>
          <ul className="space-y-2.5 text-slate-400">
            <li>
              <a href="https://www.businesschina.org.sg" target="_blank" rel="noreferrer" className="hover:text-brand-blue transition-colors">通商中国官网 (Business China)</a>
            </li>
            <li>
              <a href="https://fcgf2025.businesschina.org.sg" target="_blank" rel="noreferrer" className="hover:text-brand-blue transition-colors">慧眼中国全球论坛 (FCGF)</a>
            </li>
            <li>
              <a href="#about" className="hover:text-brand-blue transition-colors">{t.navAbout}</a>
            </li>
            <li>
              <a href="#schedule" className="hover:text-brand-blue transition-colors">{t.navSchedule}</a>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="md:col-span-4 space-y-4 text-left">
          <h4 className="font-display font-extrabold text-sm text-white tracking-tight">
            {language === 'en' ? 'Stay Briefed' : '订阅最新会务快报'}
          </h4>
          <p className="text-xs text-slate-400 font-medium leading-relaxed">
            {language === 'en'
              ? 'Receive prompt updates about newly confirmed speakers, breakout roundtable workshops, and logistics updates.'
              : '第一时间获取最新确认的主旨演讲嘉宾、闭门圆桌工坊以及交通接驳快报。'}
          </p>

          <form onSubmit={handleSubscribe} className="relative w-full">
            <input
              type="email"
              required
              id="newsletter-email-input"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="example@bcyf.org"
              className="w-full px-4 py-3 pr-10 rounded-xl text-xs bg-slate-900 border border-slate-800 text-slate-200 focus:outline-none focus:border-brand-blue/50 transition-colors"
            />
            <button
              type="submit"
              id="newsletter-submit-btn"
              className="absolute right-1 top-1 p-2 rounded-lg bg-brand-blue hover:bg-blue-700 text-white transition-colors cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          <AnimatePresence>
            {subscribed && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-[11px] font-mono font-bold text-emerald-400 flex items-center space-x-1.5"
              >
                <Check className="w-3.5 h-3.5" />
                <span>✓ Successfully added to delegates ledger!</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Bottom section: copyright and Scroll to Top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[10px] text-slate-500 text-center sm:text-left font-medium">
          © 2026 Business China. {t.footerRights}
        </p>
        
        <button
          onClick={scrollToTop}
          id="scroll-to-top-btn"
          className="p-2.5 rounded-xl border border-slate-800 bg-slate-900 text-slate-400 hover:text-brand-blue hover:bg-slate-950 transition-all flex items-center justify-center cursor-pointer shadow"
          title="Scroll to Top"
        >
          <ArrowUp className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>
    </footer>
  );
}
