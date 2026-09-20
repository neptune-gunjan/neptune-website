"use client";

import { motion } from "framer-motion";
import { AlertCircle, ArrowRight } from "lucide-react";

const problems = [
  "Manual processes bottlenecking growth",
  "Disconnected systems and data silos",
  "Off-the-shelf software limiting flexibility",
  "Lack of internal AI and technical expertise",
  "Slow time-to-market for digital products",
  "Legacy tech debt and fragile architecture",
  "Unpredictable development costs"
];

export default function ProblemSection() {
  return (
    <section className="py-24 relative bg-slate-50 dark:bg-[#0c0c12] border-t border-slate-200/80 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Heading and Closing Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-2"></div>
            
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-8 leading-[1.1]">
              Technology shouldn't create more <span className="text-red-500 dark:text-red-400">complexity.</span>
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg mb-8">
              We start by understanding the problem — then determine whether technology is the right solution.
            </p>
            
            <a href="/#services" className="inline-flex items-center gap-2 font-bold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors">
              <span>See our solutions</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Right: List of Problems */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-[#14141e] border border-slate-200 dark:border-white/10 rounded-3xl p-8 shadow-xl dark:shadow-none"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-white/10 pb-4">
              Common Business Bottlenecks
            </h3>
            
            <ul className="space-y-4">
              {problems.map((problem, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + (i * 0.05) }}
                  className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-50 dark:bg-red-500/10 text-red-500 dark:text-red-400 flex items-center justify-center mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-current" />
                  </span>
                  <span className="font-medium">{problem}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

