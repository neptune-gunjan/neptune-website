"use client";
import Link from "next/link";
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
    <section className="relative min-h-[92vh] pt-28 sm:pt-36 pb-20 sm:pb-24 flex items-center justify-center overflow-hidden bg-white dark:bg-[#09090b] transition-colors duration-300">
      {/* Background Animated Aurora & Subtle Grid */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-60 dark:opacity-40" />

      {/* Aurora Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[700px] h-[300px] sm:h-[550px] bg-gradient-to-tr from-cyan-500/15 via-indigo-500/15 to-purple-600/15 rounded-full blur-3xl pointer-events-none animate-aurora" />
      <div className="absolute top-1/3 -left-20 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-20 -right-20 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="mb-4"></div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight max-w-5xl mx-auto leading-tight sm:leading-[1.05] mb-6 text-slate-900 dark:text-white"
        >
          <span className="block sm:inline">Technology Solutions Built Around Your </span>
          <span className="text-gradient-aurora block sm:inline mt-2 sm:mt-0">Business Problems.</span>
        </motion.h1>

        {/* Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed mb-12"
        >
          {company.philosophy}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <Link
            href="/contact"
            onClick={() => analytics.trackCtaClick("Talk to Neptune", "hero")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full font-bold text-base text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 hover:opacity-95 transition-all duration-300 shadow-md dark:shadow-glow-blue hover:shadow-lg dark:hover:shadow-glow-aurora"
          >
            <span>Talk to Neptune</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400 mb-16"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <span>AI & Automation</span>
            <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">•</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <span>Custom Software</span>
            <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">•</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <span>Product Engineering</span>
            <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">•</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <span>Technology Consulting</span>
          </div>
        </motion.div>
        {/* Client Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full pt-12 border-t border-slate-200/50 dark:border-white/5"
        >
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-8">
            Trusted by Engineering Teams At
          </p>
          <div className="flex overflow-hidden space-x-12 sm:space-x-16 max-w-5xl mx-auto mask-image-fade">
            <div className="flex space-x-12 sm:space-x-16 animate-marquee shrink-0 items-center">
              {NEPTUNE_DATA.trustedClients.map((client, idx) => (
                <div key={idx} className="text-lg sm:text-xl font-display font-black text-slate-400 dark:text-slate-600 hover:text-slate-900 dark:hover:text-slate-300 transition-colors whitespace-nowrap">
                  {client.name}
                </div>
              ))}
            </div>
            {/* Duplicate for infinite effect */}
            <div className="flex space-x-12 sm:space-x-16 animate-marquee shrink-0 items-center">
              {NEPTUNE_DATA.trustedClients.map((client, idx) => (
                <div key={`dup-${idx}`} className="text-lg sm:text-xl font-display font-black text-slate-400 dark:text-slate-600 hover:text-slate-900 dark:hover:text-slate-300 transition-colors whitespace-nowrap">
                  {client.name}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
