import { Building2, Rocket, Bot, Database, RefreshCw, Cloud } from "lucide-react";
import { NEPTUNE_DATA } from "@/data/neptune-data";

const CAPABILITY_ICONS: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-6 h-6 text-cyan-600 dark:text-primary" />,
  Rocket: <Rocket className="w-6 h-6 text-indigo-600 dark:text-secondary" />,
  Bot: <Bot className="w-6 h-6 text-cyan-600 dark:text-primary" />,
  Database: <Database className="w-6 h-6 text-indigo-600 dark:text-secondary" />,
  Workflow: <RefreshCw className="w-6 h-6 text-cyan-600 dark:text-primary" />,
  Cloud: <Cloud className="w-6 h-6 text-indigo-600 dark:text-secondary" />,
};

export default function Capabilities() {
  const { capabilities } = NEPTUNE_DATA;

  return (
    <section id="capabilities" className="py-24 relative bg-white dark:bg-[#0a0d14] border-t border-slate-200/80 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-bold text-slate-700 dark:text-secondary uppercase tracking-wider mb-4 shadow-sm">
            Technical Capabilities
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Engineered for High-Velocity Business Impact
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Robust architectural building blocks applied across diverse operational scopes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="p-8 rounded-2xl bg-slate-50 dark:bg-[#121622] border border-slate-200 dark:border-white/10 hover:border-cyan-500/50 dark:hover:border-primary/40 transition-all duration-300 hover-lift shadow-card-light dark:shadow-none group"
            >
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 dark:group-hover:bg-primary/10 dark:group-hover:border-primary/20 transition-all shadow-sm dark:shadow-none">
                {CAPABILITY_ICONS[cap.icon] || <Building2 className="w-6 h-6 text-cyan-600 dark:text-primary" />}
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-primary transition-colors">
                {cap.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
