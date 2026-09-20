import { notFound } from "next/navigation";
import { NEPTUNE_DATA } from "@/data/neptune-data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";

// This generates static paths for all projects and case studies at build time
export function generateStaticParams() {
  const allItems = [...NEPTUNE_DATA.projects, ...NEPTUNE_DATA.caseStudies];
  return allItems.map((item) => ({
    id: item.id,
  }));
}

export default function WorkDetail({ params }: { params: { id: string } }) {
  const allItems = [...NEPTUNE_DATA.projects, ...NEPTUNE_DATA.caseStudies];
  const item = allItems.find((i) => i.id === params.id);

  if (!item) {
    notFound();
  }

  const isCaseStudy = item.type === "case-study";
  const caseStudy = isCaseStudy ? item : null;
  const project = !isCaseStudy ? item : null;

  return (
    <main className="min-h-screen bg-white dark:bg-[#09090b] text-slate-900 dark:text-[#dfe2f0] transition-colors duration-300">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-10">
        <div className="mb-8">
          <Link href="/#work" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Selected Work
          </Link>
        </div>

        <div className="flex items-center gap-3 mb-6 flex-wrap">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-50 dark:bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/30">
            {item.badge}
          </span>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
            {isCaseStudy ? caseStudy?.sections.overview.industry : project?.industry}
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6">
          {item.name}
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
          {item.shortDescription}
        </p>
      </section>

      {/* Main Feature Image */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-20">
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl">
          <Image
            src={item.image}
            alt={item.name}
            fill
            unoptimized
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Content Body */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pb-24">
        {isCaseStudy && caseStudy ? (
          <div className="space-y-16">
            {/* The Problem */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-100 dark:border-white/5 pb-2">
                {caseStudy.sections.problem.title}
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                {caseStudy.sections.problem.content}
              </p>
            </div>

            {/* The Challenge */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-100 dark:border-white/5 pb-2">
                {caseStudy.sections.challenge.title}
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                {caseStudy.sections.challenge.content}
              </p>
            </div>

            {/* The Approach */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-100 dark:border-white/5 pb-2">
                {caseStudy.sections.approach.title}
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                {caseStudy.sections.approach.content}
              </p>
            </div>

            {/* The Solution */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-100 dark:border-white/5 pb-2">
                {caseStudy.sections.solution.title}
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-6">
                {caseStudy.sections.solution.content}
              </p>
              
              <div className="bg-slate-50 dark:bg-[#12121a] rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-white/5">
                <h3 className="font-bold text-slate-900 dark:text-white mb-4">Core Capabilities Delivered</h3>
                <ul className="space-y-3">
                  {caseStudy.sections.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Outcome */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-100 dark:border-white/5 pb-2">
                {caseStudy.sections.outcome.title}
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg font-medium">
                {caseStudy.sections.outcome.content}
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-16">
            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 text-cyan-600 dark:text-cyan-400">The Problem</h2>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                  {project?.problem}
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 text-cyan-600 dark:text-cyan-400">The Challenge</h2>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                  {project?.challenge}
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-100 dark:border-white/5 pb-2">
                Engineering Approach
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-8">
                {project?.approach}
              </p>

              <div className="bg-slate-50 dark:bg-[#12121a] rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-white/5">
                <h3 className="font-bold text-slate-900 dark:text-white mb-4">Core Capabilities Delivered</h3>
                <ul className="space-y-3">
                  {project?.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-100 dark:border-white/5 pb-2">
                Business Outcome
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg font-medium">
                {project?.outcome}
              </p>
            </div>
          </div>
        )}
        
        {/* Tech Stack Footer */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-white/10">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
            Technology Stack Utilized
          </h3>
          <div className="flex flex-wrap gap-2">
            {(isCaseStudy ? caseStudy?.sections.technology : project?.technology)?.map((tech) => (
              <span key={tech} className="px-3 py-1.5 rounded-lg text-sm font-mono bg-slate-100 dark:bg-[#181824] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Link href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 hover:opacity-95 transition-all duration-300 shadow-md">
            Start a Similar Project <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

