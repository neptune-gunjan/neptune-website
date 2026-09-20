"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { NEPTUNE_DATA } from "@/data/neptune-data";
import { analytics } from "@/lib/analytics";

function Counter({ target, suffix = "", duration = 1.8 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const isDecimal = target % 1 !== 0;
    const totalSteps = 60;
    const stepTime = (duration * 1000) / totalSteps;
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? parseFloat(start.toFixed(1)) : Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const { company, statistics } = NEPTUNE_DATA;

  return (
    <section className="relative min-h-[92vh] pt-36 pb-24 flex items-center justify-center overflow-hidden bg-white dark:bg-[#09090b] transition-colors duration-300">
      {/* Background Animated Aurora & Subtle Grid */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-60 dark:opacity-40" />

      {/* Aurora Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-gradient-to-tr from-cyan-500/15 via-indigo-500/15 to-purple-600/15 rounded-full blur-3xl pointer-events-none animate-aurora" />
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="mb-4"></div>

        {/* Main Headline: "Technology Solutions Built Around Your Business Problems." */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight max-w-5xl mx-auto leading-[1.05] mb-6 text-slate-900 dark:text-white"
        >
          <span>Technology Solutions Built Around Your </span>
          <span className="text-gradient-aurora">Business Problems.</span>
        </motion.h1>

        {/* Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed mb-12"
        >
          {company.philosophy}
        </motion.p>

        {/* Action Buttons: [ Talk to Neptune ] [ Explore Our Work ] */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <a
            href="/#contact"
            onClick={() => analytics.trackCtaClick("Talk to Neptune", "hero")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full font-bold text-base text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 hover:opacity-95 transition-all duration-300 shadow-md dark:shadow-glow-blue hover:shadow-lg dark:hover:shadow-glow-aurora"
          >
            <span>Talk to Neptune</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/#work"
            onClick={() => analytics.trackCtaClick("Explore Our Work", "hero")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full font-bold text-base text-slate-800 dark:text-slate-200 bg-white dark:bg-[#16161f] hover:bg-slate-50 dark:hover:bg-[#1c1c28] border border-slate-200 dark:border-white/10 hover:border-cyan-400 dark:hover:border-cyan-400 transition-all duration-300 shadow-sm dark:shadow-none backdrop-blur-sm"
          >
            <span>Explore Our Work</span>
          </a>
        </motion.div>

        {/* Capability Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400 mb-16"
        >
          <span>AI & Automation</span>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <span>Custom Software</span>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <span>Product Engineering</span>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <span>Technology Consulting</span>
        </motion.div>

        {/* Animated Statistics Counter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto pt-8 border-t border-slate-200/80 dark:border-white/10"
        >
          {statistics.map((stat) => (
            <div
              key={stat.label}
              className="p-5 rounded-2xl bg-slate-50/80 dark:bg-[#111116]/80 border border-slate-200/80 dark:border-white/10 shadow-card-light dark:shadow-none hover-lift text-center"
            >
              <div className="font-display font-black text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 mb-1">
                <Counter target={stat.number} suffix={stat.suffix} />
              </div>
              <div className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 leading-tight">
                {stat.description}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
