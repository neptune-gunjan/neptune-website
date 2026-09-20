import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neptune Consulting Services | Technology Consulting + Product Engineering",
  description: "Technology. Strategy. Solutions. Practical AI, custom enterprise software, and scalable cloud product engineering built around your business workflows.",
  keywords: [
    "Neptune Consulting Services",
    "AI Automation",
    "Product Engineering",
    "Custom Software Development",
    "Technology Consulting",
    "Enterprise RAG",
    "SaaS Architecture"
  ],
  authors: [{ name: "Neptune Consulting Services" }],
  openGraph: {
    title: "Neptune Consulting Services | Technology Consulting + Product Engineering",
    description: "We don't start with technology. We start with the problem. Explore practical AI, enterprise RAG, and custom software solutions.",
    type: "website",
    locale: "en_US",
    siteName: "Neptune Consulting Services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neptune Consulting Services",
    description: "Technology Consulting + Product Engineering. Understand → Design → Build → Deploy → Scale.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('neptune_theme');
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="font-sans bg-white dark:bg-[#0f131d] text-slate-900 dark:text-[#dfe2f0] antialiased selection:bg-cyan-500/20 selection:text-cyan-600 dark:selection:text-primary transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
