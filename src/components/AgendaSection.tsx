import React from 'react';
import { motion } from 'motion/react';
import { Clock } from 'lucide-react';

interface TimelineRowProps {
  index: number;
  key?: React.Key;
}

function SpeakerChip() {
  return (
    <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2">
      <div className="placeholder-photo w-8 h-8 shrink-0">
        <span className="text-[6px]">PH</span>
      </div>
      <div className="space-y-0.5 min-w-0">
        <p className="placeholder-text text-[11px] font-semibold truncate">[Speaker Name]</p>
        <p className="placeholder-text text-[10px] truncate">[Title, Org]</p>
      </div>
    </div>
  );
}

function TimelineRow({ index }: TimelineRowProps) {
  const labels = [
    { time: '09:00', label: 'Forum / Moderator' },
    { time: '09:30', label: 'Forum' },
    { time: '10:15', label: 'Forum' },
    { time: '11:00', label: 'Moderator' },
    { time: '12:00', label: 'Forum' },
    { time: '14:00', label: 'Forum / Moderator' },
  ];

  const row = labels[index] || labels[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 py-6 border-b border-slate-100 last:border-b-0"
    >
      {/* Time Column */}
      <div className="md:col-span-2 flex items-start gap-2">
        <Clock className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
        <span className="text-sm font-mono font-bold text-brand-navy">
          {row.time}
        </span>
      </div>

      {/* Session Info */}
      <div className="md:col-span-5 space-y-2">
        <p className="placeholder-text text-base font-display font-bold">
          [PLACEHOLDER — session title {index + 1}]
        </p>
        <p className="placeholder-text text-sm leading-relaxed">
          [PLACEHOLDER — session description]
        </p>
      </div>

      {/* Speaker Cards */}
      <div className="md:col-span-5 space-y-2">
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
          {row.label}
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <SpeakerChip />
          <SpeakerChip />
        </div>
      </div>
    </motion.div>
  );
}

export default function AgendaSection() {
  return (
    <section id="agenda" className="relative py-20 sm:py-28 bg-white border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-blue bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full">
            AGENDA
          </span>
        </motion.div>

        {/* Timeline Rows */}
        <div className="divide-y divide-slate-100">
          {Array.from({ length: 6 }).map((_, i) => (
            <TimelineRow key={i} index={i} />
          ))}
        </div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xs text-slate-400 italic mt-8 text-center font-medium"
        >
          *Programme subjected to changes.
        </motion.p>

      </div>
    </section>
  );
}
