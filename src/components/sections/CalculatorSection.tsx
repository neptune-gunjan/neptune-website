"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingDown, ArrowRight } from "lucide-react";

export default function CalculatorSection() {
  const [teamSize, setTeamSize] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(45);
  const [hoursPerWeek, setHoursPerWeek] = useState(12);

  const [weeklyCost, setWeeklyCost] = useState(0);
  const [annualCost, setAnnualCost] = useState(0);
  const [annualSavings, setAnnualSavings] = useState(0);

  useEffect(() => {
    const costPerWeek = teamSize * hourlyRate * hoursPerWeek;
    const costPerYear = costPerWeek * 52;
    // Assuming a conservative 65% reduction in manual tasks via AI automation
    const savings = costPerYear * 0.65;

    setWeeklyCost(costPerWeek);
    setAnnualCost(costPerYear);
    setAnnualSavings(savings);
  }, [teamSize, hourlyRate, hoursPerWeek]);

  const formatCurrency = (value: number) => 
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);

  return (
    <section className="py-24 relative bg-white dark:bg-[#09090b] border-t border-slate-200/80 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Calculate Your <span className="text-gradient-cyan-blue">Automation ROI</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Discover how much capital your business is losing to repetitive manual tasks, and see the financial impact of implementing practical AI workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Interactive Sliders */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-slate-50 dark:bg-[#12121a] rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-white/10 shadow-lg dark:shadow-none"
          >
            <div className="space-y-10">
              {/* Team Size */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="font-bold text-slate-900 dark:text-white">Team Size</label>
                  <span className="font-mono text-xl text-cyan-600 dark:text-cyan-400 font-bold">{teamSize} Employees</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="100" 
                  value={teamSize} 
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
              </div>

              {/* Hourly Rate */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="font-bold text-slate-900 dark:text-white">Average Hourly Rate</label>
                  <span className="font-mono text-xl text-cyan-600 dark:text-cyan-400 font-bold">${hourlyRate}/hr</span>
                </div>
                <input 
                  type="range" 
                  min="15" 
                  max="150" 
                  step="5"
                  value={hourlyRate} 
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
              </div>

              {/* Hours per week on manual tasks */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="font-bold text-slate-900 dark:text-white">Manual Tasks Per Week (Per Person)</label>
                  <span className="font-mono text-xl text-cyan-600 dark:text-cyan-400 font-bold">{hoursPerWeek} Hours</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="40" 
                  value={hoursPerWeek} 
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
                <p className="text-xs text-slate-500 mt-2">Time spent on data entry, manual reporting, email triage, etc.</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Results Dashboard */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-600/20 blur-3xl rounded-full" />
            <div className="relative bg-white dark:bg-[#0c0c12] rounded-3xl p-8 border border-slate-200 dark:border-white/10 shadow-2xl">
              
              <div className="mb-8 pb-8 border-b border-slate-100 dark:border-white/10">
                <span className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">Current Annual Waste</span>
                <span className="font-display text-4xl font-black text-slate-900 dark:text-white block">
                  {formatCurrency(annualCost)}
                </span>
                <span className="text-xs text-red-500 mt-2 flex items-center gap-1 font-medium">
                  <TrendingDown className="w-3 h-3" /> That's {formatCurrency(weeklyCost)} burned every week
                </span>
              </div>

              <div className="mb-8">
                <span className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">Estimated AI Savings (65%)</span>
                <span className="font-display text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-sky-400 block">
                  {formatCurrency(annualSavings)}
                </span>
                <span className="text-xs text-slate-500 mt-2 block">Projected capital recovered per year via automation</span>
              </div>

              <a 
                href="/#contact" 
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20"
              >
                Reclaim Your Capital <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

