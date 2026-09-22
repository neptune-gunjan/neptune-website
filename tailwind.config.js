/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#09090b",
          surface: "#111116",
          card: "#16161f",
          elevated: "#1c1c28",
          border: "rgba(255, 255, 255, 0.08)",
        },
        electric: {
          blue: "#38bdf8",
          "blue-dark": "#2563eb",
          violet: "#a855f7",
          "violet-dark": "#7c3aed",
          indigo: "#6366f1",
        },
        primary: {
          DEFAULT: "#38bdf8",
          hover: "#60a5fa",
          dark: "#2563eb",
          glow: "rgba(56, 189, 248, 0.25)",
        },
        secondary: {
          DEFAULT: "#a855f7",
          hover: "#c084fc",
          dark: "#7c3aed",
          glow: "rgba(168, 85, 247, 0.25)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        display: ["var(--font-space)", "'Space Grotesk'", "sans-serif"],
      },
      boxShadow: {
        'glow-blue': '0 0 25px rgba(56, 189, 248, 0.25)',
        'glow-violet': '0 0 25px rgba(168, 85, 247, 0.25)',
        'glow-aurora': '0 0 35px rgba(56, 189, 248, 0.2), 0 0 60px rgba(168, 85, 247, 0.15)',
        'card-light': '0 2px 10px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)',
        'card-hover': '0 16px 32px -8px rgba(0, 0, 0, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'aurora': 'aurora 18s ease-in-out infinite alternate',
        'pulse-glow': 'pulseGlow 5s ease-in-out infinite',
      },
      keyframes: {
        aurora: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(30px, -20px) scale(1.1)' },
          '100%': { transform: 'translate(-20px, 25px) scale(0.95)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.35', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
