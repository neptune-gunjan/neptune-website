"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Bot, Code, Cpu, LineChart } from "lucide-react";
import { NEPTUNE_DATA } from "@/data/neptune-data";
import { analytics } from "@/lib/analytics";

const SOLUTION_ICONS: Record<string, React.ReactNode> = {
  "ai-automation": <Bot className="w-6 h-6 text-cyan-600 dark:text-primary" />,
  "custom-software": <Code className="w-6 h-6 text-indigo-600 dark:text-secondary" />,
  "product-engineering": <Cpu className="w-6 h-6 text-cyan-600 dark:text-primary" />,
  "technology-consulting": <LineChart className="w-6 h-6 text-indigo-600 dark:text-secondary" />,
};

export default function Solutions() {
  const { solutions } = NEPTUNE_DATA;
  const [activeTab, setActiveTab] = useState<string>(solutions[0].id);

  const handleSolutionSelect = (solutionId: string) => {
    setActiveTab(solutionId);
    analytics.trackSolutionView(solutionId);
  };

  return (
    <section id="solutions" className="py-24 relative bg-[#f8fafc] dark:bg-[#0e121c] border-t border-slate-200/80 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/30 text-xs font-bold text-cyan-800 dark:text-primary uppercase tracking-wider mb-4 shadow-sm">
              Core Practices
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              End-to-End <span className="text-gradient-cyan-blue">Technology Solutions</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-slate-600 dark:text-slate-400">
            We bridge senior consulting strategy with high-velocity product execution to build resilient digital systems.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((sol) => {
            const isSelected = activeTab === sol.id;
            return (
              <div
                key={sol.id}
                onClick={() => handleSolutionSelect(sol.id)}
                className={`relative rounded-3xl p-8 transition-all duration-300 cursor-pointer border ${
                  isSelected
                    ? "bg-white dark:bg-[#1a2133] border-cyan-500 dark:border-primary shadow-xl dark:shadow-glow"
                    : "bg-white dark:bg-[#141824] border-slate-200 dark:border-white/10 hover:border-cyan-500/40 hover:shadow-card-hover shadow-card-light dark:shadow-none"
                }`}
              >
                {/* Header info */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                      {SOLUTION_ICONS[sol.id]}
                    </div>
                    <div>
                      <span className="font-mono text-xs text-cyan-600 dark:text-primary font-bold">
                        SOLUTION {sol.number}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
                        {sol.title}
                      </h3>
                    </div>
                  </div>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.stopPropagation();
                      analytics.trackCtaClick(`Inquire: ${sol.title}`, "solutions_card");
                    }}
                    className="p-2.5 rounded-full bg-slate-100 hover:bg-cyan-500 hover:text-white dark:bg-white/5 dark:hover:bg-primary dark:hover:text-black text-slate-600 dark:text-slate-400 transition-colors"
                    aria-label={`Inquire about ${sol.title}`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                  {sol.description}
                </p>

                {/* Specific Deliverables / Items List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {sol.items.map((item) => (
                    <div
                      key={item.name}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#0a0d14] border border-slate-200/80 dark:border-white/5 flex flex-col justify-start"
                    >
                      <div className="flex items-center gap-2 text-slate-900 dark:text-white font-semibold text-xs sm:text-sm mb-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-primary shrink-0" />
                        <span>{item.name}</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal pl-5">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-white/10">
                  {sol.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-[#c3f5ff] border border-slate-200 dark:border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
