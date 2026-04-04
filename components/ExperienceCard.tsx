import React from 'react';
import { Experience } from './ExperienceData';
import { BriefcaseIcon } from './icons/BriefcaseIcon';

interface ExperienceCardProps extends Experience {}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ company, role, duration, location, image, description, techStack }) => (
  <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col h-full shadow-sm hover:shadow-lg transition-shadow duration-300">
    <div className="w-full h-56 block">
      <img src={image} alt={company} className="w-full h-full object-cover" />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold text-gray-900 mb-1">
        {role}
      </h3>
      <h4 className="text-lg font-semibold text-indigo-600 mb-2">
        {company}
      </h4>
      <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
        <span>{duration}</span>
        <span>{location}</span>
      </div>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <div className="mt-auto pt-4 border-t border-gray-200">
        <p className="text-gray-800 font-semibold mb-2">Tech Stack:</p>
        <div className="flex flex-wrap gap-2">
          {techStack.map(tag => (
            <span key={tag} className="bg-indigo-100 text-indigo-700 text-sm font-medium px-2.5 py-1 rounded-full">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ExperienceCard;
