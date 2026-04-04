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
    category: 'AI/ML Frameworks',
    skills: [
      { name: 'PyTorch', level: 'Expert', percentage: 95 },
      { name: 'Transformers', level: 'Expert', percentage: 90 },
      { name: 'LangChain / LangGraph', level: 'Advanced', percentage: 85 },
      { name: 'Unsloth & TRL', level: 'Advanced', percentage: 80 },
      { name: 'Pydantic AI', level: 'Proficient', percentage: 70 },
    ],
  },
  {
    category: 'LLM Tools',
    skills: [
      { name: 'RAG Architecture', level: 'Expert', percentage: 90 },
      { name: 'Fine-tuning (LoRA, PEFT)', level: 'Advanced', percentage: 85 },
      { name: 'Prompt Engineering', level: 'Advanced', percentage: 88 },
      { name: 'Ollama', level: 'Advanced', percentage: 80 },
      { name: 'RAGAS (learning)', level: 'Intermediate', percentage: 60 },
    ],
  },
  {
    category: 'Backend & DevOps',
    skills: [
      { name: 'FastAPI', level: 'Advanced', percentage: 85 },
      { name: 'Firebase (Firestore, Auth, Functions)', level: 'Expert', percentage: 90 },
      { name: 'Docker', level: 'Advanced', percentage: 80 },
      { name: 'Supabase', level: 'Advanced', percentage: 80 },
      { name: 'SQLAlchemy', level: 'Proficient', percentage: 75 },
    ],
  },
  {
    category: 'Languages',
    skills: [
      { name: 'Python', level: 'Expert', percentage: 98 },
      { name: 'SQL', level: 'Advanced', percentage: 85 },
      { name: 'TypeScript/JS', level: 'Advanced', percentage: 80 },
      { name: 'Bash', level: 'Intermediate', percentage: 65 },
    ],
  },
  {
    category: 'Vector Databases',
    skills: [
      { name: 'ChromaDB', level: 'Advanced', percentage: 85 },
      { name: 'FAISS', level: 'Proficient', percentage: 70 },
      { name: 'Supabase pgvector', level: 'Advanced', percentage: 80 },
      { name: 'Qdrant', level: 'Proficient', percentage: 75 },
    ],
  },
];
