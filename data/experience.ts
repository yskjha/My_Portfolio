export interface ExperienceItem {
  role: string;
  type: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  metrics: { label: string; value: string }[];
  bulletPoints: string[];
  techStack: string[];
}

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Software Developer',
    type: 'Full-time',
    company: 'Impact Analytics',
    location: 'Bengaluru, India',
    period: 'Dec 2024 – Present',
    current: true,
    metrics: [
      { label: 'Production Tickets', value: '200+' },
      { label: 'Critical Bugs Resolved', value: '14+' },
      { label: 'Major CR Rollbacks', value: '0' },
    ],
    bulletPoints: [
      'Delivered 200+ production tickets including urgent production fixes, system enhancements, and new user features across enterprise pricing automation products.',
      'Resolved 14+ critical production bugs and implemented 5 major change requests with a flawless zero-rollback record.',
      'Enhanced system reliability and uptime across multiple interdependent modules within the pricing automation suite.',
      'Formulated and proposed long-term technical optimization strategies to ensure high scalability for enterprise client pricing workloads.',
      'Strengthened production architecture across environment setup, relational/NoSQL schema design, and GCP cloud task orchestration.',
    ],
    techStack: [
      'Python',
      'PostgreSQL',
      'Cloud Tasks',
      'Cloud Functions',
      'Grafana',
      'GCP',
      'Bitbucket',
      'SonarCloud',
    ],
  },
  {
    role: 'Software Developer (Apprenticeship)',
    type: 'Apprenticeship',
    company: 'Impact Analytics',
    location: 'Bengaluru, India',
    period: 'May 2024 – Nov 2024',
    current: false,
    metrics: [
      { label: 'Query Latency Reduction', value: '40s → 7s' },
      { label: 'Latency Improvement', value: '~82.5%' },
    ],
    bulletPoints: [
      'Engineered and optimized backend APIs, diagnosing database bottlenecks and reducing key SQL query execution time from 40 seconds down to 7 seconds.',
      'Collaborated actively with cross-functional engineering and product teams to enhance overall product reliability, SLAs, and client satisfaction.',
    ],
    techStack: ['Python', 'SQL', 'PostgreSQL', 'REST APIs', 'Postman', 'Git', 'Jira'],
  },
];
