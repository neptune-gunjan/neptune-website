"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { NEPTUNE_DATA } from "@/data/neptune-data";
import { CaseStudy, Project } from "@/types";
import { analytics } from "@/lib/analytics";

export default function ProjectsAndCaseStudies() {
  const { projects, caseStudies } = NEPTUNE_DATA;
  const allItems: (Project | CaseStudy)[] = [...projects, ...caseStudies];

  const [activeFilter, setActiveFilter] = useState<"all" | "products" | "case-studies">("all");

  const filteredItems = allItems.filter((item) => {
    if (activeFilter === "products") return item.type === "project";
    if (activeFilter === "case-studies") return item.type === "case-study";
    return true;
  });

  const router = useRouter();

  const handleOpenItem = (item: Project | CaseStudy) => {
    if (item.type === "case-study") {
      analytics.trackCaseStudyView(item.id, item.name);
    } else {
      analytics.trackCtaClick(`View Project: ${item.name}`, "projects_card");
    }
    router.push(`/work/${item.id}`);
  };

  return (
    <section 
      id="work" 
      className="py-24 relative bg-white dark:bg-[#09090b] border-t border-slate-200/80 dark:border-white/5 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What We've <span className="text-gradient-cyan-blue">Built</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl">
              Production solutions and confidential architectures engineered for high performance, reliability, and business scale.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-[#14141e] border border-slate-200 dark:border-white/10 self-start md:self-auto shadow-sm">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeFilter === "all"
                  ? "bg-white dark:bg-cyan-500 text-slate-950 dark:text-slate-950 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              All Work
            </button>
            <button
              onClick={() => setActiveFilter("products")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeFilter === "products"
                  ? "bg-white dark:bg-cyan-500 text-slate-950 dark:text-slate-950 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Neptune Products
            </button>
            <button
              onClick={() => setActiveFilter("case-studies")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeFilter === "case-studies"
                  ? "bg-white dark:bg-cyan-500 text-slate-950 dark:text-slate-950 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Case Studies
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => {
            const isCaseStudy = item.type === "case-study";
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => handleOpenItem(item)}
                className="group relative rounded-3xl bg-slate-50/70 dark:bg-[#12121a] border border-slate-200/80 dark:border-white/10 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 hover:shadow-xl dark:hover:shadow-glow-blue transition-all duration-300 overflow-hidden flex flex-col justify-between hover-lift cursor-pointer"
              >
                <div>
                  {/* Card Image Banner */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-[#181824]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      unoptimized
                      className="object-cover opacity-90 dark:opacity-70 group-hover:scale-105 group-hover:opacity-100 dark:group-hover:opacity-90 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-[#12121a] via-transparent to-transparent" />
                    
                    {/* Floating Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 dark:bg-[#09090b]/90 text-cyan-800 dark:text-cyan-300 border border-cyan-500/20 dark:border-cyan-400/30 shadow-sm backdrop-blur-md">
                        {item.badge}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/90 dark:bg-[#09090b]/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5 shadow-sm backdrop-blur-md">
                        {isCaseStudy ? (item as CaseStudy).sections.overview.industry : (item as Project).industry}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1 font-medium">
                      {item.category}
                    </span>
                    <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors mb-3">
                      {item.name}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 mb-6 leading-relaxed">
                      {item.shortDescription}
                    </p>

                    {/* Problem Summary snippet */}
                    <div className="p-3.5 rounded-xl bg-white dark:bg-[#09090b] border border-slate-200/80 dark:border-white/5 mb-6">
                      <span className="text-[11px] font-bold text-cyan-800 dark:text-cyan-300 uppercase tracking-wider block mb-1">
                        Challenge Addressed
                      </span>
                      <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-normal">
                        {isCaseStudy ? (item as CaseStudy).sections.problem.content : (item as Project).problem}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {(isCaseStudy
                        ? (item as CaseStudy).sections.technology
                        : (item as Project).technology
                      ).slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white dark:bg-[#181824] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer / CTA trigger */}
                <div className="px-6 py-4 border-t border-slate-200/80 dark:border-white/5 flex items-center justify-between bg-white/60 dark:bg-[#0e0e16]/60">
                  <span className="text-xs font-bold text-cyan-700 dark:text-cyan-400 group-hover:underline">
                    {item.ctaText}
                  </span>
                  <div className="p-2 rounded-full bg-slate-100 group-hover:bg-cyan-500 group-hover:text-slate-950 dark:bg-white/5 dark:group-hover:bg-cyan-400 dark:group-hover:text-slate-950 text-slate-600 dark:text-slate-400 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
