import React from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { PlusIcon } from './icons/PlusIcon';

interface WeavingIntelligenceProps {
  navigateTo: (page: string) => void;
}

const WeavingIntelligence: React.FC<WeavingIntelligenceProps> = ({ navigateTo }) => {
  return (
    <section className="py-24 text-center">
      <p className="text-lg text-gray-600 mb-4">Welcome to my portfolio</p>
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-gray-900">
        <span className="text-gradient">Weaving Intelligence</span> into <br />
        Digital Solutions
      </h1>
      <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-10">
        Welcome to my portfolio. I'm an AI & large language model specialist, transforming complex problems into intelligent, scalable solutions. Explore my projects and articles to see how I leverage cutting-edge technology to build the future.
      </p>
      <div className="flex justify-center gap-4 mb-24">
        <button 
          onClick={() => navigateTo('projects')}
          className="button-gradient text-white font-semibold px-8 py-3 rounded-lg transition-transform hover:scale-105"
        >
          View Projects
        </button>
        <button 
          onClick={() => navigateTo('about')}
          className="group flex items-center gap-2 px-8 py-3 bg-transparent text-gray-800 font-medium rounded-lg border-2 border-gray-300 hover:bg-gray-100 hover:border-gray-400 transition-colors"
        >
          About Me
          <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex-grow h-px bg-gray-200"></div>
        <PlusIcon className="w-8 h-8 text-gray-400 mx-4" />
        <div className="flex-grow h-px bg-gray-200"></div>
      </div>
    </section>
  );
};

export default WeavingIntelligence;