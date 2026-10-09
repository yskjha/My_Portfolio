export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'B.E. in Civil Engineering',
    institution: 'BITS Pilani, Hyderabad Campus',
    period: '2020 – 2024',
    details: 'Foundational coursework: Data Structures & Algorithms, DBMS, Operating Systems, Machine Learning, AI, Data Mining.',
  },
  {
    degree: 'Senior Secondary (CBSE - Class XII)',
    institution: 'Delhi Public School',
    period: '2018 – 2020',
  },
  {
    degree: 'Secondary (ICSE - Class X)',
    institution: 'Podar International School',
    period: '2010 – 2018',
  },
];
