"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle2, AlertCircle, Clock } from "lucide-react";
import { NEPTUNE_DATA } from "@/data/neptune-data";
import { analytics } from "@/lib/analytics";

export default function Contact() {
  const { company } = NEPTUNE_DATA;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    service: "AI & Business Automation",
    timeline: "1 - 3 Months",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Unable to send inquiry. Please email us directly.");
      }

      analytics.trackContactSubmission({
        service: formData.service,
        timeline: formData.timeline,
        company: formData.company,
      });

      setStatus("success");
    } catch (err: unknown) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-white dark:bg-[#09090b] border-t border-slate-200/80 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info & Positioning */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
                Let&apos;s Build Your <span className="text-gradient-cyan-blue">Next Advantage</span>
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                Whether you need to automate unstructured business pipelines, design a robust custom web platform, or validate an MVP architecture, our senior team is ready.
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-[#121622] border border-slate-200 dark:border-white/10 hover:border-cyan-500/50 dark:hover:border-primary/40 transition-all hover-lift shadow-card-light dark:shadow-none group"
                >
                  <div className="p-3.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-primary group-hover:bg-cyan-500 group-hover:text-white dark:group-hover:bg-primary dark:group-hover:text-black transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block">Direct Contact Email</span>
                    <span className="font-mono text-sm sm:text-base text-slate-900 dark:text-white font-bold group-hover:text-cyan-600 dark:group-hover:text-primary transition-colors">
                      {company.email}
                    </span>
                  </div>
                </a>

                <div className="p-5 rounded-2xl bg-white dark:bg-[#121622] border border-slate-200 dark:border-white/10 flex items-start gap-4 shadow-card-light dark:shadow-none">
                  <div className="p-3.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-secondary">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block">Direct Response Guarantee</span>
                    <span className="text-sm text-slate-900 dark:text-white font-medium">
                      All technical inquiries receive a direct response within 24 business hours.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Confidentiality pledge */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-white/5 text-xs text-slate-500 dark:text-slate-500">
              We respect your intellectual property. All project discussions and technical briefs are held in strict commercial confidence.
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#121622] border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-2xl relative">
              {status === "success" ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto text-cyan-600 dark:text-primary animate-in zoom-in-50">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.fullName}. A senior engineer will review your brief and get in touch with you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setFormData({
                        fullName: "",
                        email: "",
                        company: "",
                        service: "AI & Business Automation",
                        timeline: "1 - 3 Months",
                        message: "",
                      });
                    }}
                    className="mt-6 px-6 py-2.5 rounded-full text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-white dark:hover:bg-white/20 transition-colors"
                  >
                    Submit Another Brief
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0a0d14] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:border-cyan-500 dark:focus:border-primary transition-colors focus:outline-none"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0a0d14] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:border-cyan-500 dark:focus:border-primary transition-colors focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">
                      Company / Organization (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Enterprises"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0a0d14] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:border-cyan-500 dark:focus:border-primary transition-colors focus:outline-none"
                    />
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label htmlFor="service" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0a0d14] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:border-cyan-500 dark:focus:border-primary transition-colors focus:outline-none"
                    >
                      <option value="AI & Business Automation">AI & Business Automation</option>
                      <option value="Custom Business Software">Custom Business Software</option>
                      <option value="Product Engineering">Product Engineering</option>
                      <option value="Technology Consulting">Technology Consulting</option>
                    </select>
                  </div>

                  {/* Estimated Timeline */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">
                      Estimated Project Timeline
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {["< 1 Month", "1 - 3 Months", "3 - 6 Months", "Advisory / Flexible"].map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => setFormData({ ...formData, timeline: t })}
                          className={`px-3 py-2 rounded-xl text-xs font-medium border transition-all ${
                            formData.timeline === t
                              ? "bg-cyan-500/15 border-cyan-500 text-cyan-900 dark:text-primary font-bold shadow-sm"
                              : "bg-slate-50 dark:bg-[#0a0d14] border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">
                      Brief Project Overview *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about the business problem, operational context, and technical requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0a0d14] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:border-cyan-500 dark:focus:border-primary transition-colors focus:outline-none resize-none"
                    />
                  </div>

                  {errorMessage && (
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-700 dark:text-red-300 text-xs">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-4 rounded-full font-bold text-sm text-slate-950 dark:text-[#0a0d14] bg-cyan-400 dark:bg-primary hover:bg-cyan-300 dark:hover:bg-white transition-all shadow-md dark:shadow-glow hover:shadow-lg dark:hover:shadow-glow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? (
                      <span>Sending Brief...</span>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
