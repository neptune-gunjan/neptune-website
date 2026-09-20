- **Enterprise Design System**: High-tech enterprise dark theme with cyan glow accents (`#00e5ff`), glassmorphism, responsive navigation, and accessible modal dialogs.
- **Lead Generation & Telemetry**: Interactive consultation inquiry form with client validation, API route (`/api/contact`), and event telemetry tracking.
- **SEO & Performance**: Pre-rendered static pages (SSG), OpenGraph meta tags, and optimized asset delivery.

## Getting Started

### Development Server

Run the development server with standard Next.js:
```bash
npm run dev
```

Or with **Turbopack** (instant hot module replacement):
```bash
npm run dev:turbo
```

Or simply double-click `run_dev.bat` on Windows.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production Build

To create an optimized production build:
```bash
npm run build
```

To run the production server:
```bash
npm start
```

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts   # Contact form submission API
│   │   ├── globals.css            # Tailwind + custom design system tokens
│   │   ├── layout.tsx             # Root layout & SEO meta tags
│   │   └── page.tsx               # Primary landing page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx         # Responsive glassmorphism header
│   │   │   └── Footer.tsx         # Footer with quick links & disclaimers
│   │   └── sections/
│   │       ├── Hero.tsx           # Positioning headline & execution lifecycle
│   │       ├── Solutions.tsx      # 4 core practice areas
│   │       ├── Capabilities.tsx   # 6 engineering capabilities
│   │       ├── ProjectsAndCaseStudies.tsx # Filterable projects & case studies
│   │       ├── CaseStudyModal.tsx # 10-step case study modal dialog
│   │       ├── HowWeWork.tsx      # Lifecycle timeline & engagement models
│   │       ├── WhyNeptune.tsx     # 5 core value pillars
│   │       ├── Experience.tsx     # Proven experience across Nike, Compass, etc.
│   │       └── Contact.tsx        # Consultation brief inquiry form
│   ├── data/
│   │   └── neptune-data.ts        # Typed CMS data store
│   ├── lib/
│   │   ├── analytics.ts           # Telemetry & event tracking
│   │   └── utils.ts               # Class merging utility
│   └── types/
│       └── index.ts               # Strong TypeScript interface definitions
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.mjs
```

