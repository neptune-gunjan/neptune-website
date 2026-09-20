"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { analytics } from "@/lib/analytics";

export default function CtaBanner() {
  return (
    <section className="py-20 relative bg-slate-50/70 dark:bg-[#0c0c12] border-t border-slate-200/80 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl p-10 sm:p-14 md:p-16 overflow-hidden bg-white dark:bg-[#12121c] border border-cyan-500/30 dark:border-cyan-500/30 shadow-xl dark:shadow-glow-aurora text-center"
        >
          {/* Background Aurora Orbs */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight mb-6 leading-[1.1]">
              Let&apos;s Build Something <span className="text-gradient-aurora">Great Together</span>
            </h2>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
              Whether you need to architect a mission-critical platform, eliminate operational bottlenecks with AI, or scale your product engineering, our senior team is ready.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="/#contact"
                onClick={() => analytics.trackCtaClick("Book a Consultation", "cta_banner")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-base text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 hover:opacity-95 transition-all shadow-md dark:shadow-glow-blue hover:shadow-lg"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#work"
                onClick={() => analytics.trackCtaClick("Explore Selected Work", "cta_banner")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-all"
              >
                <span>Explore Selected Work</span>
              </a>
            </div>

            {/* Guarantees */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium pt-6 border-t border-slate-200/80 dark:border-white/5">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Direct Senior Engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>24-Hour Technical Response</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Zero Technical Lock-in</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

