
export type ProjectCategory = 'ML' | 'EDA' | 'Dashboard' | 'NLP' | 'Deep Learning';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  problem: string;
  tools: string[];
  approach: string;
  insights: string;
  impact: string;
  githubUrl: string;
  demoUrl?: string;
  imageUrl: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
  achievements: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  link: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
}
