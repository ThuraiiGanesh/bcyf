import { motion } from 'motion/react';
import { Play } from 'lucide-react';

function VideoPlaceholder({ year, featured = false }: { year: string; featured?: boolean }) {
  return (
    <div className="space-y-2">
      <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">
        {year}
      </span>
      <div className={`placeholder-video ${featured ? 'min-h-[280px] sm:min-h-[360px]' : 'min-h-[160px] sm:min-h-[200px]'}`}>
        <div className="w-12 h-12 rounded-full bg-slate-300 flex items-center justify-center">
          <Play className="w-5 h-5 text-slate-500 ml-0.5" />
        </div>
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider">
          [PLACEHOLDER — YouTube embed]
        </span>
      </div>
    </div>
  );
}

export default function WatchSection() {
  return (
    <section id="watch" className="relative py-20 sm:py-28 bg-white border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Pill Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-blue bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full">
            WATCH
          </span>
        </motion.div>

        {/* Featured Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <VideoPlaceholder year="2025 — Featured" featured />
        </motion.div>

        {/* Grid of Past Videos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <VideoPlaceholder year="2024" />
          <VideoPlaceholder year="2023" />
          <VideoPlaceholder year="2022" />
          <VideoPlaceholder year="2021" />
        </motion.div>

      </div>
    </section>
  );
}
