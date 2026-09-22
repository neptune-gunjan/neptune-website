"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { NEPTUNE_DATA } from "@/data/neptune-data";

export default function ProjectsAndCaseStudies() {
  const { projects } = NEPTUNE_DATA;

  return (
    <section 
      id="work" 
      className="py-24 relative bg-slate-50 dark:bg-[#09090b] border-t border-slate-200/80 dark:border-white/5 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tighter">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-tr from-cyan-500 to-indigo-500">Work</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl font-medium">
            We solve real business problems with practical technology.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col bg-white dark:bg-[#12121a] rounded-3xl overflow-hidden border border-slate-200/80 dark:border-white/10 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 hover:shadow-2xl dark:hover:shadow-glow-blue transition-all duration-300"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100 dark:bg-white/5">
                <Image
                  src={project.image as string}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-block px-3 py-1 mb-3 rounded-full bg-cyan-500/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
                    {project.category}
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {project.name}
                  </h3>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="space-y-6 flex-grow">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">Challenge</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">{(project as any).challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">Strategy</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">{(project as any).strategy}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-2">Business Impact</h4>
                    <p className="text-sm text-slate-900 dark:text-white font-bold leading-relaxed">{(project as any).impact}</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/10">
                  <Link
                    href={`/work/${project.id}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors group/link"
                  >
                    <span>View Project Details</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
