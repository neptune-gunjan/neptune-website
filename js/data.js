/**
 * Neptune Consulting Services - CMS Data Store
 * Matches Section 15 (CMS / Content Structure) & Section 16 (Confidentiality Rules)
 * of the Developer Specification document.
 */

const NEPTUNE_DATA = {
  company: {
    name: "Neptune Consulting Services",
    brandName: "Neptune Consulting Services",
    shortName: "Neptune",
    tagline: "Technology. Strategy. Solutions.",
    positioning: "Technology Consulting + Product Engineering",
    philosophy: "Neptune doesn't start with technology. We start with the problem.",
    lifecycle: "Understand → Design → Build → Deploy → Scale",
    email: "contact@neptuneitech.com",
    establishedYear: 2026
  },

  solutions: [
    {
      id: "ai-automation",
      number: "01",
      title: "AI & Business Automation",
      accentColor: "primary", // maps to cyan
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
      accentColor: "secondary", // maps to blue/indigo
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
      icon: "domain",
      title: "Business Applications",
      description: "Centralized portals and operational software that eliminate fragmented spreadsheets and streamline multi-step operations."
    },
    {
      icon: "rocket",
      title: "MVPs & Startups",
      description: "Turn an idea into a tested, launch-ready product without unnecessary complexity or bloated tech stacks."
    },
    {
      icon: "smart_toy",
      title: "Automation Systems",
      description: "Replace repetitive manual steps with dependable, autonomous background workers and webhook integrations."
    },
    {
      icon: "database",
      title: "Data & ETL Solutions",
      description: "Collect, sanitize, and transform unstructured business data into crisp, queryable analytics stores."
    },
    {
      icon: "sync_alt",
      title: "API & Integrations",
      description: "Connect your internal applications, enterprise ERPs, and third-party SaaS platforms through robust interfaces."
    },
    {
      icon: "cloud_done",
      title: "Cloud Applications",
      description: "Deploy resilient, secure, and auto-scaling workloads engineered for high uptime and minimal latency."
    }
  ],

  projects: [
    {
      id: "invoice-simplifier",
      type: "project",
      name: "Invoice Simplifier",
      category: "AI · Automation · B2B SaaS",
      badge: "Neptune Product",
      shortDescription: "An AI-powered platform designed to simplify the order-to-invoice workflow for wholesalers managing multiple retailers.",
      industry: "Wholesale & B2B Commerce",
      problem: "Wholesale distributors receive bulk orders via chaotic channels (WhatsApp, photos of paper lists, messy emails). Staff spend hours manually copying items into accounting systems, checking stock, and generating billing, causing delayed shipments and invoice errors.",
      challenge: "Handwritten orders, regional slang, varying units of measure, and unstructured text from WhatsApp chats made standard OCR solutions unreliable.",
      approach: "Built an intelligent parsing pipeline that extracts line items with high confidence, pairs them with live inventory records, and generates verified invoices automatically.",
      solution: "A centralized web platform that combines AI document parsing, WhatsApp messaging hooks, automated inventory checks, and instant PDF invoice generation.",
      capabilities: [
        "Order information extraction from text and images",
        "Live stock and inventory availability management",
        "Multi-tier retailer accounts and credit tracking",
        "Instant branded PDF invoice generation",
        "Direct WhatsApp webhook integration for real-time order receipts"
      ],
      architecture: "Client (React UI / WhatsApp Client) → FastAPI Gateway → AI Parsing Pipeline (LLM + Structured Extraction) → PostgreSQL Database + Redis Cache → Automated PDF Generation & WhatsApp Dispatch.",
      technology: ["Python", "FastAPI", "React", "PostgreSQL", "Redis", "WhatsApp Cloud API", "Docker"],
      outcome: "Eliminates manual re-entry errors, accelerates invoice turnaround from hours to seconds, and gives wholesalers clear inventory visibility.",
      whatNext: "Extending multi-currency support and direct ERP sync connectors (SAP, QuickBooks, Tally).",
      confidentialityStatus: "Public Neptune Project",
      status: "Production Ready",
      ctaText: "View Project Details",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQLWYuGEIZPPrNxb9ODx_-NAoD7idvZhHHX7-aTjpisFPCYlVvnZFCIIvlcwIxwFnRD0NGFQe3Ah7wc42hZD3SHtoHOamueh_getqM5D8Mw5lxBLNpaykULH6k8e3qFyEXzZ76ILZLhLemcF43dbqZBCCbTx6JV389hP7NxR7qrYxydMFweL5uc7ubXVi6bWSlAG6DQdTIpSNlGSwinQASgvZyCkmbWOZlovaNQFmW_7qw8xIBcwg6"
    },
    {
      id: "ai-voice-receptionist",
      type: "project",
      name: "AI Voice Receptionist",
      category: "Voice AI · Automation",
      badge: "In Development",
      shortDescription: "An AI receptionist designed to help small businesses handle incoming customer calls, answer common questions, and automate routine call workflows.",
      industry: "Small Business & Service Operations",
      problem: "Small service businesses miss valuable leads and revenue when calls arrive outside business hours or while staff are busy handling on-site customers.",
      challenge: "Achieving conversational latency under 600ms, accurate speech recognition over noisy telephony audio, and graceful handoff to human staff when necessary.",
      approach: "Coupled low-latency speech-to-text models with domain-specific intent engines and VoIP telephony bridges to provide natural, contextual voice interactions.",
      solution: "A voice agent capable of answering frequent questions, booking appointments, logging caller context into CRM, and escalating urgent calls via SMS.",
      capabilities: [
        "Real-time conversational telephony interface",
        "Automated calendar booking and appointment scheduling",
        "Contextual business FAQ response engine",
        "Instant call transcription and CRM summary logging",
        "Smart human fallback and escalation triggers"
      ],
      architecture: "Telephony Provider (Twilio / WebRTC) → Audio Streaming Gateway → Fast STT → LLM Conversation State Engine → Neural TTS → Audio Stream Return.",
      technology: ["Python", "WebSockets", "Twilio Voice API", "Whisper / Deepgram", "FastAPI", "Redis"],
      outcome: "Ensures 24/7 responsiveness for local businesses without the overhead of around-the-clock telephone staffing.",
      whatNext: "Expanding multilingual speech models and interactive calendar integrations.",
      confidentialityStatus: "Public Neptune Solution",
      status: "In Development",
      ctaText: "Explore Voice Solution",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvTba6_7XnDpKNpQ7fbP47VjYblWT7hOcjb62DHDc3tj48aTyf4sZYC77ad1asfcXbUk1oQ3jfVuyJDPrIAkWnu4ixpHyn9fueTFOAhCMbRmUY9oVNjdW-BGnd-iOxIIHVUTwEWqiUneAs1b-NVXO6A9rfIzMXyC98TzZxM9nWY8Z5bw18pDW6oULXOxaNJ2TE859ZLZxAskYCy3li6iP-DHF2MGxtMOFSbgMlwC6URmKxEh512aNI"
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
      
      // 10-step case study structure (Section 5 compliant)
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
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvTba6_7XnDpKNpQ7fbP47VjYblWT7hOcjb62DHDc3tj48aTyf4sZYC77ad1asfcXbUk1oQ3jfVuyJDPrIAkWnu4ixpHyn9fueTFOAhCMbRmUY9oVNjdW-BGnd-iOxIIHVUTwEWqiUneAs1b-NVXO6A9rfIzMXyC98TzZxM9nWY8Z5bw18pDW6oULXOxaNJ2TE859ZLZxAskYCy3li6iP-DHF2MGxtMOFSbgMlwC6URmKxEh512aNI"
    }
  ],

  // Section 5 & 16: Selected Professional Experience (Strict Compliance)
  experience: {
    heading: "Experience Behind Neptune",
    disclaimer: "Selected Professional Experience / Experience Across Previous Engagements",
    note: "Our team brings hands-on experience delivering technology products and complex solutions across high-growth startups and global enterprises.",
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

  // Section 7 & 8: How We Work & Engagement Models
  howWeWork: {
    heading: "From Problem to Production",
    subheading: "A transparent, structured engineering lifecycle focused on tangible outcomes.",
    steps: [
      {
        number: "01",
        title: "Understand",
        shortDesc: "Understand the business, users, and existing workflow.",
        detail: "We align directly with your team to uncover the root business problem, operational context, and technical constraints."
      },
      {
        number: "02",
        title: "Diagnose",
        shortDesc: "Identify the actual problem and opportunities.",
        detail: "Distinguish between symptoms and root causes. Determine whether technology is the right solution before writing a line of code."
      },
      {
        number: "03",
        title: "Design",
        shortDesc: "Define the appropriate solution and architecture.",
        detail: "Establish schema boundaries, service architecture, and a lean milestone roadmap prioritizing high ROI."
      },
      {
        number: "04",
        title: "Build",
        shortDesc: "Develop and integrate the solution.",
        detail: "Iterative sprints with clean version control, bi-weekly progress reviews, and strict automated testing."
      },
      {
        number: "05",
        title: "Validate",
        shortDesc: "Test against real business requirements.",
        detail: "Rigorous load testing, security posture hardening, user acceptance validation, and edge-case verification."
      },
      {
        number: "06",
        title: "Scale",
        shortDesc: "Optimize, maintain, and evolve the solution.",
        detail: "Production release, telemetry instrumentation, performance tuning, and ongoing system support."
      }
    ],

    engagementModels: [
      {
        title: "Fixed Project",
        subtitle: "Clearly defined scope & deliverables",
        description: "Ideal for well-defined MVPs, specific automation tools, or integrations with clear milestones, deadlines, and pricing.",
        icon: "inventory_2"
      },
      {
        title: "Dedicated Engineering Team",
        subtitle: "Ongoing development capacity",
        description: "An integrated technical squad working as an extension of your company on active product roadmaps and features.",
        icon: "groups"
      },
      {
        title: "Technology Consulting",
        subtitle: "Strategic guidance & architecture",
        description: "Senior advisory on system design, AI feasibility studies, technical debt audits, and digital transformation strategy.",
        icon: "psychology"
      },
      {
        title: "Build & Transfer",
        subtitle: "Engineered, validated, handed over",
        description: "Neptune builds and validates the product, documents the architecture, and seamlessly trains your in-house team to own it.",
        icon: "handshake"
      },
      {
        title: "Long-Term Partnership",
        subtitle: "Continuous engineering & growth",
        description: "Ongoing platform evolution, proactive maintenance, telemetry monitoring, and scalability improvements as you grow.",
        icon: "trending_up"
      }
    ]
  },

  // Section 9: Why Neptune (No Buzzwords)
  whyNeptune: [
    {
      icon: "psychology_alt",
      title: "Business-first engineering",
      description: "We understand the workflow before choosing the technology. Technology is a tool, not the goal."
    },
    {
      icon: "straighten",
      title: "Built for your needs",
      description: "No unnecessary features, over-engineered architectures, or bloated, hard-to-maintain codebases."
    },
    {
      icon: "verified_user",
      title: "Technical ownership",
      description: "Every engagement has direct senior technical accountability. We stand behind every line of code."
    },
    {
      icon: "visibility",
      title: "Transparent delivery",
      description: "Clear milestone visibility, straightforward pricing, and open communication without corporate bureaucracy."
    },
    {
      icon: "rocket_launch",
      title: "Production mindset",
      description: "Solutions are designed from day one with deployment, security, maintainability, and scalability in mind."
    }
  ],

  // Section 10: About Neptune
  about: {
    whoWeAre: "Neptune Consulting Services is a technology consulting and product engineering company helping businesses turn operational and technology challenges into practical digital solutions.",
    mission: "Make technology simpler, more accessible, and genuinely more useful for businesses of every scale.",
    vision: "Build technology that creates measurable impact — not unnecessary complexity or technical vanity.",
    focusAreas: ["AI & Business Automation", "Software Engineering", "Product Development", "Technology Consulting"]
  }
};

