"use client";

import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { NEPTUNE_DATA } from "@/data/neptune-data";

export default function OurProcess() {
  const { processPhases, company } = NEPTUNE_DATA;

  return (
    <section 
      id="process" 
      className="py-24 relative bg-slate-50/70 dark:bg-[#0c0c12] border-t border-slate-200/80 dark:border-white/5 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            From Problem to <span className="text-gradient-cyan-blue">Production</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
            A simple, proven 6-step process that ensures clear communication, on-time delivery, and high-quality results without any hidden surprises.
          </p>
        </div>

        {/* Desktop Process Stepper (Horizontal Layout for Large Screens) */}
        <div className="hidden lg:block relative mb-12">
          {/* Connecting Gradient Line with Animated Glow */}
          <div className="absolute top-7 left-10 right-10 h-[2px] bg-slate-200 dark:bg-white/10 z-0 overflow-hidden rounded-full">
            <motion.div 
              className="h-full w-1/3 bg-gradient-to-r from-transparent via-cyan-500 to-purple-600"
              animate={{ x: ["-100%", "400%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="grid grid-cols-6 gap-6 relative z-10">
            {processPhases.map((phase, index) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col"
              >
                {/* Step Node Indicator */}
                <div className="flex items-center justify-center mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#14141e] border-2 border-cyan-500/50 dark:border-cyan-400/50 flex items-center justify-center shadow-md dark:shadow-glow-blue transition-transform hover:scale-110">
                    <span className="font-mono font-black text-base text-cyan-600 dark:text-cyan-300">
                      {phase.number}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex-1 p-6 rounded-3xl bg-white dark:bg-[#14141e] border border-slate-200/80 dark:border-white/10 hover:border-cyan-500/40 dark:hover:border-cyan-400/40 shadow-sm hover:shadow-xl dark:shadow-none transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-1">
                      {phase.title}
                    </h3>
                    <span className="text-xs font-semibold text-cyan-700 dark:text-cyan-400 block mb-3">
                      {phase.tagline}
                    </span>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                      {phase.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-white/5 space-y-1.5">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
                      Deliverables
                    </span>
                    {phase.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-1.5 text-[11px] text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Process Stepper (Vertical Timeline) */}
        <div className="lg:hidden relative pl-8 space-y-8 ml-2">
          {/* Vertical Connecting Line with Glow */}
          <div className="absolute top-4 bottom-4 left-2 w-[2px] bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              className="w-full h-1/3 bg-gradient-to-b from-transparent via-cyan-500 to-purple-600"
              animate={{ y: ["-100%", "400%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>
          {processPhases.map((phase, index) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative"
            >
              {/* Timeline Node Dot */}
              <div className="absolute -left-[39px] top-6 w-8 h-8 rounded-xl bg-white dark:bg-[#14141e] border-2 border-cyan-500 dark:border-cyan-400 flex items-center justify-center shadow-sm z-10">
                <span className="font-mono text-xs font-bold text-cyan-600 dark:text-cyan-300">
                  {phase.number}
                </span>
              </div>

              {/* Step Card */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#14141e] border border-slate-200/80 dark:border-white/10 shadow-sm">
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-1">
                  {phase.title}
                </h3>
                <span className="text-xs font-semibold text-cyan-700 dark:text-cyan-400 block mb-3">
                  {phase.tagline}
                </span>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {phase.description}
                </p>

                <div className="pt-3 border-t border-slate-100 dark:border-white/5 space-y-1.5">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
                    Deliverables
                  </span>
                  {phase.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

