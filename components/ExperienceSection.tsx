import React from 'react';
import { BriefcaseIcon } from './icons/BriefcaseIcon';
import { experienceData } from './ExperienceData';
import ExperienceCard from './ExperienceCard';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <div className="text-center mb-12">
         <div className="inline-flex items-center gap-3">
            <BriefcaseIcon className="w-8 h-8 text-indigo-500" />
            <h2 className="text-4xl md:text-5xl font-extrabold section-title-gradient">
                Professional Experience
            </h2>
        </div>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mt-4">
          My journey across financial services and AI domains, building scalable and intelligent solutions.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
        {experienceData.map((exp) => (
          <ExperienceCard key={exp.id} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
