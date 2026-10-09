export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages & APIs',
    description: 'Core languages and interface protocols used in production services',
    skills: ['Python', 'Rust', 'SQL', 'REST APIs'],
  },
  {
    title: 'Databases & Storage',
    description: 'Relational, document, analytical, and in-memory data engines',
    skills: ['PostgreSQL', 'MongoDB', 'DuckDB', 'Redis'],
  },
  {
    title: 'Cloud & Orchestration',
    description: 'Cloud infrastructure and distributed background task execution',
    skills: ['Google Cloud Platform', 'Cloud Functions', 'Cloud Tasks', 'AWX'],
  },
  {
    title: 'Observability & Tools',
    description: 'Production debugging, code quality, and delivery workflows',
    skills: ['Grafana', 'Postman', 'Git', 'Bitbucket', 'Jira', 'SonarCloud'],
  },
  {
    title: 'CS Foundations',
    description: 'Theoretical and algorithmic fundamentals from coursework',
    skills: ['DSA', 'DBMS', 'Operating Systems', 'Machine Learning', 'AI', 'Data Mining'],
  },
];
