"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award } from "lucide-react";
import { NEPTUNE_DATA } from "@/data/neptune-data";

export default function TrustedBy() {
  const { trustedClients } = NEPTUNE_DATA;

  return (
    <section className="py-14 bg-slate-50/70 dark:bg-[#0c0c10] border-y border-slate-200/80 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs uppercase font-bold tracking-widest text-slate-500 dark:text-slate-400 mb-8 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
          <span>Trusted by high-growth startups &amp; engineering leaders</span>
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14">
          {trustedClients.map((client) => (
            <motion.div
              key={client.name}
              whileHover={{ scale: 1.05 }}
              className="px-5 py-3 rounded-xl bg-white dark:bg-[#14141d] border border-slate-200/80 dark:border-white/10 shadow-sm flex items-center gap-3 transition-all"
            >
              <div className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400" />
              <div className="text-left">
                <span className="font-display font-extrabold text-sm sm:text-base text-slate-900 dark:text-white block">
                  {client.name}
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium">
                  {client.industry}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

