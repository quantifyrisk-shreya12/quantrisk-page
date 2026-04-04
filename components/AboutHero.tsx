import React from 'react';

const AboutHero: React.FC = () => {
  return (
    <section className="text-center py-16">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 text-gradient">
        About Me
      </h1>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
        AI/ML Engineer with a knack for building smart, scalable, and full-stack AI systems.
      </p>
    </section>
  );
};

export default AboutHero;