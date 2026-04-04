import React from 'react';
import { Project } from './ProjectData';
import { CodeIcon } from './icons/CodeIcon';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

interface ProjectCardNewProps extends Project {
    navigateToDetail: (page: string, projectId: number) => void;
}

const ProjectCardNew: React.FC<ProjectCardNewProps> = ({ id, image, title, description, techStack, codeUrl, navigateToDetail }) => (
  <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col h-full shadow-sm hover:shadow-lg transition-shadow duration-300">
    <button onClick={() => navigateToDetail('projectDetail', id)} className="w-full h-56 block">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </button>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold text-gray-900 mb-3">
        <button onClick={() => navigateToDetail('projectDetail', id)} className="text-left text-indigo-600 hover:text-indigo-800 transition-colors">
            {title}
        </button>
      </h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <div className="mb-4">
        <p className="text-gray-800 font-semibold mb-2">Tech Stack:</p>
        <div className="flex flex-wrap gap-2">
          {techStack.map(tag => (
            <span key={tag} className="bg-indigo-100 text-indigo-700 text-sm font-medium px-2.5 py-1 rounded-full">{tag}</span>
          ))}
        </div>
      </div>
      <div className="mt-auto pt-4 border-t border-gray-200 flex justify-between items-center gap-4">
        <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 font-semibold transition-colors">
            <CodeIcon className="w-5 h-5" /> Code
        </a>
        <button onClick={() => navigateToDetail('projectDetail', id)} className="group flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800">
          View Details <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  </div>
);

export default ProjectCardNew;