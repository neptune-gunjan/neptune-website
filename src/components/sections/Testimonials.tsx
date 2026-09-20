"use client";

import { motion } from "framer-motion";
import { Star, Quote, Sparkles, TrendingUp } from "lucide-react";
import { NEPTUNE_DATA } from "@/data/neptune-data";

export default function Testimonials() {
  const { testimonials } = NEPTUNE_DATA;

  return (
    <section 
      id="testimonials" 
      className="py-24 relative bg-white dark:bg-[#09090b] border-t border-slate-200/80 dark:border-white/5 transition-colors duration-300 overflow-hidden"
    >
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Client <span className="text-gradient-cyan-blue">Trust &amp; Feedback</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            What engineering leaders, enterprise partners, and founders say about our architectural rigor and execution velocity.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-slate-50/70 dark:bg-[#12121a] border border-slate-200/80 dark:border-white/10 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 hover:shadow-xl dark:hover:shadow-glow-blue transition-all duration-300 flex flex-col justify-between hover-lift relative group"
            >
              <div>
                {/* Top Row: 5 Stars & Metric Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4 fill-amber-400 text-amber-400 dark:fill-cyan-400 dark:text-cyan-400" 
                      />
                    ))}
                  </div>
                  {t.metric && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cyan-100/70 dark:bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border border-cyan-300/60 dark:border-cyan-500/30">
                      <TrendingUp className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
                      <span>{t.metric}</span>
                    </div>
                  )}
                </div>

                {/* Quote Text */}
                <div className="relative mb-8">
                  <Quote className="w-8 h-8 text-slate-300 dark:text-white/10 absolute -top-4 -left-2 -z-10" />
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-slate-200/80 dark:border-white/5">
                <span className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white block">
                  {t.author}
                </span>
                <span className="text-xs text-cyan-700 dark:text-cyan-400 block font-medium mt-0.5">
                  {t.role}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5">
                  {t.company}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

