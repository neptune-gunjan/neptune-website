import { INSIGHTS_DATA } from "@/data/insights-data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export const metadata = {
  title: "Insights & Engineering Blog | Neptune Consulting",
  description: "Read the latest thoughts on practical AI automation, custom enterprise software, and technology consulting.",
};

export default function InsightsList() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#09090b] text-slate-900 dark:text-[#dfe2f0] transition-colors duration-300">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/30 text-xs font-bold text-cyan-800 dark:text-cyan-300 uppercase tracking-wider mb-6">
            <span>Engineering Blog</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6">
            Latest <span className="text-gradient-cyan-blue">Insights</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Thoughts, case studies, and engineering updates on building scalable software and practical AI workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {INSIGHTS_DATA.map((post) => (
            <Link 
              href={`/insights/${post.slug}`} 
              key={post.id}
              className="group flex flex-col bg-slate-50 dark:bg-[#12121a] rounded-3xl overflow-hidden border border-slate-200 dark:border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-white/95 dark:bg-[#09090b]/90 text-cyan-800 dark:text-cyan-300 backdrop-blur-md shadow-sm border border-white/20">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400 mb-4">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric'})}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                </div>
                
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-slate-600 dark:text-slate-400 line-clamp-3 mb-6 flex-1">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-white/5 mt-auto">
                  <span className="text-sm font-semibold text-slate-900 dark:text-slate-300">
                    {post.author.name}
                  </span>
                  <span className="text-sm font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

