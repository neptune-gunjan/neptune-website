import Link from "next/link";
import { ArrowUp, Mail, Shield, Sparkles } from "lucide-react";
import { NEPTUNE_DATA } from "@/data/neptune-data";

export default function Footer() {
  const { company, about, coreServices } = NEPTUNE_DATA;

  return (
    <footer className="bg-slate-100 dark:bg-[#060609] border-t border-slate-200/80 dark:border-white/10 text-slate-600 dark:text-slate-400 text-sm pt-16 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-200 dark:border-white/5">
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-[1.5px] shadow-sm">
                <div className="w-full h-full bg-white dark:bg-[#09090b] rounded-[10px] flex items-center justify-center">
                  <span className="font-display font-black text-xl text-transparent bg-clip-text bg-gradient-to-tr from-cyan-500 to-purple-500">
                    N
                  </span>
                </div>
              </div>
              <span className="font-display font-bold text-xl text-slate-900 dark:text-white">
                {company.brandName}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              {about.whoWeAre}
            </p>
            <div className="pt-2">
              <span className="text-xs font-bold text-cyan-700 dark:text-cyan-400 block uppercase tracking-wider">
                {company.tagline}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-500 block mt-0.5">
                {company.positioning}
              </span>
            </div>
          </div>

          {/* Col 3: Core Practices */}
          <div>
            <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider block mb-4">
              Core Practices
            </span>
            <ul className="space-y-2.5 text-xs">
              {coreServices.map((service) => (
                <li key={service.id}>
                  <a href="#services" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div>
            <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider block mb-4">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="/#services" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Solutions
                </a>
              </li>
              <li>
                <a href="/#why-neptune" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Why Neptune
                </a>
              </li>
              <li>
                <a href="/#work" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="/#process" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  How We Work
                </a>
              </li>
              <li>
                <a href="/#testimonials" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Client Testimonials
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Book a Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact & Inquiries */}
          <div>
            <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider block mb-4">
              Connect
            </span>
            <div className="space-y-3 text-xs">
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 text-slate-900 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-mono"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span>{company.email}</span>
              </a>
              <div className="flex items-start gap-2 text-slate-500 dark:text-slate-400">
                <Shield className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                <span>Commercial Non-Disclosure &amp; Confidentiality Assured</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div>
            © {company.establishedYear} {company.brandName}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1 font-medium">
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
