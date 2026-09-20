import { Award } from "lucide-react";
import { NEPTUNE_DATA } from "@/data/neptune-data";

export default function Experience() {
  const { experience } = NEPTUNE_DATA;

  return (
    <section id="experience" className="py-24 relative bg-white dark:bg-[#0a0d14] border-t border-slate-200/80 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 text-xs font-bold text-indigo-800 dark:text-secondary uppercase tracking-wider mb-4 shadow-sm">
            Proven Track Record
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {experience.heading}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 mb-3">
            {experience.note}
          </p>
          <span className="text-xs text-slate-500 dark:text-slate-500 block italic">
            * {experience.disclaimer}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experience.items.map((exp) => (
            <div
              key={exp.company}
              className="p-7 rounded-2xl bg-slate-50 dark:bg-[#121622] border border-slate-200 dark:border-white/10 hover:border-indigo-500/50 dark:hover:border-secondary/30 transition-all hover-lift flex flex-col justify-between shadow-card-light dark:shadow-none"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display font-black text-2xl text-slate-900 dark:text-white tracking-tight">
                    {exp.company}
                  </span>
                  <div className="p-2 rounded-xl bg-white dark:bg-white/5 text-indigo-600 dark:text-secondary shadow-sm dark:shadow-none">
                    <Award className="w-4 h-4" />
                  </div>
                </div>
                <span className="text-xs font-bold text-cyan-700 dark:text-primary block mb-3">
                  {exp.role}
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {exp.contribution}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200/80 dark:border-white/5">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-white dark:bg-white/5 text-slate-700 dark:text-slate-400 border border-slate-200 dark:border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
