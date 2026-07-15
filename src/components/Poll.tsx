/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Language, PollQuestion } from '../types';
import { TRANSLATIONS, INITIAL_POLLS } from '../data';
import { Vote, BarChart3, HelpCircle, Check, Award, Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PollProps {
  language: Language;
}

export default function Poll({ language }: PollProps) {
  const t = TRANSLATIONS[language];
  
  // Local storage state for poll
  const [poll, setPoll] = React.useState<PollQuestion>(INITIAL_POLLS[0]);
  const [hasVoted, setHasVoted] = React.useState<boolean>(false);
  const [selectedOptionId, setSelectedOptionId] = React.useState<string | null>(null);

  React.useEffect(() => {
    const savedVote = localStorage.getItem('bcyf_user_vote');
    const savedPoll = localStorage.getItem('bcyf_poll_data');

    if (savedVote) {
      setHasVoted(true);
      setSelectedOptionId(savedVote);
    }
    
    if (savedPoll) {
      try {
        setPoll(JSON.parse(savedPoll));
      } catch (e) {
        console.error("Failed to parse poll data", e);
      }
    }
  }, []);

  const handleVote = (optionId: string) => {
    if (hasVoted) return;

    // Increment vote count
    const updatedOptions = poll.options.map((opt) => {
      if (opt.id === optionId) {
        return { ...opt, votes: opt.votes + 1 };
      }
      return opt;
    });

    const updatedPoll = { ...poll, options: updatedOptions };
    setPoll(updatedPoll);
    setHasVoted(true);
    setSelectedOptionId(optionId);

    localStorage.setItem('bcyf_user_vote', optionId);
    localStorage.setItem('bcyf_poll_data', JSON.stringify(updatedPoll));
  };

  const totalVotes = React.useMemo(() => {
    return poll.options.reduce((acc, curr) => acc + curr.votes, 0);
  }, [poll]);

  // Reset helper for testing / presentation purposes
  const handleReset = () => {
    localStorage.removeItem('bcyf_user_vote');
    localStorage.removeItem('bcyf_poll_data');
    setHasVoted(false);
    setSelectedOptionId(null);
    setPoll(INITIAL_POLLS[0]);
  };

  return (
    <section id="interactive" className="relative py-24 border-b border-white/5 bg-slate-900/40 backdrop-blur-xl overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -bottom-1/4 -left-1/4 w-80 h-80 rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Head */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
            {language === 'en' ? 'Bicultural Collaboration Hub' : '双语双文化协同协作'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight mt-2 flex items-center justify-center gap-2">
            <Flame className="w-6 h-6 text-cyan-400 animate-pulse shrink-0" />
            <span>{t.pollTitle}</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1 max-w-xl mx-auto font-light leading-relaxed">
            {t.pollSubtitle}
          </p>
        </div>

        {/* Glassmorphic card container */}
        <div className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-slate-950/50 backdrop-blur-2xl shadow-2xl relative">
          
          {/* Subtle branding indicator */}
          <div className="absolute top-4 right-4 flex items-center space-x-1.5 text-[9px] font-mono text-cyan-400 font-semibold bg-cyan-950/50 border border-cyan-800/30 px-2 py-0.5 rounded">
            <BarChart3 className="w-3 h-3 text-cyan-400" />
            <span>SLI.DO BCYF2025</span>
          </div>

          <h3 className="text-sm sm:text-base font-display font-semibold text-white tracking-tight leading-snug mb-6 pr-20">
            {language === 'en' ? poll.question : poll.questionZh}
          </h3>

          <AnimatePresence mode="wait">
            {!hasVoted ? (
              /* Vote Casting view */
              <motion.div
                key="vote-casting"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-3"
              >
                {poll.options.map((opt) => (
                  <button
                    key={opt.id}
                    id={`poll-option-btn-${opt.id}`}
                    onClick={() => handleVote(opt.id)}
                    className="w-full text-left p-4 rounded-xl border border-white/5 bg-slate-900/30 hover:border-blue-500/30 hover:bg-slate-900/50 hover:scale-[1.005] active:scale-[0.995] transition-all text-xs sm:text-sm text-slate-300 hover:text-white font-medium flex items-center justify-between group"
                  >
                    <span>{language === 'en' ? opt.text : opt.textZh}</span>
                    <Vote className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:scale-110 transition-all shrink-0 ml-4" />
                  </button>
                ))}
              </motion.div>
            ) : (
              /* Results view */
              <motion.div
                key="vote-results"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                {poll.options.map((opt) => {
                  const percentage = totalVotes > 0 ? Math.round((opt.votes / totalVotes) * 100) : 0;
                  const isUserSelection = opt.id === selectedOptionId;
                  
                  return (
                    <div key={opt.id} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-medium">
                        <span className={`flex items-center gap-1.5 ${isUserSelection ? 'text-cyan-400 font-bold' : 'text-slate-300'}`}>
                          {isUserSelection && <Check className="w-3.5 h-3.5 text-cyan-400 stroke-[3.5]" />}
                          {language === 'en' ? opt.text : opt.textZh}
                        </span>
                        <span className="font-mono text-cyan-400 font-bold">
                          {percentage}% <span className="text-[10px] text-slate-500 font-normal">({opt.votes} v)</span>
                        </span>
                      </div>

                      {/* Bar indicator */}
                      <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-white/5 relative">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${percentage}%` }}
                          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                          className={`h-full rounded-full bg-gradient-to-r ${
                            isUserSelection ? 'from-cyan-500 to-blue-600' : 'from-slate-700 to-slate-500'
                          }`}
                        />
                      </div>
                    </div>
                  );
                })}

                <div className="pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-white/5 text-[11px] text-slate-400 mt-4">
                  <div className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-amber-500" />
                    <span>{t.pollVotedText}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono">{totalVotes} {t.pollTotalVotes}</span>
                    <button
                      onClick={handleReset}
                      className="text-[10px] font-semibold text-cyan-400/80 hover:text-cyan-400 transition-colors font-display bg-slate-900 px-2 py-1 rounded border border-white/5 cursor-pointer"
                    >
                      {language === 'en' ? 'Reset Vote' : '重新投票'}
                    </button>
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
