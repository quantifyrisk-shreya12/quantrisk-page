import React from 'react';
import { GiftIcon } from './icons/GiftIcon';

const ProjectsHero: React.FC = () => {
  return (
    <section className="text-center py-16 bg-white rounded-2xl shadow-sm border border-gray-200 mb-12">
      <div className="flex justify-center mb-4">
        <div className="bg-indigo-100 p-3 rounded-full">
          <GiftIcon className="w-8 h-8 text-indigo-600" />
        </div>
      </div>
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
        My Projects
      </h1>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
        Here is a collection of my work. Feel free to browse through and filter by category to see what I've been working on.
      </p>
    </section>
  );
};

export default ProjectsHero;
