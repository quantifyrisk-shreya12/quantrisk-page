import React from 'react';
import { journeyData } from './JourneyData';
import { BriefcaseIcon } from './icons/BriefcaseIcon';
import { GraduationCapIcon } from './icons/GraduationCapIcon';

const JourneyItem: React.FC<typeof journeyData[0] & { isLast: boolean, index: number }> = ({ type, title, company, location, date, description, isLast, index }) => {
  const Icon = type === 'work' ? BriefcaseIcon : GraduationCapIcon;
  const isLeft = index % 2 === 0;

  return (
    <div className="relative">
      {/* Timeline Dot */}
      <div className={`absolute top-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-2 border-indigo-500 rounded-full z-10`}></div>
      
      {/* Timeline Card */}
      <div className={`w-full flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
        <div className="w-full md:w-5/12">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm relative">
             {/* Icon */}
            <div className="absolute top-4 right-4 bg-indigo-100 p-2 rounded-full">
              <Icon className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <p className="text-indigo-600 font-semibold mt-1">{company} – {location}</p>
            <p className="text-sm text-gray-500 mt-2 mb-3">{date}</p>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfessionalJourney: React.FC = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Professional Journey
        </h2>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="relative space-y-12">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200"></div>
          
          {journeyData.map((item, index) => (
            <JourneyItem 
              key={index} 
              {...item} 
              isLast={index === journeyData.length - 1} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalJourney;