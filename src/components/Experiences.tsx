/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building, 
  Briefcase, 
  Compass, 
  Award, 
  CheckCircle2, 
  Instagram, 
  Users, 
  Flame, 
  Vote, 
  MessageCircle, 
  TrendingUp, 
  FileText,
  BookmarkCheck,
  ChevronRight
} from 'lucide-react';

interface ExperiencesProps {
  language: Language;
}

export default function Experiences({ language }: ExperiencesProps) {
  const t = TRANSLATIONS[language];
  const [activeTab, setActiveTab] = React.useState<'gallery' | 'debate' | 'mou' | 'passport'>('gallery');
  
  // Debate interaction state
  const [debateVoted, setDebateVoted] = React.useState<boolean>(false);
  const [debateChoice, setDebateChoice] = React.useState<'A' | 'B' | null>(null);
  const [votesA, setVotesA] = React.useState<number>(142);
  const [votesB, setVotesB] = React.useState<number>(118);

  // Passport progress state
  const [passportSteps, setPassportSteps] = React.useState<boolean[]>([false, false, false, false]);

  const handleDebateVote = (choice: 'A' | 'B') => {
    if (debateVoted) return;
    setDebateChoice(choice);
    setDebateVoted(true);
    if (choice === 'A') {
      setVotesA(prev => prev + 1);
    } else {
      setVotesB(prev => prev + 1);
    }
    // Also toggle the third step of passport
    const newSteps = [...passportSteps];
    newSteps[2] = true;
    setPassportSteps(newSteps);
  };

  const handleStepToggle = (index: number) => {
    const newSteps = [...passportSteps];
    newSteps[index] = !newSteps[index];
    setPassportSteps(newSteps);
  };

  const totalVotes = votesA + votesB;
  const pctA = Math.round((votesA / totalVotes) * 100);
  const pctB = 100 - pctA;

  const isPassportComplete = passportSteps.every(step => step === true);

  // Mock data for the Gallery Showcase cards
  const galleryItems = [
    {
      id: 'gal-1',
      type: 'spotlight',
      tag: t.expGallerySpot,
      title: language === 'en' ? 'EcoFlow Asia Decarbonization' : 'EcoFlow 亚洲脱碳先锋',
      desc: language === 'en' 
        ? 'A leading venture bridging Singaporean battery tech with manufacturing hubs in Guangzhou.' 
        : '将新加坡先进电池储能技术与广州高端智能制造基地进行有机对接的旗舰创新企业。',
      location: 'Booth A1, Exhibition Hall B',
      locationZh: 'B展览馆 A1 展台',
      action: language === 'en' ? 'View Live Prototype' : '了解活体原型演示',
      icon: Building,
      color: 'border-blue-200 bg-blue-50/50 text-brand-blue'
    },
    {
      id: 'gal-2',
      type: 'career',
      tag: t.expGalleryCareer,
      title: language === 'en' ? 'ASEAN-China Graduate Fellowships' : '东盟-中国精英研究生奖学金计划',
      desc: language === 'en' 
        ? 'Sponsorships and elite fast-track placements at venture funds across Shenzhen, Shanghai and Singapore.' 
        : '面向中新两地优秀青年的创投管培生快速通道，覆盖深圳、上海、新加坡三地顶尖基金。',
      location: 'Career Hub, Booth C5',
      locationZh: '职业导航站 C5 展台',
      action: language === 'en' ? 'Apply in Person' : '现场提交意向申请',
      icon: Briefcase,
      color: 'border-blue-200 bg-blue-50/50 text-blue-700'
    },
    {
      id: 'gal-3',
      type: 'explainer',
      tag: t.expGalleryExpl,
      title: language === 'en' ? 'Regional Comprehensive Economic Partnership' : 'RCEP区域全面经济伙伴关系协定解析',
      desc: language === 'en' 
        ? 'A visual, youth-friendly roadmap detailing how tariff reductions open cross-border entrepreneurial paths.' 
        : '面向青年群体的极简视觉路线图，详释关税减免如何开辟全新双向创业赛道。',
      location: 'Interactive Display Zone B',
      locationZh: 'B厅互动大屏幕区',
      action: language === 'en' ? 'Explore Infographics' : '浏览极简图解',
      icon: Compass,
      color: 'border-cyan-200 bg-cyan-50/50 text-cyan-700'
    }
  ];

  // Mock data for MOU signings
  const mouItems = [
    {
      title: language === 'en' ? 'Singapore-Shenzhen Youth Tech Alliance' : '新深青年科技创新战略大联盟',
      parties: language === 'en' 
        ? 'Business China Youth Group & Shenzhen Youth Federation' 
        : '通商中国青年组 与 深圳市青年联合会',
      desc: language === 'en' 
        ? 'An milestone pact establishing a physical co-working launchpad and annual exchange fellowship in the Greater Bay Area.' 
        : '里程碑式的战略协议，为两地青年在粤港澳大湾区设立共享联合创业空间及年度实地互访奖学金项目。',
      badge: 'MOU 1',
      date: '10:15 AM, main stage'
    },
    {
      title: language === 'en' ? 'Green Decarbonization Joint Lab Initiative' : '绿色低碳青年联合实验室倡议',
      parties: language === 'en' 
        ? 'Bilingual Ventures Asia & Guangzhou Nansha Science Park' 
        : '双语创投亚洲 与 广州南沙资讯科技园',
      desc: language === 'en' 
        ? 'Co-funding the development of 10 student-led carbon capture prototypes over the next two calendar years.' 
        : '在未来两个历年中，共同出资扶持并孵化10个由青年学生主导研发的低碳捕集原型方案。',
      badge: 'MOU 2',
      date: '11:45 AM, main stage'
    }
  ];

  return (
    <section id="interactive" className="relative py-24 bg-[#E1ECF7]/25 backdrop-blur-md border-b border-blue-200/40 overflow-hidden">
      {/* Background Soft Playful Shapes reminiscent of NYC style */}
      <div className="absolute top-10 left-[-5%] w-72 h-72 rounded-full bg-blue-50/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-[-5%] w-96 h-96 rounded-full bg-blue-100/30 blur-3xl pointer-events-none" />
      
      {/* Dynamic blob path background */}
      <svg className="absolute top-1/4 right-5 w-64 h-64 text-blue-200/10 pointer-events-none" viewBox="0 0 200 200" fill="currentColor">
        <path d="M40,-53C53,-47,65,-36,71,-22C77,-8,78,9,73,24C68,39,57,51,44,61C31,71,15,78,-1,80C-17,82,-35,78,-48,68C-62,59,-72,44,-77,28C-81,11,-81,-6,-75,-21C-69,-36,-57,-49,-44,-55C-31,-62,-15,-62,0,-62C15,-62,30,-62,40,-53Z" transform="translate(100 100)" />
      </svg>
      <svg className="absolute bottom-10 left-10 w-48 h-48 text-blue-200/20 pointer-events-none" viewBox="0 0 200 200" fill="currentColor">
        <path d="M48.1,-58.5C61.4,-48.5,70.5,-31.6,74.5,-13.4C78.4,4.8,77.2,24.4,68.4,40.1C59.7,55.8,43.3,67.6,25.2,72.4C7,77.3,-13,75.1,-29.9,67.1C-46.8,59.1,-60.7,45.2,-68.3,28.2C-75.9,11.3,-77.3,-8.6,-71.2,-25.6C-65.1,-42.6,-51.5,-56.7,-35.8,-65.4C-20,-74,-10,-77.2,4.8,-83C19.7,-88.8,34.8,-68.5,48.1,-58.5Z" transform="translate(100 100)" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-blue bg-blue-50 border border-blue-200/50 px-3 py-1.5 rounded-full inline-block">
            {language === 'en' ? 'Vibrant Youth Hub' : '青春活力展区'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-navy tracking-tight">
            {t.expTitle}
          </h2>
          <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
            {t.expSubtitle}
          </p>
        </div>

        {/* Tab Selector Buttons - Friendly tactile NYC pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 p-1.5 bg-slate-100 rounded-2xl max-w-2xl mx-auto border border-slate-200/60 shadow-inner">
          {[
            { id: 'gallery', label: t.expGalleryTitle, icon: Building },
            { id: 'debate', label: t.expDebateTitle, icon: Flame },
            { id: 'mou', label: t.expMouTitle, icon: FileText },
            { id: 'passport', label: t.expPassportTitle, icon: Award }
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide font-display transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-brand-navy text-white shadow-md shadow-slate-900/10'
                    : 'text-slate-600 hover:text-brand-navy hover:bg-slate-200/50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-brand-blue' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Content Windows */}
        <div className="bg-white rounded-3xl border border-slate-200/60 p-6 sm:p-10 shadow-xl shadow-slate-100">
          <AnimatePresence mode="wait">
            
            {/* TAB 1: Gallery Showcase */}
            {activeTab === 'gallery' && (
              <motion.div
                key="gallery"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-extrabold text-brand-navy flex items-center space-x-2">
                      <span className="w-2.5 h-6 rounded-full bg-brand-blue inline-block" />
                      <span>{t.expGalleryTitle}</span>
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm mt-1">{t.expGalleryDesc}</p>
                  </div>
                </div>

                {/* Grid layout of showcase cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {galleryItems.map((item, index) => {
                    const CardIcon = item.icon;
                    return (
                      <div
                        key={item.id}
                        id={item.id}
                        className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl hover:border-blue-100/80 transition-all duration-300"
                      >
                        <div>
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${item.color} mb-5`}>
                            <CardIcon className="w-5 h-5" />
                          </div>
                          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-blue bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full">
                            {item.tag}
                          </span>
                          <h4 className="text-base sm:text-lg font-display font-bold text-brand-navy mt-3 leading-snug">
                            {item.title}
                          </h4>
                          <p className="text-slate-500 text-xs sm:text-sm mt-2 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                        
                        {/* Footer details removed for minimalist presentation */}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* TAB 2: Interactive Debate */}
            {activeTab === 'debate' && (
              <motion.div
                key="debate"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-extrabold text-brand-navy flex items-center space-x-2">
                      <span className="w-2.5 h-6 rounded-full bg-brand-blue inline-block" />
                      <span>{t.expDebateTitle}</span>
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm mt-1">{t.expDebateDesc}</p>
                  </div>
                </div>

                {/* The Debate Core Box */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-blue-50/5 rounded-2xl border border-blue-100/20 p-6 sm:p-8">
                  
                  {/* Motion display */}
                  <div className="lg:col-span-7 space-y-4">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-blue bg-blue-50 border border-blue-100/50 px-2.5 py-1 rounded-md inline-block">
                      {t.expDebateMotion}
                    </span>
                    <h4 className="text-lg sm:text-2xl font-display font-extrabold text-brand-navy leading-snug">
                      {language === 'en' 
                        ? 'Motion: "Artificial Intelligence will drive human leadership into early obsolescence."' 
                        : '辩题：“人工智能的发展将使人类的领导力加速走向终结。'
                      }
                    </h4>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                      {language === 'en'
                        ? 'A highly anticipated bicultural duel between student representatives of top Chinese and Singaporean universities, pitching technological pragmatism against humanitarian management paradigms.'
                        : '中新两地顶尖学府青年代表展开的激荡辩思。科技实用主义与人本主义管理学说在此激烈交织。'
                      }
                    </p>

                    {/* Speech Bubbles */}
                    <div className="space-y-3 pt-2">
                      <div className="flex items-start space-x-3 text-xs">
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold flex-shrink-0">
                          PRO
                        </div>
                        <div className="bg-white border border-slate-100 p-3 rounded-2xl shadow-sm text-slate-600 italic">
                          "{language === 'en' ? 'AI processes carbon pathways and resource data 10,000 times quicker than physical leadership panels. Efficient systems rule.' : '人工智能分析减碳路径和资源调度的速度是常规领导层的万倍。高效治理必将取代繁琐决策。'}"
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 text-xs">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold flex-shrink-0">
                          CON
                        </div>
                        <div className="bg-white border border-slate-100 p-3 rounded-2xl shadow-sm text-slate-600 italic">
                          "{language === 'en' ? 'Inspiration and empathy cannot be simulated via matrices. Trust-building requires human connection and shared experience.' : '灵感与共情是矩阵无法模拟的。信任纽带的构筑必须依赖人与人真切的连接与共同经历。'}"
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Polling */}
                  <div className="lg:col-span-5 bg-white border border-slate-200/60 rounded-xl p-5 sm:p-6 shadow-md flex flex-col justify-center space-y-4">
                    <h5 className="font-display font-extrabold text-sm sm:text-base text-brand-navy text-center flex items-center justify-center space-x-2">
                      <Vote className="w-4 h-4 text-brand-blue animate-bounce" />
                      <span>{t.expDebateVoteBtn}</span>
                    </h5>

                    {!debateVoted ? (
                      <div className="space-y-3 pt-2">
                        <button
                          id="vote-side-a"
                          onClick={() => handleDebateVote('A')}
                          className="w-full text-left p-3.5 rounded-xl border border-blue-100 bg-blue-50/20 hover:bg-blue-50 text-blue-900 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex justify-between items-center group"
                        >
                          <span>{t.expDebateSideA}</span>
                          <ChevronRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                          id="vote-side-b"
                          onClick={() => handleDebateVote('B')}
                          className="w-full text-left p-3.5 rounded-xl border border-indigo-100 bg-indigo-50/20 hover:bg-indigo-50 text-indigo-950 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex justify-between items-center group"
                        >
                          <span>{t.expDebateSideB}</span>
                          <ChevronRight className="w-4 h-4 text-indigo-400 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-5 pt-3">
                        <div className="text-center text-xs text-emerald-600 font-bold bg-emerald-50 border border-emerald-100 py-1.5 rounded-lg">
                          🎉 {language === 'en' ? 'Thank you! Your vote is registered.' : '已成功接收您的现场表决！'}
                        </div>
                        
                        {/* Custom visual progress bars for poll */}
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-xs font-bold text-slate-500 mb-1.5">
                              <span>{t.expDebateSideA}</span>
                              <span className="font-mono text-blue-600">{pctA}% ({votesA})</span>
                            </div>
                            <div className="w-full h-3.5 bg-slate-100 rounded-full overflow-hidden flex">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${pctA}%` }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                className="h-full bg-blue-500 rounded-full"
                              />
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between text-xs font-bold text-slate-500 mb-1.5">
                              <span>{t.expDebateSideB}</span>
                              <span className="font-mono text-indigo-600">{pctB}% ({votesB})</span>
                            </div>
                            <div className="w-full h-3.5 bg-slate-100 rounded-full overflow-hidden flex">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${pctB}%` }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                className="h-full bg-indigo-500 rounded-full"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="text-[10px] text-slate-400 text-center font-mono font-medium">
                          {language === 'en' ? `Based on ${totalVotes} total delegate selections.` : `数据基于 ${totalVotes} 位参会青年的在线实时选择。`}
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              </motion.div>
            )}

            {/* TAB 3: MOU Ceremony */}
            {activeTab === 'mou' && (
              <motion.div
                key="mou"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-extrabold text-brand-navy flex items-center space-x-2">
                      <span className="w-2.5 h-6 rounded-full bg-brand-blue inline-block" />
                      <span>{t.expMouTitle}</span>
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm mt-1">{t.expMouDesc}</p>
                  </div>
                </div>

                {/* MOU Signing Display Panel */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {mouItems.map((mou, idx) => (
                    <div
                      key={idx}
                      className="border border-slate-200/80 rounded-2xl p-6 bg-slate-50/50 flex flex-col justify-between hover:border-blue-100 hover:bg-white transition-all duration-300"
                    >
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] font-mono font-bold tracking-widest text-brand-blue bg-blue-50 px-2 py-0.5 rounded">
                            {mou.badge}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400 font-semibold uppercase">
                            {mou.date}
                          </span>
                        </div>
                        
                        <h4 className="text-base sm:text-lg font-display font-bold text-brand-navy leading-snug">
                          {mou.title}
                        </h4>
                        
                        <div className="bg-white border border-slate-100 rounded-xl p-3 text-xs space-y-1">
                          <p className="font-bold text-slate-600">{language === 'en' ? 'Signing Entities' : '协议签署双方'}:</p>
                          <p className="text-brand-blue font-semibold">{mou.parties}</p>
                        </div>
                        
                        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                          {mou.desc}
                        </p>
                      </div>

                      {/* simulated social cross post preview */}
                      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[10px] text-slate-400 font-mono font-bold flex items-center space-x-1.5">
                          <Instagram className="w-3.5 h-3.5 text-pink-500" />
                          <span>{t.expMouCrossPost}</span>
                        </span>
                        <div className="flex space-x-1">
                          <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-1 rounded font-mono font-medium">#BusinessChina</span>
                          <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-1 rounded font-mono font-medium">#BCYF2026</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* TAB 4: Passport Activity */}
            {activeTab === 'passport' && (
              <motion.div
                key="passport"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-extrabold text-brand-navy flex items-center space-x-2">
                      <span className="w-2.5 h-6 rounded-full bg-brand-blue inline-block" />
                      <span>{t.expPassportTitle}</span>
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm mt-1">{t.expPassportDesc}</p>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-mono font-bold text-slate-400 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-lg w-fit">
                    <Award className="w-3.5 h-3.5 text-brand-blue" />
                    <span>Gift redemption available</span>
                  </div>
                </div>

                {/* The Interactive checklist */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Progress tracker & Checklist */}
                  <div className="lg:col-span-7 space-y-5">
                    <h4 className="text-base sm:text-lg font-display font-bold text-brand-navy">
                      {language === 'en' ? 'Your Personal Interactive Digital Passport' : '您的个人线上电子青春护照'}
                    </h4>

                    {/* Step options */}
                    <div className="space-y-3">
                      {[
                        t.expPassportStep1,
                        t.expPassportStep2,
                        t.expPassportStep3,
                        t.expPassportStep4
                      ].map((stepText, idx) => (
                        <div
                          key={idx}
                          onClick={() => handleStepToggle(idx)}
                          className={`flex items-center space-x-4 p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                            passportSteps[idx]
                              ? 'border-emerald-200 bg-emerald-50/30'
                              : 'border-slate-200 hover:border-blue-100 hover:bg-blue-50/10'
                          }`}
                        >
                          <div className={`w-6 h-6 rounded-md flex items-center justify-center border transition-all ${
                            passportSteps[idx]
                              ? 'bg-emerald-500 border-emerald-500 text-white'
                              : 'border-slate-300 bg-white text-transparent'
                          }`}>
                            <CheckCircle2 className="w-4 h-4" />
                          </div>
                          <span className={`text-xs sm:text-sm font-semibold tracking-wide ${
                            passportSteps[idx] ? 'text-slate-500 line-through' : 'text-brand-navy'
                          }`}>
                            {stepText}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stamp reward card */}
                  <div className="lg:col-span-5 bg-blue-50/10 border border-blue-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-4">
                    <div className="relative">
                      <div className={`w-24 h-24 rounded-full flex items-center justify-center border-2 border-dashed transition-all duration-500 ${
                        isPassportComplete 
                          ? 'bg-gradient-to-tr from-blue-600 to-indigo-500 border-blue-600 text-white rotate-12 scale-105 shadow-xl shadow-blue-500/10' 
                          : 'border-slate-300 text-slate-400 bg-white'
                      }`}>
                        {isPassportComplete ? (
                          <Award className="w-12 h-12" />
                        ) : (
                          <span className="font-mono text-xl font-extrabold">
                            {passportSteps.filter(Boolean).length}/4
                          </span>
                        )}
                      </div>
                      
                      {isPassportComplete && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-1 -right-1 bg-emerald-500 text-white p-1 rounded-full shadow"
                        >
                          <CheckCircle2 className="w-4 h-4" />
                        </motion.div>
                      )}
                    </div>

                    <div className="space-y-1 max-w-xs">
                      <h5 className="font-display font-extrabold text-sm sm:text-base text-brand-navy">
                        {isPassportComplete 
                          ? (language === 'en' ? 'Challenge Cleared!' : '挑战大圆满！') 
                          : (language === 'en' ? 'Passport Stamps' : '护照印章进度')
                        }
                      </h5>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {isPassportComplete 
                          ? t.expPassportClaim 
                          : (language === 'en' 
                              ? 'Complete all four steps listed to release the digital validation credential for your exclusive physical gift!'
                              : '点击完成所有四项打卡任务，释放电子验证凭证，前往服务台兑换您的实体青春礼品！'
                            )
                        }
                      </p>
                    </div>

                    {isPassportComplete && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-brand-navy text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center space-x-1.5 animate-pulse"
                      >
                        <Instagram className="w-3.5 h-3.5 text-pink-400" />
                        <span>{language === 'en' ? 'Show screen to staff' : '请出示本屏幕给工作人员'}</span>
                      </motion.div>
                    )}
                  </div>

                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
