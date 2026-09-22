import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import CursorGlow from "@/components/ui/CursorGlow";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#09090b] text-slate-900 dark:text-[#dfe2f0] transition-colors duration-300">
      <CursorGlow />
      <Navbar />
      <div className="pt-24">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}

