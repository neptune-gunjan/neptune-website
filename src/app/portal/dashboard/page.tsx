import Link from "next/link";
import { 
  LogOut, 
  LayoutDashboard, 
  CreditCard, 
  Settings, 
  ExternalLink,
  CheckCircle2,
  Clock
} from "lucide-react";

export const metadata = {
  title: "Dashboard | Client Portal",
  description: "Manage your projects and billing.",
};

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#060609] text-slate-900 dark:text-[#dfe2f0] transition-colors duration-300">
      
      {/* Portal Topbar */}
      <header className="bg-white dark:bg-[#0f131d] border-b border-slate-200 dark:border-white/10 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-white font-black font-display">
              N
            </div>
            <span className="font-bold text-sm tracking-wide">Client Portal</span>
          </div>
          <Link href="/" className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
            <LogOut className="w-4 h-4" />
            Sign Out
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar */}
        <aside className="w-full md:w-64 shrink-0">
          <nav className="space-y-1">
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 font-bold text-sm">
              <LayoutDashboard className="w-4 h-4" />
              Active Project
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 font-medium text-sm hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
              <CreditCard className="w-4 h-4" />
              Invoices & Billing
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 font-medium text-sm hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
              <Settings className="w-4 h-4" />
              Company Profile
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 space-y-8">
          
          {/* Welcome Banner */}
          <div className="bg-white dark:bg-[#0f131d] rounded-3xl p-8 border border-slate-200 dark:border-white/10 shadow-sm">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Welcome back, Acme Corp</h1>
            <p className="text-slate-500 dark:text-slate-400">Here is the current status of your active automation project.</p>
          </div>

          {/* Project Status Card */}
          <div className="bg-white dark:bg-[#0f131d] rounded-3xl p-8 border border-slate-200 dark:border-white/10 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Customer Support AI Agent</h2>
                <p className="text-sm text-cyan-600 dark:text-cyan-400 font-medium mt-1">Phase 3: Development</p>
              </div>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-400 text-xs font-bold rounded-full border border-green-200 dark:border-green-500/20">
                On Track
              </span>
            </div>

            {/* Progress Bar */}
            <div className="mb-10">
              <div className="flex justify-between text-xs font-bold text-slate-500 mb-2">
                <span>Overall Progress</span>
                <span className="text-cyan-600 dark:text-cyan-400">65%</span>
              </div>
              <div className="w-full h-3 bg-slate-100 dark:bg-[#16161f] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 w-[65%] rounded-full" />
              </div>
            </div>

            {/* Milestones */}
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[11px] before:w-0.5 before:bg-slate-100 dark:before:bg-white/10">
              <div className="relative flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-cyan-500 text-white flex items-center justify-center shrink-0 z-10 shadow-sm">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">Data Architecture & Scope</h3>
                  <p className="text-xs text-slate-500 mt-1">Completed on Oct 12, 2024</p>
                </div>
              </div>
              <div className="relative flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-cyan-500 text-white flex items-center justify-center shrink-0 z-10 shadow-sm">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">UI/UX Mockups Approved</h3>
                  <p className="text-xs text-slate-500 mt-1">Completed on Oct 28, 2024</p>
                </div>
              </div>
              <div className="relative flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-white dark:bg-[#16161f] border-2 border-cyan-500 flex items-center justify-center shrink-0 z-10 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-cyan-500" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">Backend RAG Implementation</h3>
                  <p className="text-xs text-cyan-600 dark:text-cyan-400 font-medium mt-1">In Progress</p>
                </div>
              </div>
              <div className="relative flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-white/10 border-2 border-white dark:border-[#0f131d] flex items-center justify-center shrink-0 z-10">
                  <Clock className="w-3 h-3 text-slate-400" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-400 dark:text-slate-500">UAT & Final Testing</h3>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Upcoming</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="#" className="bg-white dark:bg-[#0f131d] p-6 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm hover:border-cyan-500/30 transition-colors group flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Staging Environment</h3>
                <p className="text-xs text-slate-500">View the latest build</p>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-500 transition-colors" />
            </a>
            <a href="#" className="bg-white dark:bg-[#0f131d] p-6 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm hover:border-cyan-500/30 transition-colors group flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Project Requirements</h3>
                <p className="text-xs text-slate-500">View approved PRD</p>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-500 transition-colors" />
            </a>
          </div>

        </div>
      </div>
    </main>
  );
}

