export interface ProjectItem {
  id: string;
  title: string;
  category: 'Production Systems' | 'Machine Learning' | 'Data Analytics';
  status: 'Production Case Study' | 'Completed' | 'Research Project';
  problemContext: string;
  roleContribution: string;
  approachKeyDecisions: string[];
  resultsLearnings: string;
  techStack: string[];
  repoUrl?: string;
  demoUrl?: string;
  missingInfo?: string[];
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'impact-analytics-backend',
    title: 'Enterprise Pricing API & SQL Optimization',
    category: 'Production Systems',
    status: 'Production Case Study',
    problemContext:
      'Enterprise retail pricing automation products suffered from critical SQL query latencies taking up to 40 seconds, impacting operational responsiveness during high-volume pricing recalculations.',
    roleContribution:
      'Backend Software Developer responsible for query profiling, API refactoring, background cloud task orchestration, and production bug triage.',
    approachKeyDecisions: [
      'Diagnosed query execution plans and applied targeted indexing and SQL restructuring.',
      'Decoupled synchronous workflows by orchestrating distributed asynchronous tasks via GCP Cloud Tasks and Cloud Functions.',
      'Maintained rigorous zero-rollback change request validation protocols across 5 major release cycles.',
    ],
    resultsLearnings:
      'Reduced critical query execution times from 40s to 7s (~82.5% latency drop); resolved 14+ critical production bugs and delivered 200+ production tickets with zero rollbacks.',
    techStack: ['Python', 'SQL', 'PostgreSQL', 'GCP Cloud Tasks', 'Cloud Functions', 'Grafana'],
    repoUrl: undefined, // Proprietary enterprise software
    demoUrl: undefined,
    missingInfo: [
      'Source code is proprietary enterprise property (Impact Analytics). Case study documented on portfolio.',
    ],
  },
  {
    id: 'fuzzy-lstm-dam-inflow',
    title: 'Sriram Sagar Dam Inflow Prediction',
    category: 'Machine Learning',
    status: 'Research Project',
    problemContext:
      'Accurate reservoir inflow and rainfall prediction for Sriram Sagar Dam to aid in water resource planning and hydrological forecasting.',
    roleContribution:
      'Solo/collaborative researcher responsible for feature selection, comparative deep learning model architectures, and experimental validation.',
    approachKeyDecisions: [
      'Engineered feature selection pipeline on meteorological and historical reservoir telemetry.',
      'Built multi-model benchmark suite comparing baseline LSTM, hyperparameter-tuned LSTM (HyperOpt), and hybrid Fuzzy-LSTM.',
      'Integrated fuzzy logic to capture nonlinear uncertainty in hydrological rainfall-runoff dynamics.',
    ],
    resultsLearnings:
      'Demonstrated multi-model benchmark performance comparisons between standard LSTM, HyperOpt, and Fuzzy-LSTM for rainfall forecasting.',
    techStack: ['Python', 'Deep Learning', 'LSTM', 'HyperOpt', 'Fuzzy Logic'],
    repoUrl: undefined, // [NEEDS MY INPUT: GitHub repository link if public]
    demoUrl: undefined, // [NEEDS MY INPUT: Demo / paper link if public]
    missingInfo: [
      '[NEEDS MY INPUT: Public GitHub repository link]',
      '[NEEDS MY INPUT: Exact numerical benchmark metrics (e.g., RMSE, MAE, R² score)]',
    ],
  },
  {
    id: 'children-growth-dhs',
    title: 'Children’s Growth Analysis (DHS Dataset)',
    category: 'Data Analytics',
    status: 'Completed',
    problemContext:
      'Investigating the empirical relationship between nutritional determinants, socio-economic factors, and child growth indicators using the Demographic and Health Surveys (DHS) dataset.',
    roleContribution:
      'Data analyst responsible for end-to-end data processing pipeline, data hygiene, exploratory visualization, and statistical hypothesis validation.',
    approachKeyDecisions: [
      'Engineered data cleaning and preprocessing pipelines to handle missing and skewed survey telemetry in Python.',
      'Applied statistical hypothesis testing to evaluate nutritional impact on child developmental milestones.',
      'Built visualization suites to illustrate correlations and distributions across demographics.',
    ],
    resultsLearnings:
      'Validated empirical hypotheses regarding nutritional factors impacting child growth metrics.',
    techStack: ['Python', 'Statistical Analysis', 'Data Cleaning', 'Data Visualization'],
    repoUrl: undefined, // [NEEDS MY INPUT: GitHub repository link if public]
    demoUrl: undefined, // [NEEDS MY INPUT: Interactive notebook or dashboard link]
    missingInfo: [
      '[NEEDS MY INPUT: Public GitHub repository link or Jupyter notebook]',
      '[NEEDS MY INPUT: Specific statistical conclusions / published findings]',
    ],
  },
];
