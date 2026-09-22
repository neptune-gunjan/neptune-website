import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CtaBanner from "@/components/sections/CtaBanner";
import CursorGlow from "@/components/ui/CursorGlow";
import { NEPTUNE_DATA } from "@/data/neptune-data";
import { Bot, Globe, Cloud, Lightbulb, CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  const { solutions } = NEPTUNE_DATA;

  // Map icon strings to actual Lucide components
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
      
      {/* Services Hero */}
      <section className="pt-36 pb-20 relative overflow-hidden bg-white dark:bg-[#09090b] border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tighter mb-8">
              Services & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-500">Capabilities</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              We design, build, and scale custom software and AI systems engineered specifically for your business operations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {solutions.map((solution, index) => (
            <div key={solution.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
              
              {/* Left Column: Number & Title */}
              <div className="lg:col-span-4 sticky top-32">
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
                <p className="text-base text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-6">
                  {solution.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {solution.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-bold text-slate-600 dark:text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Deliverables */}
              <div className="lg:col-span-7 lg:col-start-6">
                <div className="bg-white dark:bg-[#12121a] rounded-3xl p-8 sm:p-10 border border-slate-200/80 dark:border-white/10 shadow-sm">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-8">
                    What We Deliver
                  </h3>
                  <div className="space-y-8">
                    {solution.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 text-cyan-500 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.name}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </main>
  );
}

