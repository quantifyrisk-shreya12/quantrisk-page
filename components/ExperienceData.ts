export interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  image: string;
  description: string;
  techStack: string[];
}

export const experienceData: Experience[] = [
  {
    id: 1,
    company: 'HSBC',
    role: 'Analyst Business Consulting',
    duration: '10/2021 – 04/2024',
    location: 'Calcutta, India',
    image: 'https://picsum.photos/seed/hsbc/600/400',
    description: 'Developed a corporate/SME credit card PD model achieving 80%+ recall on a 5% imbalanced dataset. Built PSI monitoring with MLflow versioning. Converted BAUs from SAS to Python by scheduling on GCP using Apache Airflow.',
    techStack: ['Python', 'Scikit-learn', 'SQL', 'GCP', 'Apache Airflow', 'MLflow', 'Docker']
  },
  {
    id: 2,
    company: 'MetLife US',
    role: 'Associate Data Scientist Specialist',
    duration: '05/2024 – 09/2024',
    location: 'Hyderabad, India',
    image: 'https://picsum.photos/seed/metlife/600/400',
    description: 'Developed a Hybrid RAG System for Enterprise Document Intelligence, improving semantic recall by 34%. Implemented hybrid retrieval combining dense embeddings with BM25 sparse search. Extracted keywords as topic with probabilities using BERTopic.',
    techStack: ['NLP', 'RAG', 'LangChain', 'BERT', 'HDBSCAN', 'BERTopic', 'Python']
  },
  {
    id: 3,
    company: 'RWE',
    role: 'Data Analyst Energy Trading',
    duration: '11/2024 – 08/2025',
    location: 'Essen, Germany',
    image: 'https://picsum.photos/seed/rwe/600/400',
    description: 'Designed a dual-source automated trading pipeline using OAuth2 and AMQP/RabbitMQ. Built an event-driven Azure Function engine applying ML-driven price-spread thresholds. Deployed an Azure Data Factory reconciliation pipeline.',
    techStack: ['Python', 'Azure Function Apps', 'Azure Data Factory', 'Azure SQL', 'RabbitMQ']
  },
  {
    id: 4,
    company: 'Commerzbank AG',
    role: 'Model Risk Management (Model Validation Intern)',
    duration: '10/2025 – 03/2026',
    location: 'Frankfurt, Germany',
    image: 'https://picsum.photos/seed/commerzbank/600/400',
    description: 'Built an automated tool to screen 4,000+ IT system records and flag those using quantitative/mathematical models. Engineered a Python-based three-tier fuzzy matching engine across 12 financial risk domains. Validated IPV processes and applied SABR-based volatility calibration.',
    techStack: ['Python', 'Pandas', 'NumPy', 'Excel', 'VBA', 'LaTeX']
  }
];
