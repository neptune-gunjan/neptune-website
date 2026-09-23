"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Search } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CursorGlow from "@/components/ui/CursorGlow";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#09090b] text-slate-900 dark:text-[#dfe2f0] transition-colors duration-300 flex flex-col">
      <CursorGlow />
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center pt-32 pb-24 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-cyan-500/10 via-indigo-500/5 to-transparent rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-40 dark:opacity-20" />

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
            className="w-24 h-24 mx-auto rounded-3xl bg-white dark:bg-[#12121a] border border-slate-200 dark:border-white/10 shadow-xl flex items-center justify-center mb-8"
          >
            <Search className="w-10 h-10 text-cyan-500" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-7xl sm:text-9xl font-black text-slate-900 dark:text-white tracking-tighter mb-4"
          >
            4<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-500">0</span>4
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-4"
          >
            Page not found
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-md mx-auto"
          >
            The page you are looking for doesn't exist or has been moved. Let's get you back on track.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}

