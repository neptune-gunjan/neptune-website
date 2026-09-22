import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CursorGlow from "@/components/ui/CursorGlow";
import { NEPTUNE_DATA } from "@/data/neptune-data";

export default function PrivacyPolicyPage() {
  const { company } = NEPTUNE_DATA;
  
  return (
    <main className="min-h-screen bg-white dark:bg-[#09090b] text-slate-900 dark:text-[#dfe2f0] transition-colors duration-300">
      <CursorGlow />
      <Navbar />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold mb-8 text-slate-900 dark:text-white">
          Privacy Policy
        </h1>
        <div className="prose prose-slate dark:prose-invert prose-p:font-medium prose-p:text-slate-600 dark:prose-p:text-slate-400 max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-xl font-bold mt-10 mb-4 text-slate-900 dark:text-white">1. Introduction</h2>
          <p>Welcome to {company.brandName}. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.</p>
          
          <h2 className="text-xl font-bold mt-10 mb-4 text-slate-900 dark:text-white">2. Data We Collect</h2>
          <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600 dark:text-slate-400 font-medium">
            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4 text-slate-900 dark:text-white">3. How We Use Your Data</h2>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600 dark:text-slate-400 font-medium">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4 text-slate-900 dark:text-white">4. Contact Us</h2>
          <p>If you have any questions about this privacy policy or our privacy practices, please contact us at {company.email}.</p>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}

