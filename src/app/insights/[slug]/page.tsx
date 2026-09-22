import { notFound } from "next/navigation";
import { INSIGHTS_DATA } from "@/data/insights-data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import ReactMarkdown from 'react-markdown';

// Generate static routes at build time
export function generateStaticParams() {
  return INSIGHTS_DATA.map((post) => ({
    slug: post.slug,
  }));
}

export default function InsightDetail({ params }: { params: { slug: string } }) {
  const post = INSIGHTS_DATA.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white dark:bg-[#09090b] text-slate-900 dark:text-[#dfe2f0] transition-colors duration-300">
      <Navbar />
      
      <article className="pt-32 pb-24">
        {/* Header */}
        <header className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-12">
          <Link href="/insights" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" /> Back to Insights
          </Link>
          
          <div className="flex items-center gap-4 text-sm font-medium text-slate-500 dark:text-slate-400 mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-50 dark:bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/30">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric'})}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readTime}</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-8">
            {post.title}
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-4 pt-6 border-t border-slate-200 dark:border-white/10">
            <div>
              <p className="font-bold text-slate-900 dark:text-white">{post.author.name}</p>
              <p className="text-sm text-slate-500">{post.author.role}</p>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-16">
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Markdown Content */}
        <div className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto prose prose-lg dark:prose-invert prose-cyan prose-headings:font-display prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-a:text-cyan-600 dark:prose-a:text-cyan-400">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
        
        {/* Tags */}
        <div className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto mt-16 pt-8 border-t border-slate-200 dark:border-white/10">
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="px-3 py-1.5 rounded-lg text-sm font-mono bg-slate-100 dark:bg-[#181824] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}

