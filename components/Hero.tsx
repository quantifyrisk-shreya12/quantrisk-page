
import React from 'react';
import { DownloadIcon } from './icons/DownloadIcon';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

const Hero: React.FC = () => {
  return (
    <section className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <p className="text-xl text-gray-300">Hi, I am Jhon Doe</p>
          <h2 className="text-5xl md:text-6xl font-extrabold my-4 leading-tight">
            <span className="text-gradient">Creative Designer</span> & Developer
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto lg:mx-0">
            I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start gap-4">
             <button className="group relative inline-flex items-center justify-center px-8 py-3 bg-gray-800 text-white font-medium rounded-lg overflow-hidden transition-all duration-300">
              <div className="absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
              <span className="relative z-10 flex items-center gap-2">
                <DownloadIcon className="w-5 h-5" />
                Download CV
              </span>
            </button>
            <button className="group flex items-center gap-2 px-8 py-3 bg-transparent text-white font-medium rounded-lg border-2 border-gray-600 hover:bg-gray-800 hover:border-gray-800 transition-colors">
              About Me
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full blur-2xl opacity-50"></div>
            <img 
              src="https://picsum.photos/id/237/500/500" 
              alt="Jhon Doe Portrait" 
              className="relative w-full h-full object-cover rounded-full border-4 border-gray-800"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
