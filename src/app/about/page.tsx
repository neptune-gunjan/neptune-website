import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhyNeptune from "@/components/sections/WhyNeptune";
import CtaBanner from "@/components/sections/CtaBanner";
import CursorGlow from "@/components/ui/CursorGlow";
import { NEPTUNE_DATA } from "@/data/neptune-data";

export default function AboutPage() {
  const { about, company } = NEPTUNE_DATA;

  return (
    <main className="min-h-screen bg-white dark:bg-[#09090b] text-slate-900 dark:text-[#dfe2f0] transition-colors duration-300">
      <CursorGlow />
      <Navbar />
      
      {/* About Hero */}
      <section className="pt-36 pb-20 relative overflow-hidden border-b border-slate-200/80 dark:border-white/5">
        <div className="absolute inset-0 bg-slate-50 dark:bg-[#09090b] -z-10"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400 mb-6">
              About {company.brandName}
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tighter mb-8">
              We build technology that creates <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-500">measurable impact</span>.
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              {about.whoWeAre}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white dark:bg-[#09090b] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="p-10 rounded-3xl bg-slate-50 dark:bg-[#12121a] border border-slate-200/80 dark:border-white/10 hover:border-cyan-500/30 transition-colors">
              <h2 className="text-sm font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-4">Our Mission</h2>
              <p className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-relaxed">
                {about.mission}
              </p>
            </div>
            <div className="p-10 rounded-3xl bg-slate-50 dark:bg-[#12121a] border border-slate-200/80 dark:border-white/10 hover:border-indigo-500/30 transition-colors">
              <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-4">Our Vision</h2>
              <p className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-relaxed">
                {about.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach / Core Focus */}
      <section className="py-24 bg-slate-50 dark:bg-[#09090b] border-t border-slate-200/80 dark:border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
              Our Core Focus
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium">
              We specialize in deep technical engineering across these key domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {about.focusAreas.map((area, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-[#161622] border border-slate-200 dark:border-white/5 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-bold mb-4">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyNeptune />
      <CtaBanner />
      <Footer />
    </main>
  );
}

