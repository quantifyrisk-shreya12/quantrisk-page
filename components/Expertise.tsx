import React from 'react';
import { BrainCircuitIcon } from './icons/BrainCircuitIcon';
import { skillsData, SkillCategory } from './SkillsData';

const ExpertiseCard: React.FC<{ category: SkillCategory }> = ({ category }) => (
  <div className="bg-white border border-gray-200 rounded-2xl p-8 h-full shadow-sm hover:shadow-lg transition-shadow">
    <h3 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-4">{category.category}</h3>
    <ul className="space-y-4">
      {category.skills.map((skill, index) => (
        <li key={index} className="flex flex-col">
          <div className="flex justify-between items-center mb-1">
            <span className="font-medium text-gray-800">{skill.name}</span>
            <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">{skill.level}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div className="bg-indigo-500 h-1.5 rounded-full" style={{ width: `${skill.percentage}%` }}></div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-20">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3">
            <BrainCircuitIcon className="w-8 h-8 text-indigo-500" />
            <h2 className="text-4xl md:text-5xl font-extrabold section-title-gradient">
                Technical Expertise & Industry Applications
            </h2>
        </div>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mt-4">
            Applying production-grade Machine Learning, NLP, and Cloud automation to solve high-stakes problems in financial risk, insurance analytics, and intelligent enterprise systems.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((category, index) => (
          <ExpertiseCard key={index} category={category} />
        ))}
      </div>
    </section>
  );
};

export default Expertise;