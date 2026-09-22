export interface InsightPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // We will use React-Markdown to render this later
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatarUrl?: string;
  };
  category: "AI Automation" | "Product Engineering" | "Strategy" | "Case Study";
  tags: string[];
  coverImage: string;
}

