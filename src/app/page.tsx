import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import WhatWeDo from "@/components/sections/WhatWeDo";
import WhyNeptune from "@/components/sections/WhyNeptune";
import ProjectsAndCaseStudies from "@/components/sections/ProjectsAndCaseStudies";
import OurProcess from "@/components/sections/OurProcess";
import Testimonials from "@/components/sections/Testimonials";
import CtaBanner from "@/components/sections/CtaBanner";
import Footer from "@/components/layout/Footer";
import CursorGlow from "@/components/ui/CursorGlow";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#09090b] text-slate-900 dark:text-[#dfe2f0] selection:bg-cyan-500/20 selection:text-cyan-800 dark:selection:text-cyan-300 transition-colors duration-300">
      <CursorGlow />
      <Navbar />
      <Hero />
      <WhatWeDo />
      <ProjectsAndCaseStudies />
      <OurProcess />
      <WhyNeptune />
      <Testimonials />
      <CtaBanner />
      <Footer />
    </main>
  );
}
