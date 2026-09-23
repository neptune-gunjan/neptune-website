"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CtaBanner from "@/components/sections/CtaBanner";
import CursorGlow from "@/components/ui/CursorGlow";
import { NEPTUNE_DATA } from "@/data/neptune-data";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  const { about, company } = NEPTUNE_DATA;

  return (
    <main className="min-h-screen bg-white dark:bg-[#09090b] text-slate-900 dark:text-[#dfe2f0] transition-colors duration-300 overflow-hidden">
      <CursorGlow />
      <Navbar />
      
      {/* Premium Hero Section */}
      <section className="pt-40 pb-20 lg:pt-48 lg:pb-32 relative">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent -z-10 blur-3xl"></div>
        <div className="absolute top-1/4 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center_left,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent -z-10 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left Typography */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-black uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-8 shadow-sm">
                About {company.brandName}
              </div>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-[1.05] mb-8">
                Engineering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500">
                  the Future.
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                {about.whoWeAre}
              </p>
            </motion.div>

            {/* Right Image Composition */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full"
            >
              {/* Main Image */}
              <div className="absolute inset-0 right-12 bottom-12 rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-white/10 z-10">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Team Collaboration"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent mix-blend-overlay"></div>
              </div>
              {/* Offset Decorative Image */}
              <div className="absolute right-0 bottom-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-[#09090b] z-20">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
                  alt="Code Architecture"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Premium Mission & Vision */}
      <section className="py-32 relative bg-slate-950 text-white overflow-hidden border-y border-white/10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors"
            >
              <h2 className="text-sm font-bold uppercase tracking-widest text-cyan-400 mb-6 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div> Our Mission
              </h2>
              <p className="font-display text-2xl sm:text-3xl font-extrabold leading-relaxed text-slate-100">
                &quot;{about.mission}&quot;
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors mt-0 lg:mt-24"
            >
              <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-400 mb-6 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></div> Our Vision
              </h2>
              <p className="font-display text-2xl sm:text-3xl font-extrabold leading-relaxed text-slate-100">
                &quot;{about.vision}&quot;
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Focus - Bento Grid */}
      <section className="py-24 bg-slate-50 dark:bg-[#09090b] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
              Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-500">Focus</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto">
              We specialize in deep technical engineering across these key domains, keeping everything robust and highly scalable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {about.focusAreas.map((area, idx) => {
              const getFocusDescription = (title: string) => {
                switch (title) {
                  case "Web & Mobile Engineering": return "High-performance applications built for speed, scalability, and exceptional user experiences.";
                  case "Cloud Architecture": return "Resilient cloud infrastructure designed for high availability and zero-downtime deployments.";
                  case "AI & Business Automation": return "Intelligent workflows that eliminate manual friction and accelerate operational velocity.";
                  case "Technology Consulting": return "Strategic technical guidance to mitigate risk, optimize architecture, and reduce debt.";
                  case "DevOps & CI/CD": return "Automated delivery pipelines ensuring rapid, safe, and continuous production releases.";
                  case "Data & Analytics": return "Structuring unstructured business data into clear, queryable analytics for actionable insights.";
                  default: return "Deep technical expertise to solve complex engineering challenges.";
                }
              };

              return (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`flex flex-col justify-between p-8 rounded-3xl bg-white dark:bg-[#12121a] border border-slate-200/80 dark:border-white/5 shadow-sm hover:shadow-xl dark:hover:shadow-glow-blue transition-all duration-300 hover:border-cyan-500/30 group ${idx === 0 || idx === 3 || idx === 4 ? 'lg:col-span-2' : ''}`}
                >
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-bold group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                        0{idx + 1}
                      </div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-xl sm:text-2xl">{area}</h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-medium leading-relaxed">
                      {getFocusDescription(area)}
                    </p>
                  </div>
                  <div className="w-full h-1 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden mt-8">
                    <div className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Distinct "Why Us" for About Page (Vertical/List Style) */}
      <section className="py-24 bg-white dark:bg-[#0c0c12] relative border-t border-slate-200/80 dark:border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
              The <span className="text-gradient-cyan-blue">Neptune</span> Difference
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto">
              We aren't just another agency. Here is how our engineering philosophy translates into tangible advantages for your business.
            </p>
          </motion.div>

          <div className="space-y-8">
            {NEPTUNE_DATA.whyNeptune.map((pillar, index) => (
              <motion.div 
                key={pillar.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="flex flex-col sm:flex-row items-center gap-8 p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-[#14141e] border border-slate-200/80 dark:border-white/10 hover:shadow-lg dark:hover:shadow-glow-blue transition-all duration-300 group"
              >
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-white dark:bg-white/5 flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-black text-2xl border border-slate-200 dark:border-white/10 shadow-sm group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white group-hover:border-transparent transition-all">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </main>
  );
}
