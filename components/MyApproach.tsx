import React from 'react';
import { PeopleIcon } from './icons/PeopleIcon';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';
import { TrendingUpIcon } from './icons/TrendingUpIcon';

const approachData = [
    {
        icon: <PeopleIcon className="w-8 h-8 text-indigo-600" />,
        title: "Full-Stack Mindset",
        description: "Building end-to-end solutions, from robust data pipelines and backend logic to intuitive user-facing interfaces."
    },
    {
        icon: <ShieldCheckIcon className="w-8 h-8 text-indigo-600" />,
        title: "Pragmatic Innovation",
        description: "Applying the right tool for the job, whether it's a classic ML model or a fine-tuned LLM, to deliver efficient and scalable results."
    },
    {
        icon: <TrendingUpIcon className="w-8 h-8 text-indigo-600" />,
        title: "Continuous Learning",
        description: "Staying hands-on with the latest tools and techniques in the fast-paced world of AI to build cutting-edge, optimized systems."
    }
];

const ApproachCard: React.FC<typeof approachData[0]> = ({ icon, title, description }) => (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm h-full">
        <div className="inline-block bg-indigo-100 p-4 rounded-full mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const MyApproach: React.FC = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          My Approach
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mt-4">
          The core principles that guide my work.
        </p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {approachData.map((item, index) => (
            <ApproachCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default MyApproach;