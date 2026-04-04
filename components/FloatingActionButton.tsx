import React from 'react';
import { SparkleIcon } from './icons/SparkleIcon';

const FloatingActionButton: React.FC = () => {
  return (
    <button
      aria-label="AI Assistant"
      className="fixed bottom-8 right-8 bg-indigo-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform hover:scale-110 transition-all duration-200"
    >
      <SparkleIcon className="w-7 h-7" />
    </button>
  );
};

export default FloatingActionButton;
