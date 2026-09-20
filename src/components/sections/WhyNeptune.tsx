"use client";

import { motion } from "framer-motion";
import { Compass, Target, ShieldCheck, Eye, Flame, Sparkles } from "lucide-react";
import { NEPTUNE_DATA } from "@/data/neptune-data";

const PILLAR_ICONS: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />,
  Target: <Target className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />,
  Eye: <Eye className="w-6 h-6 text-sky-500 dark:text-sky-400" />,
  Flame: <Flame className="w-6 h-6 text-amber-500 dark:text-amber-400" />,
};

export default function WhyNeptune() {
  const { whyNeptune } = NEPTUNE_DATA;

  return (
    <section 
      id="why-neptune" 
      className="py-24 relative bg-slate-50 dark:bg-[#0c0c12] border-t border-slate-200/80 dark:border-white/5 overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Why Partner with <span className="text-gradient-cyan-blue">Neptuneitech</span>?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Pragmatic, outcome-focused engineering. We prioritize business value over technical vanity and build systems designed to endure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyNeptune.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#14141e] border border-slate-200/80 dark:border-white/10 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-all duration-300 hover-lift shadow-sm hover:shadow-xl dark:shadow-none dark:hover:shadow-glow-blue flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-[#1c1c28] border border-slate-200 dark:border-white/10 flex items-center justify-center mb-6 shadow-xs group-hover:scale-110 transition-transform duration-300">
                  {PILLAR_ICONS[pillar.icon] || <ShieldCheck className="w-6 h-6 text-cyan-500" />}
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
