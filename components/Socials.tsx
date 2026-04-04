
import React from 'react';
import { GithubIcon } from './icons/GithubIcon';
import { TwitterIcon } from './icons/TwitterIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { FigmaIcon } from './icons/FigmaIcon';

const Socials: React.FC = () => {
  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <h3 className="text-xl font-semibold text-gray-300">Follow me on</h3>
        <div className="flex items-center gap-6">
          <a href="#" aria-label="Github" className="text-gray-400 hover:text-indigo-400 transition-colors">
            <GithubIcon className="w-8 h-8" />
          </a>
          <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-indigo-400 transition-colors">
            <TwitterIcon className="w-8 h-8" />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-indigo-400 transition-colors">
            <LinkedinIcon className="w-8 h-8" />
          </a>
           <a href="#" aria-label="Figma" className="text-gray-400 hover:text-indigo-400 transition-colors">
            <FigmaIcon className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Socials;
