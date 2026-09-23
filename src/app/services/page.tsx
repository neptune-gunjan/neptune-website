"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CtaBanner from "@/components/sections/CtaBanner";
import CursorGlow from "@/components/ui/CursorGlow";
import { NEPTUNE_DATA } from "@/data/neptune-data";
import { Bot, Globe, Cloud, Lightbulb, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const { solutions } = NEPTUNE_DATA;

  const renderIcon = (id: string, className: string) => {
    switch (id) {
      case "ai-automation": return <Bot className={className} />;
      case "custom-software": return <Globe className={className} />;
      case "product-engineering": return <Cloud className={className} />;
      case "technology-consulting": return <Lightbulb className={className} />;
      default: return <CheckCircle2 className={className} />;
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#09090b] text-slate-900 dark:text-[#dfe2f0] transition-colors duration-300">
      <CursorGlow />
      <Navbar />
      
      {/* Services Hero - Centered (as requested) */}
      <section className="pt-40 pb-24 relative overflow-hidden bg-white dark:bg-[#09090b] border-b border-slate-200/80 dark:border-white/5">
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-40 dark:opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tighter mb-8"
          >
            Services & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-500">Capabilities</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium max-w-3xl mx-auto"
          >
            We design, build, and scale custom software and AI systems engineered specifically for your business operations.
          </motion.p>
        </div>
      </section>

      {/* Services Detail List - Original Sticky Layout restored with Animations & Images */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {solutions.map((solution, index) => (
            <div key={solution.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
              
              {/* Image Column (Sticky) */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className={`lg:col-span-5 lg:sticky top-32 ${index % 2 === 1 ? 'lg:order-2 lg:col-start-8' : 'lg:order-1'}`}
              >
                <div className="w-full h-72 sm:h-96 lg:h-[500px] relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 dark:border-white/10">
                  <Image
                    src={`https://images.unsplash.com/photo-${index === 0 ? '1677442136019-21780ecad995' : index === 1 ? '1551288049-bebda4e38f71' : index === 2 ? '1518770660439-4636190af475' : '1553877522-43269d4ea984'}?auto=format&fit=crop&w=1200&q=80`}
                    alt={solution.title}
                    fill
                    loading="lazy"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>

              {/* Text & Deliverables Column (Scrolling) */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`lg:col-span-6 space-y-12 ${index % 2 === 1 ? 'lg:order-1 lg:col-start-1' : 'lg:order-2 lg:col-start-7'}`}
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl font-black text-slate-200 dark:text-white/5">{solution.number}</span>
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg
                      ${solution.accentColor === 'primary' ? 'bg-cyan-500 text-white shadow-cyan-500/30' : ''}
                      ${solution.accentColor === 'secondary' ? 'bg-indigo-500 text-white shadow-indigo-500/30' : ''}
                      ${solution.accentColor === 'primary-container' ? 'bg-purple-500 text-white shadow-purple-500/30' : ''}
                      ${solution.accentColor === 'tertiary' ? 'bg-emerald-500 text-white shadow-emerald-500/30' : ''}
                    `}>
                      {renderIcon(solution.id, "w-6 h-6")}
                    </div>
                  </div>
                  <h2 className="font-display text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                    {solution.title}
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-8">
                    {solution.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-bold text-slate-600 dark:text-slate-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white dark:bg-[#12121a] rounded-3xl p-8 sm:p-10 border border-slate-200/80 dark:border-white/10 shadow-sm">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-8">
                    What We Deliver
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {solution.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-4 group">
                        <CheckCircle2 className="w-6 h-6 text-cyan-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <div>
                          <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">{item.name}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </main>
  );
}
