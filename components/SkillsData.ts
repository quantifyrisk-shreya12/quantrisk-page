// FIX: Add explicit types for skills data to fix type inference issues. This ensures `level` is not inferred as a generic `string`.
export type ProficiencyLevel = 'Proficient' | 'Advanced' | 'Expert' | 'Intermediate';

export interface Skill {
  name: string;
  level: ProficiencyLevel;
  percentage: number;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: 'NLP & Gen AI',
    skills: [
      { name: 'Agentic AI & Prompt Engineering', level: 'Expert', percentage: 95 },
      { name: 'RAG & LangChain', level: 'Expert', percentage: 90 },
      { name: 'Sentence Transformers & BERT', level: 'Advanced', percentage: 85 },
      { name: 'Semantic Chunking & Cosine Similarity', level: 'Advanced', percentage: 85 },
      { name: 'ChromaDB & Fuzzy Matching', level: 'Advanced', percentage: 80 },
    ],
  },
  {
    category: 'Programming',
    skills: [
      { name: 'Python (Pandas, NumPy, Scikit-learn)', level: 'Expert', percentage: 95 },
      { name: 'SQL & SAS', level: 'Advanced', percentage: 90 },
      { name: 'Excel, VBA & openpyxl', level: 'Advanced', percentage: 85 },
      { name: 'Git & python-docx', level: 'Advanced', percentage: 80 },
    ],
  },
  {
    category: 'Machine Learning & Statistics',
    skills: [
      { name: 'XGBoost, Random Forest & Logistic Regression', level: 'Expert', percentage: 90 },
      { name: 'Regression, Hypothesis Testing & PCA', level: 'Expert', percentage: 90 },
      { name: 'Clustering (HDBSCAN, K-Means)', level: 'Advanced', percentage: 85 },
      { name: 'Time Series, VaR & Monte Carlo', level: 'Advanced', percentage: 80 },
      { name: 't-SNE, UMAP & SMOTETOMEK', level: 'Proficient', percentage: 75 },
    ],
  },
  {
    category: 'BI, Dashboards & Automation',
    skills: [
      { name: 'Power BI, Tableau & Looker Studio', level: 'Advanced', percentage: 85 },
      { name: 'Apache Airflow & Azure Data Factory', level: 'Advanced', percentage: 85 },
      { name: 'n8n & Workflow Orchestration', level: 'Advanced', percentage: 80 },
      { name: 'ETL Pipeline Design & API Integration', level: 'Proficient', percentage: 80 },
    ],
  },
  {
    category: 'Cloud & DB',
    skills: [
      { name: 'GCP (BigQuery, Airflow) & Azure', level: 'Advanced', percentage: 85 },
      { name: 'MLflow & FastAPI', level: 'Advanced', percentage: 80 },
      { name: 'Docker', level: 'Proficient', percentage: 75 },
    ],
  },
];
