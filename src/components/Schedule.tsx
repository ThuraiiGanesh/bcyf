/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Language, AgendaItem } from '../types';
import { TRANSLATIONS, AGENDA, SPEAKERS } from '../data';
import { Check, Plus, Clock, MapPin, Search, CalendarCheck, Sparkles, ChevronRight, Bookmark } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ScheduleProps {
  language: Language;
  savedItinerary: string[];
  toggleItinerary: (id: string) => void;
  onOpenSpeakerBio: (id: string) => void;
}

export default function Schedule({
  language,
  savedItinerary,
  toggleItinerary,
  onOpenSpeakerBio
}: ScheduleProps) {
  const t = TRANSLATIONS[language];
  const [activeFilter, setActiveFilter] = React.useState<string>('all');
  const [searchQuery, setSearchQuery] = React.useState<string>('');

  const filterTabs = [
    { id: 'all', label: t.agendaFilterAll },
    { id: 'keynote', label: t.agendaFilterKeynote },
    { id: 'panel', label: t.agendaFilterPanel },
    { id: 'networking', label: t.agendaFilterNetworking },
    { id: 'workshop', label: t.agendaFilterWorkshop }
  ];

  // Filter & Search logic
  const filteredAgenda = AGENDA.filter((item) => {
    const matchesFilter = activeFilter === 'all' || item.type === activeFilter;
    
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      query === '' ||
      item.title.toLowerCase().includes(query) ||
      item.titleZh.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.descriptionZh.toLowerCase().includes(query);

    return matchesFilter && matchesSearch;
  });

  // Export helper (Simulating dynamic PDF compiling)
  const [exporting, setExporting] = React.useState(false);
  const [exportSuccess, setExportSuccess] = React.useState(false);

  const handleExport = () => {
    setExporting(true);
    setTimeout(() => {
      setExporting(false);
      setExportSuccess(true);
      setTimeout(() => setExportSuccess(false), 3000);
    }, 2000);
  };

  return (
    <section id="schedule" className="relative py-24 border-b border-slate-200/50 bg-[#EBF3FC]/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Headings */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-blue bg-blue-50/50 border border-blue-100/60 px-3 py-1 rounded-full">
              {language === 'en' ? 'Conference Flow' : '大会时间表'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-navy tracking-tight mt-3">
              {t.agendaTitle}
            </h2>
            <p className="text-sm text-slate-500 mt-2 max-w-2xl font-medium leading-relaxed">
              {t.agendaSubtitle}
            </p>
          </div>

          {/* Search bar */}
          <div className="mt-6 md:mt-0 relative w-full md:w-72">
            <input
              type="text"
              id="schedule-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'en' ? 'Search topics, keynotes...' : '搜索议题、发言环节...'}
              className="w-full px-4 py-2.5 pl-10 rounded-xl text-xs bg-white border border-slate-200 text-slate-700 focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/20 transition-all shadow-sm"
            />
            <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="flex overflow-x-auto pb-4 gap-2 no-scrollbar border-b border-slate-200/60">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                id={`filter-tab-${tab.id}`}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold font-display transition-all shrink-0 border cursor-pointer ${
                  isActive
                    ? 'bg-brand-navy text-white border-brand-navy shadow-md shadow-slate-900/10'
                    : 'bg-white text-slate-600 border-slate-200 hover:text-brand-navy hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Main Grid: Left Timeline, Right Itinerary Builder */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-10">
          
          {/* Column 1: Timeline Agenda List */}
          <div className="lg:col-span-8 space-y-6">
            <AnimatePresence mode="popLayout">
              {filteredAgenda.map((item, idx) => {
                const isSaved = savedItinerary.includes(item.id);
                
                return (
                  <motion.div
                    key={item.id}
                    id={`agenda-item-${item.id}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="p-5 sm:p-6 rounded-2xl border border-slate-200/80 bg-white flex flex-col sm:flex-row gap-5 items-start justify-between relative group hover:border-blue-100 shadow-sm hover:shadow transition-all duration-300"
                  >
                    {/* Time block */}
                    <div className="flex sm:flex-col items-center sm:items-start shrink-0 min-w-[110px] border-b sm:border-b-0 sm:border-r border-slate-100 pb-3 sm:pb-0 sm:pr-5">
                      <div className="flex items-center space-x-1.5 text-brand-blue font-mono text-sm font-bold">
                        <Clock className="w-4 h-4 text-brand-blue/80" />
                        <span>{item.startTime}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono mt-1 ml-2 sm:ml-0 font-semibold">
                        {item.endTime}
                      </span>
                      <span className={`text-[9px] uppercase tracking-wider font-bold font-mono px-2 py-0.5 rounded-md mt-2.5 ml-auto sm:ml-0 border ${
                        item.type === 'keynote' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                        item.type === 'panel' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                        item.type === 'workshop' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                        'bg-slate-50 text-slate-500 border-slate-200'
                      }`}>
                        {item.type}
                      </span>
                    </div>

                    {/* Information Block */}
                    <div className="flex-1 space-y-3 text-left">
                      <div>
                        <h3 className="text-base sm:text-lg font-display font-bold text-brand-navy tracking-tight group-hover:text-brand-blue transition-colors">
                          {language === 'en' ? item.title : item.titleZh}
                        </h3>
                        <div className="flex items-center space-x-1.5 text-slate-500 text-xs mt-1 font-medium">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          <span>{language === 'en' ? item.location : item.locationZh}</span>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                        {language === 'en' ? item.description : item.descriptionZh}
                      </p>

                      {/* Associated Speakers */}
                      {item.speakers.length > 0 && (
                        <div className="flex flex-wrap items-center gap-2 pt-2.5 border-t border-slate-100">
                          <span className="text-[10px] uppercase font-mono text-slate-400 font-bold tracking-wider mr-1">
                            {language === 'en' ? 'Speakers' : '嘉宾'}
                          </span>
                          {item.speakers.map((spId) => {
                            const speaker = SPEAKERS.find((s) => s.id === spId);
                            if (!speaker) return null;
                            return (
                              <button
                                key={spId}
                                onClick={() => onOpenSpeakerBio(spId)}
                                className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg border border-slate-200 bg-slate-50 hover:bg-blue-50/50 hover:border-blue-200 transition-all text-[11px] text-slate-600 hover:text-brand-blue cursor-pointer"
                              >
                                <div className="w-4 h-4 rounded-full bg-brand-navy flex items-center justify-center font-mono font-bold text-[8px] text-white">
                                  {speaker.avatar}
                                </div>
                                <span className="font-semibold">{language === 'en' ? speaker.name : speaker.nameZh}</span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Bookmark Toggle */}
                    <button
                      id={`bookmark-btn-${item.id}`}
                      onClick={() => toggleItinerary(item.id)}
                      className={`p-2.5 rounded-xl border transition-all self-end sm:self-start mt-2 sm:mt-0 cursor-pointer ${
                        isSaved
                          ? 'bg-blue-100 text-brand-blue border-blue-300 shadow-sm'
                          : 'bg-white border-slate-200 text-slate-400 hover:text-brand-navy hover:border-slate-300 hover:bg-slate-50'
                      }`}
                      title={language === 'en' ? 'Add to itinerary' : '添加至行程'}
                    >
                      {isSaved ? <Check className="w-4 h-4 stroke-[2.5]" /> : <Plus className="w-4 h-4 stroke-[2.5]" />}
                    </button>
                  </motion.div>
                );
              })}

              {filteredAgenda.length === 0 && (
                <div className="text-center py-16 rounded-2xl border border-dashed border-slate-300 bg-white shadow-sm">
                  <p className="text-slate-400 text-sm font-medium">
                    {language === 'en' ? 'No agenda items matched your filters.' : '无匹配该筛选条件的议程项目。'}
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Column 2: Personal Itinerary Planner Card */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 p-5 sm:p-6 rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 space-y-6 text-left">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center space-x-2 text-brand-blue">
                  <Bookmark className="w-5 h-5 text-brand-blue" />
                  <h3 className="font-display font-extrabold text-brand-navy tracking-tight text-base">
                    {t.itineraryTitle}
                  </h3>
                </div>
                <span className="text-xs font-mono font-bold text-brand-blue bg-blue-50/50 border border-blue-100/60 px-2.5 py-0.5 rounded-full">
                  {savedItinerary.length}
                </span>
              </div>

              {/* Dynamic Saved list */}
              <div className="space-y-3 max-h-[350px] overflow-y-auto pr-1 no-scrollbar">
                <AnimatePresence mode="popLayout">
                  {savedItinerary.map((itemId) => {
                    const agenda = AGENDA.find((a) => a.id === itemId);
                    if (!agenda) return null;
                    return (
                      <motion.div
                        key={itemId}
                        id={`saved-item-${itemId}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/50 flex items-start justify-between gap-3 group hover:border-blue-100 hover:bg-white transition-all"
                      >
                        <div className="space-y-1">
                          <p className="text-xs font-bold text-slate-800 tracking-tight group-hover:text-brand-blue transition-colors leading-snug">
                            {language === 'en' ? agenda.title : agenda.titleZh}
                          </p>
                          <div className="flex items-center space-x-1.5 text-[10px] text-slate-400 font-mono font-semibold">
                            <Clock className="w-3 h-3 text-brand-blue" />
                            <span>{agenda.startTime} - {agenda.endTime}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => toggleItinerary(itemId)}
                          className="text-[10px] font-bold text-rose-500 hover:text-rose-600 font-display transition-colors cursor-pointer shrink-0"
                        >
                          {t.itineraryRemove}
                        </button>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>

                {savedItinerary.length === 0 && (
                  <div className="text-center py-10">
                    <CalendarCheck className="w-8 h-8 text-slate-300 mx-auto stroke-[1.5]" />
                    <p className="text-[11px] text-slate-400 mt-2 font-medium leading-relaxed px-4">
                      {t.itineraryEmpty}
                    </p>
                  </div>
                )}
              </div>

              {/* Export Button */}
              {savedItinerary.length > 0 && (
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <button
                    id="export-itinerary-btn"
                    onClick={handleExport}
                    disabled={exporting}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-coral hover:scale-[1.01] active:scale-[0.99] font-bold text-xs text-white shadow shadow-blue-500/10 transition-all font-display flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    {exporting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Compiling Schedule...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 text-blue-200 animate-pulse" />
                        <span>{t.itinerarySaveBtn}</span>
                      </>
                    )}
                  </button>

                  <AnimatePresence>
                    {exportSuccess && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="p-2 text-center text-[10px] sm:text-xs font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg"
                      >
                        ✓ Itinerary compiled and saved to local profile!
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
