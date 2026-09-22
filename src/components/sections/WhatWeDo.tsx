"use client";

import { motion } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  Cloud, 
  Bot, 
  Lightbulb, 
  GitBranch, 
  ArrowUpRight, 
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { NEPTUNE_DATA } from "@/data/neptune-data";
import { analytics } from "@/lib/analytics";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />,
  Smartphone: <Smartphone className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />,
  Cloud: <Cloud className="w-6 h-6 text-sky-500 dark:text-sky-400" />,
  Bot: <Bot className="w-6 h-6 text-purple-500 dark:text-purple-400" />,
  Lightbulb: <Lightbulb className="w-6 h-6 text-amber-500 dark:text-amber-400" />,
  GitBranch: <GitBranch className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />,
};

export default function WhatWeDo() {
  const { coreServices } = NEPTUNE_DATA;

  return (
    <section 
      id="services" 
      className="py-24 relative bg-white dark:bg-[#09090b] border-t border-slate-200/80 dark:border-white/5 transition-colors duration-300"
    >
      {/* Background Accent Mesh */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What We Help Businesses <span className="text-gradient-cyan-blue">Build</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            From modern web frontends to resilient cloud topologies and autonomous AI workflows, we engineer systems that drive tangible business outcomes.
          </p>
        </div>

        {/* 4 Interactive Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative rounded-3xl p-8 bg-slate-50/70 dark:bg-[#12121a] border border-slate-200/80 dark:border-white/10 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 hover:shadow-xl dark:hover:shadow-glow-blue transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#181824] border border-slate-200 dark:border-white/10 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {SERVICE_ICONS[service.icon] || <Globe className="w-6 h-6 text-cyan-500" />}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white dark:bg-[#181824] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 shadow-xs">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Explore Services Link */}
                <div className="mt-8 pt-4 border-t border-slate-200/80 dark:border-white/5">
                  <a
                    href="/services"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors"
                  >
                    <span>Explore Services</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

