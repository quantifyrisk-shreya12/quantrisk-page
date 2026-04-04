import React from 'react';
import { GraduationCapIcon } from './icons/GraduationCapIcon';

const educationData = [
  {
    degree: "Master’s in Quantitative Finance",
    institution: "Christian-Albrechts-Universität zu Kiel, Kiel, Germany",
    duration: "10/2024 – 09/2027",
    details: "Computational Finance, Probability Calculus, Inferential Statistics"
  },
  {
    degree: "Master’s in Data Science",
    institution: "University of Kalyani, India",
    duration: "09/2019 – 09/2021",
    details: "Statistics, Machine Learning, NLP, Deep Learning, Time Series Forecasting"
  },
  {
    degree: "Bachelor of Science in Statistics",
    institution: "University of Calcutta, India",
    duration: "06/2016 – 06/2019",
    details: "Applied Statistics, Mathematics, Economics"
  }
];

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20">
      <div className="text-center mb-12">
         <div className="inline-flex items-center gap-3">
            <GraduationCapIcon className="w-8 h-8 text-indigo-500" />
            <h2 className="text-4xl md:text-5xl font-extrabold section-title-gradient">
                Education
            </h2>
        </div>
      </div>
      <div className="max-w-4xl mx-auto space-y-6">
        {educationData.map((edu, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-2xl font-bold text-gray-900">{edu.degree}</h3>
                <span className="text-indigo-600 font-semibold whitespace-nowrap mt-1 md:mt-0">{edu.duration}</span>
            </div>
            <h4 className="text-lg text-gray-700 mb-3">{edu.institution}</h4>
            <p className="text-gray-600">{edu.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
