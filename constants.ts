
import { Project, SkillCategory, Experience, Certification, BlogPost } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Predictive Customer Churn Analysis',
    category: 'ML',
    problem: 'Subscription-based service losing 15% revenue annually due to unknown churn factors.',
    tools: ['Python', 'Scikit-Learn', 'Pandas', 'XGBoost'],
    approach: 'Engineered 40+ features from user behavior logs and trained a gradient-boosted classifier with cross-validation.',
    insights: 'Longer support response times were the primary predictor of churn for high-value accounts.',
    impact: 'Reduced churn rate by 12% through targeted retention campaigns.',
    githubUrl: 'https://github.com',
    imageUrl: 'https://picsum.photos/seed/churn/600/400'
  },
  {
    id: '2',
    title: 'Real-time Sales Dashboard',
    category: 'Dashboard',
    problem: 'Leadership lacked visibility into regional sales performance variations.',
    tools: ['Power BI', 'SQL Server', 'DAX'],
    approach: 'Developed an automated ETL pipeline and designed interactive multi-page dashboards.',
    insights: 'Identified a 20% untapped growth opportunity in the Southeast region during Q3.',
    impact: 'Streamlined weekly reporting from 10 hours to 5 minutes for the executive team.',
    githubUrl: 'https://github.com',
    demoUrl: '#',
    imageUrl: 'https://picsum.photos/seed/sales/600/400'
  },
  {
    id: '3',
    title: 'Sentiment Analysis for Product Reviews',
    category: 'NLP',
    problem: 'Processing 10,000+ daily reviews manually was impossible for the CS team.',
    tools: ['PyTorch', 'HuggingFace', 'FastAPI'],
    approach: 'Fine-tuned a DistilBERT model on domain-specific review data.',
    insights: 'Negative sentiment spikes often preceded hardware failures reported 2 weeks later.',
    impact: '94% accuracy in identifying critical complaints, allowing for proactive customer outreach.',
    githubUrl: 'https://github.com',
    imageUrl: 'https://picsum.photos/seed/nlp/600/400'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'SQL', level: 90 },
      { name: 'R', level: 75 },
      { name: 'JavaScript', level: 70 }
    ]
  },
  {
    title: 'Machine Learning',
    skills: [
      { name: 'Regression/Classification', level: 95 },
      { name: 'Deep Learning', level: 85 },
      { name: 'NLP', level: 80 },
      { name: 'Reinforcement Learning', level: 65 }
    ]
  },
  {
    title: 'Visualization & Tools',
    skills: [
      { name: 'Tableau/Power BI', level: 90 },
      { name: 'Matplotlib/Seaborn', level: 95 },
      { name: 'Git/Docker', level: 85 },
      { name: 'AWS/Azure', level: 70 }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Senior Data Scientist',
    company: 'TechFlow Systems',
    duration: '2021 - Present',
    responsibilities: [
      'Led a team of 3 junior analysts in developing predictive maintenance models.',
      'Optimized marketing spend using multi-touch attribution modeling.'
    ],
    achievements: [
      'Saved $2M in annual costs by reducing false positives in fraud detection.',
      'Implemented a robust A/B testing framework that increased conversion by 5%.'
    ]
  },
  {
    role: 'Data Analyst Intern',
    company: 'Insight Analytics',
    duration: '2020 - 2021',
    responsibilities: [
      'Cleaned and pre-processed large-scale healthcare datasets.',
      'Created automated reports for stakeholder presentations.'
    ],
    achievements: [
      'Identified data quality issues that improved reporting accuracy by 25%.',
      'Developed a Python script to automate data cleaning tasks.'
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'Professional Data Engineer',
    issuer: 'Google Cloud',
    date: '2023',
    link: '#'
  },
  {
    name: 'Machine Learning Specialization',
    issuer: 'Coursera / Stanford',
    date: '2022',
    link: '#'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Why XAI is the Future of Business Decisions',
    date: 'Oct 12, 2023',
    excerpt: 'Deep diving into explainable AI and how it builds trust with stakeholders...',
    readTime: '5 min read'
  },
  {
    id: 'b2',
    title: 'My Favorite Python Libraries for 2024',
    date: 'Sep 28, 2023',
    excerpt: 'Beyond Pandas and Scikit-Learn: Exploring the next generation of DS tools...',
    readTime: '8 min read'
  }
];
