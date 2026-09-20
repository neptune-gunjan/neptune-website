"use client";

import { useEffect } from "react";
import { X, ShieldAlert, CheckCircle2, ArrowRight } from "lucide-react";
import { CaseStudy, Project } from "@/types";
import { analytics } from "@/lib/analytics";

interface CaseStudyModalProps {
  item: CaseStudy | Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CaseStudyModal({ item, isOpen, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  const isCaseStudy = item.type === "case-study";
  const caseStudy = isCaseStudy ? (item as CaseStudy) : null;
  const project = !isCaseStudy ? (item as Project) : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 dark:bg-[#07090e]/85 modal-backdrop transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-surface rounded-3xl border border-slate-200 dark:border-white/10 shadow-2xl overflow-y-auto z-10 custom-scrollbar text-slate-900 dark:text-white">
        {/* Modal Header */}
        <div className="sticky top-0 z-20 bg-white/95 dark:bg-surface/90 backdrop-blur-md px-6 py-5 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-50 dark:bg-primary/10 text-cyan-700 dark:text-primary border border-cyan-500/20 dark:border-primary/20">
              {item.badge}
            </span>
            <span className="text-xs text-slate-500 dark:text-muted hidden sm:inline">
              {item.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-600 dark:text-muted hover:text-slate-900 dark:hover:text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Title & Short Description */}
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
              {item.name}
            </h2>
            <p className="text-base text-slate-600 dark:text-[#a2b0b4] leading-relaxed">
              {item.shortDescription}
            </p>
          </div>

          {/* Confidentiality Notice if applicable */}
          {caseStudy?.confidentialityNotice && (
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-200 text-xs sm:text-sm">
              <ShieldAlert className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block text-amber-900 dark:text-amber-300 mb-1">
                  Confidential Engagement Notice
                </span>
                <p className="text-amber-800/90 dark:text-amber-200/80 leading-relaxed">
                  {caseStudy.confidentialityNotice}
                </p>
              </div>
            </div>
          )}

          {/* Detailed Case Study Sections */}
          {caseStudy && (
            <div className="space-y-8 divide-y divide-slate-200 dark:divide-white/5">
              {/* Problem & Challenge */}
              <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0f131d] border border-slate-200 dark:border-white/5">
                  <span className="text-xs font-bold text-cyan-700 dark:text-primary uppercase tracking-wider block mb-2">
                    {caseStudy.sections.problem.title}
                  </span>
                  <p className="text-sm text-slate-600 dark:text-[#a2b0b4] leading-relaxed">
                    {caseStudy.sections.problem.content}
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0f131d] border border-slate-200 dark:border-white/5">
                  <span className="text-xs font-bold text-indigo-700 dark:text-secondary uppercase tracking-wider block mb-2">
                    {caseStudy.sections.challenge.title}
                  </span>
                  <p className="text-sm text-slate-600 dark:text-[#a2b0b4] leading-relaxed">
                    {caseStudy.sections.challenge.content}
                  </p>
                </div>
              </div>

              {/* Approach & Solution */}
              <div className="pt-6 space-y-4">
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0f131d] border border-slate-200 dark:border-white/5">
                  <span className="text-xs font-bold text-cyan-700 dark:text-primary uppercase tracking-wider block mb-2">
                    {caseStudy.sections.approach.title}
                  </span>
                  <p className="text-sm text-slate-700 dark:text-[#dfe2f0] leading-relaxed mb-4">
                    {caseStudy.sections.approach.content}
                  </p>
                  <span className="text-xs font-bold text-indigo-700 dark:text-secondary uppercase tracking-wider block mb-2">
                    {caseStudy.sections.solution.title}
                  </span>
                  <p className="text-sm text-slate-700 dark:text-[#dfe2f0] leading-relaxed">
                    {caseStudy.sections.solution.content}
                  </p>
                </div>
              </div>

              {/* Architecture Pipeline */}
              <div className="pt-6">
                <span className="text-xs font-bold text-cyan-700 dark:text-primary uppercase tracking-wider block mb-4">
                  {caseStudy.sections.architecture.title} — Hybrid RAG Execution Pipeline
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                  {caseStudy.sections.architecture.steps.map((step, idx) => (
                    <div
                      key={step.label}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-surface-elevated border border-slate-200 dark:border-white/5 relative flex flex-col justify-between shadow-sm dark:shadow-none"
                    >
                      <div>
                        <span className="font-mono text-[10px] text-cyan-700 dark:text-primary block mb-1">
                          STEP 0{idx + 1}
                        </span>
                        <h4 className="font-display font-semibold text-xs sm:text-sm text-slate-900 dark:text-white mb-2">
                          {step.label}
                        </h4>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-muted leading-tight">
                        {step.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Capabilities checklist */}
              <div className="pt-6">
                <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider block mb-4">
                  Engineered Capabilities
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {caseStudy.sections.capabilities.map((cap) => (
                    <div key={cap} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-[#dfe2f0]">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-primary shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcome & What's Next */}
              <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-cyan-50 dark:bg-primary/5 border border-cyan-200 dark:border-primary/20">
                  <span className="text-xs font-bold text-cyan-800 dark:text-primary uppercase tracking-wider block mb-2">
                    {caseStudy.sections.outcome.title}
                  </span>
                  <p className="text-sm text-slate-700 dark:text-[#dfe2f0] leading-relaxed">
                    {caseStudy.sections.outcome.content}
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-indigo-50 dark:bg-secondary/5 border border-indigo-200 dark:border-secondary/20">
                  <span className="text-xs font-bold text-indigo-800 dark:text-secondary uppercase tracking-wider block mb-2">
                    {caseStudy.sections.whatNext.title}
                  </span>
                  <p className="text-sm text-slate-700 dark:text-[#dfe2f0] leading-relaxed">
                    {caseStudy.sections.whatNext.content}
                  </p>
                </div>
              </div>

              {/* Technology Badges */}
              <div className="pt-6 flex flex-wrap gap-2">
                {caseStudy.sections.technology.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Project Details View */}
          {project && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0f131d] border border-slate-200 dark:border-white/5">
                  <span className="text-xs font-bold text-cyan-700 dark:text-primary uppercase tracking-wider block mb-2">
                    The Problem
                  </span>
                  <p className="text-sm text-slate-600 dark:text-[#a2b0b4] leading-relaxed">
                    {project.problem}
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0f131d] border border-slate-200 dark:border-white/5">
                  <span className="text-xs font-bold text-indigo-700 dark:text-secondary uppercase tracking-wider block mb-2">
                    The Solution
                  </span>
                  <p className="text-sm text-slate-600 dark:text-[#a2b0b4] leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Architecture Blueprint */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0f131d] border border-slate-200 dark:border-white/5">
                <span className="text-xs font-bold text-cyan-700 dark:text-primary uppercase tracking-wider block mb-2">
                  System Architecture
                </span>
                <p className="text-sm font-mono text-cyan-900 dark:text-[#c3f5ff] leading-relaxed">
                  {project.architecture}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider block mb-3">
                  Core Features
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.capabilities.map((cap) => (
                    <div key={cap} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-[#dfe2f0]">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-primary shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-4">
                {project.technology.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Modal Bottom CTA */}
          <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500 dark:text-muted">
              Interested in similar architecture for your organization?
            </span>
            <a
              href="#contact"
              onClick={() => {
                analytics.trackCtaClick(`Consultation from Modal: ${item.name}`, "case_study_modal");
                onClose();
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-slate-950 dark:text-[#0f131d] bg-cyan-400 dark:bg-primary hover:bg-cyan-300 dark:hover:bg-white transition-all shadow-md dark:shadow-glow"
            >
              <span>Discuss This Solution</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
