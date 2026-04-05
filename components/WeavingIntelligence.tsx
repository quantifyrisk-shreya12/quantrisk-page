import React from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { PlusIcon } from './icons/PlusIcon';
import HeroStats from './HeroStats';

interface WeavingIntelligenceProps {
  navigateTo: (page: string) => void;
}

const WeavingIntelligence: React.FC<WeavingIntelligenceProps> = ({ navigateTo }) => {
  return (
    <section className="py-24 text-center">
      {/* Profile photo */}
      <div className="mb-8 flex justify-center">
        <img
          src="https://raw.githubusercontent.com/quantifyrisk-shreya12/quantrisk-page/main/assets/shreya_foto.jpg"
          alt="Shreya - Financial Analytics & AI Specialist"
          className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white shadow-xl"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Tagline */}
      <p className="text-lg text-gray-600 mb-4">Welcome to my portfolio</p>

      {/* Hero Headline */}
      <h1 className="text-5xl md:text-7xl font-extrabold mb-10 text-gray-900">
        <span className="text-gradient">From Financial Risk to Generative AI —</span>{' '}
        <br />
        Building Intelligent Systems That Drive Real Impact
      </h1>

      {/* ── HeroStats replaces the old paragraph ── */}
      <HeroStats />

      {/* CTA Buttons */}
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

      {/* Divider */}
      <div className="flex items-center justify-center">
        <div className="flex-grow h-px bg-gray-200"></div>
        <PlusIcon className="w-8 h-8 text-gray-400 mx-4" />
        <div className="flex-grow h-px bg-gray-200"></div>
      </div>
    </section>
  );
};

export default WeavingIntelligence;
