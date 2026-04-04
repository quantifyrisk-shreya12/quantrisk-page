import React from 'react';
import { ProjectsIcon } from './icons/ProjectsIcon';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { projectsData } from './ProjectData';
import ProjectCardNew from './ProjectCardNew';

interface FeaturedProjectsProps {
  navigateTo: (page: string, projectId?: number) => void;
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ navigateTo }) => {
  // Take the first 6 projects to feature
  const featuredProjectsData = projectsData.slice(0, 6);

  return (
    <section className="py-20">
      <div className="text-center mb-12">
         <div className="inline-flex items-center gap-3">
            <ProjectsIcon className="w-8 h-8 text-indigo-500" />
            <h2 className="text-4xl md:text-5xl font-extrabold section-title-gradient">
                Featured Projects
            </h2>
        </div>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mt-4">
          Exploring the boundaries of AI and machine learning through hands-on application and innovative solutions.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {featuredProjectsData.map((project) => (
          <ProjectCardNew key={project.id} {...project} navigateToDetail={navigateTo} />
        ))}
      </div>
      <div className="text-center">
         <button 
          onClick={() => navigateTo('projects')}
          className="group flex items-center gap-2 px-8 py-3 bg-transparent text-gray-800 font-medium rounded-lg border-2 border-gray-300 hover:bg-gray-100 hover:border-gray-400 transition-colors mx-auto"
        >
          View All Projects
          <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default FeaturedProjects;