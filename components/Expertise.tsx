import React from 'react';
import { BrainCircuitIcon } from './icons/BrainCircuitIcon';
import { LLMIcon } from './icons/LLMIcon';
import { DeepLearningIcon } from './icons/DeepLearningIcon';
import { MLOpsIcon } from './icons/MLOpsIcon';

const expertiseData = [
  {
    icon: <LLMIcon className="w-10 h-10 mb-4 text-indigo-500" />,
    title: 'Large Language Models',
    points: [
      'Developing and fine-tuning LLMs for various NLP tasks (text generation, summarization, etc.)',
      'Prompt engineering & optimization',
      'OPT architecture implementation',
      'Integrating LLMs with external tools',
    ],
  },
  {
    icon: <DeepLearningIcon className="w-10 h-10 mb-4 text-indigo-500" />,
    title: 'Deep Learning',
    points: [
      'Designing and optimizing neural networks for computer vision & NLP',
      'PyTorch & TensorFlow proficiency',
      'CNN & Transformer architectures',
      'Model optimization for performance',
    ],
  },
  {
    icon: <MLOpsIcon className="w-10 h-10 mb-4 text-indigo-500" />,
    title: 'MLOps & Deployment',
    points: [
      'Building automated ML pipelines from data ingestion to model deployment',
      'Robust CI/CD pipelines',
      'Monitoring & maintenance',
      'Containerization & orchestration',
    ],
  },
];

const ExpertiseCard: React.FC<{ icon: React.ReactNode; title: string; points: string[] }> = ({ icon, title, points }) => (
  <div className="bg-white border border-gray-200 rounded-2xl p-8 h-full shadow-sm hover:shadow-lg transition-shadow">
    {icon}
    <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
    <ul className="space-y-3 text-gray-600">
      {points.map((point, index) => (
        <li key={index} className="flex items-start">
          <span className="text-indigo-500 mr-3 mt-1">&#8226;</span>
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </div>
);


const Expertise: React.FC = () => {
  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3">
            <BrainCircuitIcon className="w-8 h-8 text-indigo-500" />
            <h2 className="text-4xl md:text-5xl font-extrabold section-title-gradient">
                AI, Expertise & Technologies
            </h2>
        </div>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mt-4">
            Leveraging cutting-edge technologies to create intelligent, high-impact solutions.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {expertiseData.map((item, index) => (
          <ExpertiseCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Expertise;