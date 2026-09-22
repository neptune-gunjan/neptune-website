import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CursorGlow from "@/components/ui/CursorGlow";
import { NEPTUNE_DATA } from "@/data/neptune-data";

export default function TermsOfServicePage() {
  const { company } = NEPTUNE_DATA;
  
  return (
    <main className="min-h-screen bg-white dark:bg-[#09090b] text-slate-900 dark:text-[#dfe2f0] transition-colors duration-300">
      <CursorGlow />
      <Navbar />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold mb-8 text-slate-900 dark:text-white">
          Terms of Service
        </h1>
        <div className="prose prose-slate dark:prose-invert prose-p:font-medium prose-p:text-slate-600 dark:prose-p:text-slate-400 max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-xl font-bold mt-10 mb-4 text-slate-900 dark:text-white">1. Agreement to Terms</h2>
          <p>These Terms of Service constitute a legally binding agreement made between you and {company.brandName} concerning your access to and use of our website and services.</p>
          
          <h2 className="text-xl font-bold mt-10 mb-4 text-slate-900 dark:text-white">2. Intellectual Property Rights</h2>
          <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") are owned or controlled by us.</p>
          
          <h2 className="text-xl font-bold mt-10 mb-4 text-slate-900 dark:text-white">3. User Representations</h2>
          <p>By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information; (3) you have the legal capacity and you agree to comply with these Terms of Service.</p>

          <h2 className="text-xl font-bold mt-10 mb-4 text-slate-900 dark:text-white">4. Limitation of Liability</h2>
          <p>In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages arising from your use of the site.</p>
          
          <h2 className="text-xl font-bold mt-10 mb-4 text-slate-900 dark:text-white">5. Governing Law</h2>
          <p>These Terms shall be governed by and defined following the laws of the jurisdiction in which {company.brandName} operates. {company.brandName} and yourself irrevocably consent that the courts shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.</p>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}

