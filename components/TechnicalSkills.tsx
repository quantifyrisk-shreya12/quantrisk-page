import React from 'react';
// FIX: Import skillsData and ProficiencyLevel type from SkillsData.ts
import { skillsData, type ProficiencyLevel } from './SkillsData';

// FIX: Use the imported ProficiencyLevel type for the proficiency prop to ensure consistency and fix the type error.
const ProficiencyBar: React.FC<{ skill: string; proficiency: ProficiencyLevel; percentage: number }> = ({ skill, proficiency, percentage }) => (
    <div className="mb-4">
        <div className="flex justify-between items-center mb-1">
            <p className="font-semibold text-gray-700">{skill}</p>
            <p className="text-sm text-gray-500">{proficiency}</p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
                className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2.5 rounded-full" 
                style={{ width: `${percentage}%` }}
            ></div>
        </div>
    </div>
);


const TechnicalSkills: React.FC = () => {
  return (
    <section className="py-16">
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Technical Skills & Proficiencies
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 mt-4">
                A comprehensive overview of my technical expertise across various AI and development domains.
            </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-8">
            {skillsData.map(category => (
                <div key={category.category} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">{category.category}</h3>
                    {category.skills.map(skill => (
                        <ProficiencyBar key={skill.name} skill={skill.name} proficiency={skill.level} percentage={skill.percentage} />
                    ))}
                </div>
            ))}
        </div>
    </section>
  );
};

export default TechnicalSkills;
