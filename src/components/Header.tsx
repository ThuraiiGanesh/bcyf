/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Globe, Menu, X, Compass } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
  onOpenRegister: () => void;
}

export default function Header({
  language,
  setLanguage,
  activeSection,
  setActiveSection,
  onOpenRegister
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const t = TRANSLATIONS[language];

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'agenda', label: language === 'en' ? 'Agenda' : '议程' },
    { id: 'about', label: language === 'en' ? 'About Us' : '关于我们' },
    { id: 'watch', label: language === 'en' ? 'Watch' : '回顾' },
    { id: 'youth-forum', label: language === 'en' ? 'Youth Forum' : '青年论坛', href: 'https://www.businesschina.org.sg' },
    { id: 'fcgf', label: 'FCGF', href: 'https://fcgf2025.businesschina.org.sg' }
  ];

  const handleNavClick = (item: { id: string; href?: string }) => {
    if (item.href && item.href.startsWith('http')) {
      window.open(item.href, '_blank', 'noopener,noreferrer');
      setMobileMenuOpen(false);
      return;
    }
    setActiveSection(item.id);
    setMobileMenuOpen(false);
    const element = document.getElementById(item.id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-panel py-2 shadow-md border-b border-blue-200/40'
          : 'bg-[#F0F5FC]/95 backdrop-blur-md py-3.5 border-b border-blue-100/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Real Brand Logo Exact SVG Replication */}
          <div 
            className="flex items-center cursor-pointer group py-0.5"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Logo className="h-14 sm:h-16 w-auto transition-transform duration-300 group-hover:scale-[1.02]" />
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => handleNavClick(item)}
                  className={`px-3 py-2 rounded-lg text-xs lg:text-sm font-semibold font-display transition-all duration-200 relative cursor-pointer ${
                    isActive
                      ? 'text-brand-blue'
                      : 'text-slate-600 hover:text-brand-navy hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-brand-blue rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Utility Tools (Bilingual & Register) */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-100 border border-slate-200 p-0.5 rounded-lg shadow-sm">
              <button
                id="lang-btn-en"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 text-[10px] font-mono font-bold rounded-md transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-brand-navy text-white shadow-sm'
                    : 'text-slate-500 hover:text-brand-navy'
                }`}
              >
                EN
              </button>
              <button
                id="lang-btn-zh"
                onClick={() => setLanguage('zh')}
                className={`px-2.5 py-1 text-[10px] font-mono font-bold rounded-md transition-all cursor-pointer ${
                  language === 'zh'
                    ? 'bg-brand-navy text-white shadow-sm'
                    : 'text-slate-500 hover:text-brand-navy'
                }`}
              >
                中文
              </button>
            </div>

            {/* CTA Ticket Button */}
            <button
              id="cta-register-header"
              onClick={onOpenRegister}
              className="relative overflow-hidden group px-4 py-2 rounded-xl bg-brand-blue text-white text-xs font-bold font-display shadow hover:shadow-blue-500/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              <span className="relative z-10 flex items-center space-x-1">
                <span>{t.registerBtn}</span>
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-brand-navy transition-transform duration-500 ease-out" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2.5">
            {/* Language switch on mobile directly */}
            <button
              id="mobile-lang-toggle"
              onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
              className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:text-brand-navy flex items-center space-x-1 text-xs font-mono font-bold bg-white shadow-sm"
            >
              <Globe className="w-3.5 h-3.5 text-brand-blue" />
              <span>{language === 'en' ? 'ZH' : 'EN'}</span>
            </button>

            <button
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:text-brand-navy bg-white shadow-sm"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FAF9F5] border-t border-slate-200 shadow-xl overflow-hidden mt-2.5"
          >
            <div className="px-4 py-4 space-y-2 flex flex-col">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-item-${item.id}`}
                    onClick={() => handleNavClick(item)}
                    className={`w-full text-left px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold font-display transition-all ${
                    isActive
                      ? 'bg-blue-50 text-brand-blue border border-blue-100'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            <div className="pt-3 border-t border-slate-100">
              <button
                id="mobile-cta-register"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegister();
                }}
                className="w-full py-3 rounded-xl bg-brand-blue text-white font-bold text-center text-sm shadow font-display"
              >
                  {t.registerBtn}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
