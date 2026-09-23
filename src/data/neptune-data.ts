import { NeptuneCMS } from '../types';

export const NEPTUNE_DATA: NeptuneCMS = {
  company: {
    name: "Neptune",
    brandName: "Neptune",
    shortName: "Neptune",
    tagline: "Technology Solutions Built Around Your Business Problems.",
    positioning: "Modern Technology Consultancy",
    philosophy: "Neptune helps businesses identify, design and build practical technology solutions — from AI and automation to custom software and product engineering.",
    lifecycle: "Understand → Diagnose → Design → Build → Validate → Scale",
    email: "contact@neptuneitech.com",
    establishedYear: 2026
  },

  statistics: [
    {
      number: 10,
      suffix: "x",
      label: "Faster Execution",
      description: "Agile methodologies ensuring rapid speed-to-market for new ideas."
    },
    {
      number: 0,
      suffix: " to 1",
      label: "Specialists",
      description: "We specialize in turning raw concepts into production-ready software."
    },
    {
      number: 100,
      suffix: "%",
      label: "Code Ownership",
      description: "Direct senior technical involvement on every single line of code."
    },
    {
      number: 24,
      suffix: "/7",
      label: "System Reliability",
      description: "Automation workflows engineered for constant, fault-tolerant uptime."
    }
  ],

  trustedClients: [
    { name: "Nike", industry: "Global E-Commerce", highlight: "Microservice Resilience" },
    { name: "Compass", industry: "Real Estate Tech", highlight: "High-Scale Search APIs" },
    { name: "Brudite", industry: "Education Tech", highlight: "Modular Learning Portals" },
    { name: "Skillbrew", industry: "SaaS Platforms", highlight: "Interactive Assessment Pipelines" },
    { name: "South Korean Battery Corp", industry: "Advanced Manufacturing", highlight: "Enterprise RAG Assistant" }
  ],

  coreServices: [
    {
      id: "ai-automation",
      icon: "Bot",
      title: "AI & Business Automation",
      badge: "Intelligent Workflows",
      description: "Practical AI systems, Retrieval-Augmented Generation (RAG) knowledge assistants, and autonomous agents solving concrete operational bottlenecks.",
      deliverables: ["AI workflows", "RAG systems", "AI agents", "Document intelligence", "Process automation", "LLM applications"],
      techStack: ["Python", "FastAPI", "Vector DBs", "LangChain", "OpenAI / Claude"]
    },
    {
      id: "custom-software",
      icon: "Globe",
      title: "Custom Business Software",
      badge: "Modern Architecture",
      description: "High-performance, intuitive web applications, internal tools, and robust APIs engineered for daily enterprise operations.",
      deliverables: ["Web applications", "Internal tools", "Business platforms", "APIs", "System integrations"],
      techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"]
    },
    {
      id: "product-engineering",
      icon: "Cloud",
      title: "Product Engineering",
      badge: "Scale & Reliability",
      description: "From concept to production: we engineer lean MVPs, scalable SaaS architectures, and cloud-native applications for high velocity.",
      deliverables: ["MVP development", "SaaS products", "Product modernization", "Architecture", "Cloud deployment", "Scaling"],
      techStack: ["AWS", "Google Cloud", "Docker", "Kubernetes", "CI/CD pipelines"]
    },
    {
      id: "technology-consulting",
      icon: "Lightbulb",
      title: "Technology Consulting",
      badge: "Strategic Direction",
      description: "Pragmatic technical guidance: evaluating feasibility, auditing architecture, mitigating technical debt, and mapping execution roadmaps.",
      deliverables: ["Technology strategy", "Solution architecture", "AI feasibility", "Technical assessment", "Digital transformation"],
      techStack: ["System Design", "Due Diligence", "Roadmapping", "Tech Audits"]
    }
  ],

  processPhases: [
    {
      number: "01",
      title: "Understand",
      tagline: "The Business Context",
      description: "Understand the business, users and existing workflow.",
      deliverables: ["Stakeholder Interviews", "Requirements Matrix"]
    },
    {
      number: "02",
      title: "Diagnose",
      tagline: "Identify the Gap",
      description: "Identify the actual problem and opportunities.",
      deliverables: ["Process Audit", "Opportunity Mapping"]
    },
    {
      number: "03",
      title: "Design",
      tagline: "Solution Architecture",
      description: "Define the appropriate solution and architecture.",
      deliverables: ["System Blueprint", "Database Schema"]
    },
    {
      number: "04",
      title: "Build",
      tagline: "Engineering Velocity",
      description: "Develop and integrate the solution.",
      deliverables: ["Production-Grade Code", "Automated Testing"]
    },
    {
      number: "05",
      title: "Validate",
      tagline: "Business Assurance",
      description: "Test against real business requirements.",
      deliverables: ["UAT Sign-off", "Security Validation"]
    },
    {
      number: "06",
      title: "Scale",
      tagline: "Continuous Evolution",
      description: "Optimize, maintain and evolve the solution.",
      deliverables: ["Performance Telemetry", "Long-Term Partnership"]
    }
  ],

  testimonials: [
    {
      id: "1",
      quote: "Neptune delivered our domain-specific RAG knowledge assistant under strict NDA timelines. The retrieval precision and citation accuracy exceeded our highest expectations.",
      author: "Enterprise Partner",
      role: "",
      company: "Healthcare Provider",
      rating: 5,
      metric: "99.4% Citation Accuracy"
    },
    {
      id: "2",
      quote: "Instead of over-engineering, Neptune dug into our chaotic wholesale ordering workflow and automated verified invoice generation in seconds. Turnaround time dropped from hours to under 30 seconds.",
      author: "Operations Partner",
      role: "",
      company: "Retail Distributor",
      rating: 5,
      metric: "90% Faster Invoicing"
    },
    {
      id: "3",
      quote: "Working with Neptune feels like having a senior in-house CTO and principal engineering squad. Their transparency, code craftsmanship, and architectural clarity are unmatched.",
      author: "Executive Partner",
      role: "",
      company: "Manufacturing Corp",
      rating: 5,
      metric: "6-Week MVP to Market"
    }
  ],

  solutions: [
    {
      id: "ai-automation",
      number: "01",
      title: "AI & Business Automation",
      accentColor: "primary",
      description: "Use practical AI and autonomous agents to eliminate repetitive friction, streamline unstructured workflows, and unlock actionable insights from complex business data.",
      items: [
        { name: "AI Workflows", desc: "Automated end-to-end task pipelines that connect human decisions with intelligent processing." },
        { name: "RAG Systems", desc: "Retrieval-Augmented Generation architectures grounded strictly in company documentation." },
        { name: "AI Agents", desc: "Specialized autonomous background workers handling routine inquiry and data aggregation." },
        { name: "Document Intelligence", desc: "Automated extraction and classification of invoices, contracts, and technical data." },
        { name: "Process Automation", desc: "Eliminating tedious manual handoffs with rule-driven and intelligent triggers." },
        { name: "LLM Applications", desc: "Custom conversational, analytical, and generative tools tailored to business needs." }
      ],
      tags: ["Workflow AI", "RAG / Embeddings", "Autonomous Agents", "Document AI", "Python"]
    },
    {
      id: "custom-software",
      number: "02",
      title: "Custom Business Software",
      accentColor: "secondary",
      description: "Custom web applications, robust backends, internal operational platforms, and resilient system integrations built specifically around your workflows.",
      items: [
        { name: "Web Applications", desc: "High-performance, intuitive frontends engineered for daily enterprise work." },
        { name: "Internal Tools", desc: "Custom administrative portals, dashboards, and back-office control panels." },
        { name: "Business Platforms", desc: "Multi-tenant operational systems orchestrating users, data, and business logic." },
        { name: "APIs & Microservices", desc: "Clean RESTful and event-driven backends designed for durability and speed." },
        { name: "System Integrations", desc: "Bridging legacy on-prem systems, SaaS tools, and external vendor platforms." }
      ],
      tags: ["React", "FastAPI / Flask", "PostgreSQL", "REST APIs", "Internal Dashboards"]
    },
    {
      id: "product-engineering",
      number: "03",
      title: "Product Engineering",
      accentColor: "primary-container",
      description: "From concept to production release: we engineer lean MVPs, scalable SaaS architectures, and cloud-native applications engineered for high velocity and scale.",
      items: [
        { name: "MVP Development", desc: "Rapid 0-to-1 prototype and MVP builds to validate market demand without technical debt." },
        { name: "SaaS Products", desc: "Scalable multi-tier software products with secure billing, authentication, and tenancy." },
        { name: "Product Modernization", desc: "Refactoring legacy codebases into modular, maintainable, cloud-native services." },
        { name: "Architecture Planning", desc: "Designing database schemas, domain models, and high-availability topologies." },
        { name: "Cloud Deployment & Scaling", desc: "Containerized environments on AWS/Cloud with auto-scaling and monitoring." }
      ],
      tags: ["0-to-1 MVPs", "SaaS Architecture", "Docker", "AWS", "CI/CD"]
    },
    {
      id: "technology-consulting",
      number: "04",
      title: "Technology Consulting",
      accentColor: "tertiary",
      description: "Objective, business-first technical guidance: evaluate technology feasibility, audit existing architecture, mitigate technical risk, and create execution roadmaps.",
      items: [
        { name: "Technology Strategy", desc: "Pragmatic technology choices based on business realities, team capacity, and budget." },
        { name: "Solution Architecture", desc: "End-to-end blueprinting of systems, data stores, and integration boundaries." },
        { name: "AI Feasibility", desc: "Evaluating if AI actually solves your problem before investing engineering capital." },
        { name: "Technical Assessment", desc: "Auditing performance bottlenecks, security vulnerabilities, and code quality." },
        { name: "Digital Transformation", desc: "Transitioning paper and manual spreadsheets into dependable digital systems." }
      ],
      tags: ["Architecture Blueprints", "Feasibility Audits", "Tech Roadmap", "Risk Mitigation"]
    }
  ],

  capabilities: [
    {
      icon: "Building2",
      title: "Business Applications",
      description: "Centralized portals and operational software that eliminate fragmented spreadsheets and streamline multi-step operations."
    },
    {
      icon: "Rocket",
      title: "MVPs & Startups",
      description: "Turn an idea into a tested, launch-ready product without unnecessary complexity or bloated tech stacks."
    },
    {
      icon: "Bot",
      title: "Automation Systems",
      description: "Replace repetitive manual steps with dependable, autonomous background workers and webhook integrations."
    },
    {
      icon: "Database",
      title: "Data & ETL Solutions",
      description: "Collect, sanitize, and transform unstructured business data into crisp, queryable analytics stores."
    },
    {
      icon: "Workflow",
      title: "API & Integrations",
      description: "Connect your internal applications, enterprise ERPs, and third-party SaaS platforms through robust interfaces."
    },
    {
      icon: "Cloud",
      title: "Cloud Applications",
      description: "Deploy resilient, secure, and auto-scaling workloads engineered for high uptime and minimal latency."
    }
  ],

  projects: [
    {
      id: "invoice-simplifier",
      name: "Invoice Simplifier",
      type: "project",
      category: "AI & Business Automation",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      challenge: "Manual extraction of chaotic WhatsApp wholesale orders caused severe billing errors and shipment delays.",
      strategy: "Deployed a custom LLM parsing pipeline to instantly extract unstructured data and verify it against live inventory.",
      impact: "Reduced invoicing turnaround from 3 hours to 30 seconds with 100% data accuracy.",
      industry: "Wholesale & B2B Commerce",
      problem: "Wholesale distributors receive bulk orders via chaotic channels. Staff spend hours manually copying items into accounting systems.",
      approach: "Built an intelligent parsing pipeline that extracts line items with high confidence and pairs them with live inventory records.",
      solution: "A centralized web platform that combines AI document parsing, WhatsApp hooks, automated inventory checks, and instant PDF generation.",
      capabilities: [
        "Order information extraction from text and images",
        "Live stock and inventory availability management",
        "Multi-tier retailer accounts and credit tracking",
        "Instant branded PDF invoice generation",
        "Direct WhatsApp webhook integration"
      ],
      architecture: "Client → FastAPI Gateway → AI Parsing Pipeline → PostgreSQL Database → PDF Generation",
      technology: ["Python", "FastAPI", "React", "PostgreSQL", "Redis"],
      outcome: "Eliminates manual re-entry errors and accelerates invoice turnaround from hours to seconds.",
      status: "Production Ready",
    },
    {
      id: "ai-voice-receptionist",
      name: "AI Voice Receptionist",
      type: "project",
      category: "Custom Software Engineering",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=1200&q=80",
      challenge: "Service businesses missed 40% of leads because calls arrived outside business hours or during peak traffic.",
      strategy: "Engineered an ultra-low latency voice agent that handles FAQs, books appointments, and syncs directly to the CRM.",
      impact: "Captured 100% of missed inbound leads, increasing overall monthly booking revenue by 22%.",
      industry: "Small Business & Service Operations",
      problem: "Missing valuable leads and revenue when calls arrive outside business hours.",
      approach: "Coupled low-latency speech-to-text models with domain-specific intent engines.",
      solution: "A voice agent capable of answering questions, booking appointments, and logging caller context into CRM.",
      capabilities: [
        "Real-time conversational telephony interface",
        "Automated calendar booking and appointment scheduling",
        "Contextual business FAQ response engine",
        "Instant call transcription and CRM summary logging"
      ],
      architecture: "Telephony Provider → Audio Streaming Gateway → Fast STT → LLM Engine → Neural TTS",
      technology: ["Python", "WebSockets", "Twilio Voice API", "Whisper", "FastAPI"],
      outcome: "Ensures 24/7 responsiveness for local businesses without around-the-clock staffing overhead.",
      status: "In Development",
    },
    {
      id: "battery-rag-assistant",
      name: "RAG Knowledge Assistant",
      type: "project",
      category: "Enterprise AI & RAG",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
      challenge: "Engineers wasted hours searching thousands of pages of complex, multilingual battery manufacturing manuals.",
      strategy: "Architected a highly secure, hybrid RAG pipeline with strict citation constraints to guarantee zero-hallucination answers.",
      impact: "Eliminated manual search time completely, establishing a single source of verified truth on the factory floor.",
      industry: "Advanced Manufacturing",
      problem: "Engineers needed rapid answers from thousands of pages of specialized battery manufacturing manuals.",
      approach: "Architected a hybrid retrieval pipeline using semantic embeddings alongside keyword filtering and strict citation constraints.",
      solution: "A secure, on-premise RAG system that ingests PDF manuals, extracts tables, and serves verified answers.",
      capabilities: [
        "Domain-specific bilingual technical semantic search",
        "Strict citation anchoring with exact page references",
        "Automated table extraction and numerical tolerance matching",
        "Audit logging of all queries and system responses"
      ],
      architecture: "Document Ingestion → Vector Index → Query Re-ranking → Grounded Generation",
      technology: ["Python", "FastAPI", "Vector Database", "LangChain", "Docker"],
      outcome: "Dramatically accelerated technical troubleshooting cycles and eliminated manual document searching.",
      status: "Production Ready",
    }
  ],

  caseStudies: [
    {
      id: "battery-rag-assistant",
      type: "case-study",
      name: "RAG Knowledge Assistant for Battery Manufacturing",
      category: "AI · RAG · LLM · Knowledge Systems",
      badge: "Confidential Engagement",
      shortDescription: "A domain-specific RAG solution developed for a South Korean company in the battery manufacturing sector, enabling users to retrieve and interact with specialized technical documentation.",
      client: "Confidential (South Korean Battery Manufacturing Sector)",
      confidentialityNotice: "Strictly protected under non-disclosure agreement. Client identity, proprietary documents, chemistry data, and internal network topologies are omitted in accordance with Section 16.",
      sections: {
        overview: {
          title: "01 — Overview",
          projectName: "Technical Knowledge Assistant",
          industry: "Advanced Battery Manufacturing",
          solutionCategory: "Enterprise Retrieval-Augmented Generation (RAG)"
        },
        problem: {
          title: "02 — The Problem",
          content: "Engineers and plant technicians needed rapid answers from thousands of pages of specialized battery manufacturing manuals, safety protocols, and machine calibration specifications. Traditional folder searches and manual index lookups slowed shift changes and equipment troubleshooting."
        },
        challenge: {
          title: "03 — The Challenge",
          content: "The documentation contained dense multilingual content (English and Korean), complex schematics, chemical safety tolerances, and specialized manufacturing terminology where hallucinations could lead to physical machine downtime or safety risks."
        },
        approach: {
          title: "04 — Our Approach",
          content: "Instead of generic web LLM prompts, we architected a hybrid retrieval pipeline using semantic embeddings alongside keyword BM25 filtering, strict source citation constraints, and confidence score thresholds to guarantee zero-hallucination answers."
        },
        solution: {
          title: "05 — The Solution",
          content: "A secure, on-premise/hybrid RAG system that ingests PDF manuals, extracts tables and diagrams, generates domain embeddings, and serves verified answers with clickable page citations directly to factory floor operators."
        },
        capabilities: [
          "Domain-specific bilingual technical semantic search (Korean/English)",
          "Strict citation anchoring with exact page and section references",
          "Automated table extraction and numerical tolerance matching",
          "Role-based access control ensuring sensitive specs remain segregated",
          "Audit logging of all queries, retrieved passages, and system responses"
        ],
        architecture: {
          title: "07 — Architecture",
          diagramType: "rag-pipeline",
          steps: [
            { label: "Document Ingestion", detail: "Technical PDF manuals & SOPs parsed with table-aware chunking" },
            { label: "Vector & Keyword Index", detail: "Hybrid indexing: Dense Vector DB + BM25 Lexical index" },
            { label: "Query Re-ranking", detail: "Cross-encoder re-ranking against technical engineering vocabulary" },
            { label: "Grounded Generation", detail: "LLM synthesis restricted strictly to retrieved context passages" },
            { label: "Verification & Citation", detail: "Source validation ensuring every claim has a verifiable page reference" }
          ]
        },
        technology: ["Python", "FastAPI", "Vector Database (Qdrant / Milvus)", "LangChain / LlamaIndex", "HuggingFace Embeddings", "Docker"],
        outcome: {
          title: "09 — Outcome",
          content: "Engineers and floor operators dramatically accelerated technical troubleshooting cycles, eliminated manual document searching during shifts, and established a single source of verified truth across plants."
        },
        whatNext: {
          title: "10 — What's Next",
          content: "Exploration of telemetry-assisted automated diagnostics, linking live IoT sensor alerts directly to relevant troubleshooting knowledge articles."
        }
      },
      ctaText: "Read Confidential Case Study",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
    }
  ],

  experience: {
    heading: "Experience Behind Neptune",
    disclaimer: "Selected Professional Experience / Experience Across Previous Engagements",
    note: "Our leadership team brings hands-on experience delivering technology products and complex solutions across high-growth startups and global enterprises.",
    items: [
      {
        company: "Nike",
        role: "High-Scale E-Commerce & Systems",
        contribution: "Contributed to distributed digital platforms, microservice resilience, and high-concurrency order architectures handling global user traffic.",
        skills: ["Distributed Systems", "Cloud Scale", "Performance Optimization"]
      },
      {
        company: "Compass",
        role: "Real Estate Tech & Cloud Services",
        contribution: "Engineered scalable backend pipelines and search interfaces indexing real-time property transactions and enterprise agent workflows.",
        skills: ["APIs & Search", "Cloud Architecture", "Data Workflows"]
      },
      {
        company: "Brudite",
        role: "Product Engineering & Education Tech",
        contribution: "Architected modular learning platforms, automated student workflows, and reliable API services designed for rapid adoption.",
        skills: ["Web Platforms", "Modular Architecture", "Full-Stack Development"]
      },
      {
        company: "Skillbrew",
        role: "SaaS & Interactive Platforms",
        contribution: "Developed responsive interactive web applications, automated assessment pipelines, and scalable database backends.",
        skills: ["SaaS Engineering", "Automation", "Database Design"]
      }
    ]
  },

  whyNeptune: [
    {
      icon: "Compass",
      title: "Business-first engineering",
      description: "We understand the workflow before choosing the technology. Technology is an ROI tool, not vanity."
    },
    {
      icon: "ShieldCheck",
      title: "Direct technical ownership",
      description: "Senior engineering leadership is directly accountable on every sprint. We stand behind every line of code."
    },
    {
      icon: "Bot",
      title: "Practical AI",
      description: "We implement real-world AI that saves time and solves problems, ignoring the hype."
    }
  ],

  about: {
    whoWeAre: "Neptuneitech is a modern technology consultancy and product engineering company helping ambitious businesses turn operational and technical bottlenecks into scalable digital advantages.",
    mission: "To eliminate operational bottlenecks by engineering robust, AI-driven digital ecosystems that scale seamlessly, empower teams to move faster, and turn complex data into immediate, actionable business value.",
    vision: "To become the definitive technology partner for modern enterprises, bridging the gap between cutting-edge artificial intelligence and practical, bulletproof software architecture that drives the next decade of digital transformation.",
    focusAreas: ["Web & Mobile Engineering", "Cloud Architecture", "AI & Business Automation", "Technology Consulting", "DevOps & CI/CD", "Data & Analytics"]
  }
};
