import React from 'react';
import { Project } from './ProjectData';
import ProjectCardNew from './ProjectCardNew';

interface ProjectsGridProps {
  projects: Project[];
  navigateToDetail: (page: string, projectId?: number) => void;
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects, navigateToDetail }) => {
  return (
    <section className="mb-24">
      {projects.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCardNew key={project.id} {...project} navigateToDetail={navigateToDetail} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-lg border border-gray-200">
          <h3 className="text-2xl font-semibold text-gray-800">No Projects Found</h3>
          <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </section>
  );
};

export default ProjectsGrid;