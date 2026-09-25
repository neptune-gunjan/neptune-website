export interface Company {
  name: string;
  brandName: string;
  shortName: string;
  tagline: string;
  positioning: string;
  philosophy: string;
  lifecycle: string;
  email: string;
  establishedYear: number;
}

export interface Statistic {
  number: number;
  suffix: string;
  label: string;
  description: string;
}

export interface ClientLogo {
  name: string;
  industry: string;
  highlight: string;
}

export interface CoreService {
  id: string;
  icon: string;
  title: string;
  badge: string;
  description: string;
  deliverables: string[];
  techStack: string[];
}

export interface SolutionItem {
  name: string;
  desc: string;
}

export interface Solution {
  id: string;
  number: string;
  title: string;
  accentColor: string;
  description: string;
  items: SolutionItem[];
  tags: string[];
}

export interface Capability {
  icon: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  type: 'project';
  name: string;
  category: string;
  badge?: string;
  shortDescription?: string;
  industry?: string;
  problem?: string;
  challenge?: string;
  strategy?: string;
  impact?: string;
  approach?: string;
  solution?: string;
  capabilities?: string[];
  architecture?: string;
  technology?: string[];
  outcome?: string;
  whatNext?: string;
  confidentialityStatus?: string;
  status?: string;
  ctaText?: string;
  image?: string;
}

export interface CaseStudyArchitectureStep {
  label: string;
  detail: string;
}

export interface CaseStudy {
  id: string;
  type: 'case-study';
  name: string;
  category: string;
  badge: string;
  shortDescription: string;
  client: string;
  confidentialityNotice: string;
  sections: {
    overview: {
      title: string;
      projectName: string;
      industry: string;
      solutionCategory: string;
    };
    problem: {
      title: string;
      content: string;
    };
    challenge: {
      title: string;
      content: string;
    };
    approach: {
      title: string;
      content: string;
    };
    solution: {
      title: string;
      content: string;
    };
    capabilities: string[];
    architecture: {
      title: string;
      diagramType: string;
      steps: CaseStudyArchitectureStep[];
    };
    technology: string[];
    outcome: {
      title: string;
      content: string;
    };
    whatNext: {
      title: string;
      content: string;
    };
  };
  ctaText: string;
  image: string;
}

export interface ProcessPhase {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  metric: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  contribution: string;
  skills: string[];
}

export interface Experience {
  heading: string;
  disclaimer: string;
  note: string;
  items: ExperienceItem[];
}

export interface WhyNeptuneItem {
  icon: string;
  title: string;
  description: string;
}

export interface About {
  whoWeAre: string;
  mission: string;
  vision: string;
  focusAreas: string[];
}

export interface NeptuneCMS {
  company: Company;
  statistics: Statistic[];
  trustedClients: ClientLogo[];
  coreServices: CoreService[];
  solutions: Solution[];
  capabilities: Capability[];
  projects: Project[];
  caseStudies: CaseStudy[];
  processPhases: ProcessPhase[];
  testimonials: Testimonial[];
  experience: Experience;
  whyNeptune: WhyNeptuneItem[];
  about: About;
}
