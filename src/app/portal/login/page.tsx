import Link from "next/link";
import { ArrowRight, Lock, ShieldCheck } from "lucide-react";
import Navbar from "@/components/layout/Navbar";

export const metadata = {
  title: "Client Portal Login | Neptune Consulting",
  description: "Secure login for Neptune Consulting clients.",
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#060609] text-slate-900 dark:text-[#dfe2f0] transition-colors duration-300">
      <Navbar />
      
      <div className="flex flex-col justify-center items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="w-full max-w-md">
          {/* Logo / Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-[2px] shadow-lg mb-6">
              <div className="w-full h-full bg-white dark:bg-[#09090b] rounded-[14px] flex items-center justify-center">
                <Lock className="w-6 h-6 text-cyan-500" />
              </div>
            </div>
            <h1 className="font-display text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
              Client Portal
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Sign in to manage your active projects and billing.
            </p>
          </div>

          {/* Login Card */}
          <div className="bg-white dark:bg-[#0f131d] border border-slate-200 dark:border-white/10 rounded-3xl p-8 shadow-xl shadow-cyan-500/5">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Work Email
                </label>
                <input 
                  type="email" 
                  defaultValue="demo@client.com"
                  className="w-full bg-slate-50 dark:bg-[#16161f] border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">
                    Password
                  </label>
                  <a href="#" className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline">
                    Forgot?
                  </a>
                </div>
                <input 
                  type="password" 
                  defaultValue="password123"
                  className="w-full bg-slate-50 dark:bg-[#16161f] border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                />
              </div>

              <Link 
                href="/portal/dashboard"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-md shadow-cyan-500/20 mt-6"
              >
                Sign In <ArrowRight className="w-4 h-4" />
              </Link>
            </form>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-center gap-2 text-xs font-medium text-slate-500">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              <span>Enterprise-grade encryption</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

