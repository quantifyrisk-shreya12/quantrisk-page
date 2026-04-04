import React from 'react';
import { CodeIcon } from './icons/CodeIcon';
import { LLMStatIcon } from './icons/LLMStatIcon';
import { BookIcon } from './icons/BookIcon';
import { GraduationCapIcon } from './icons/GraduationCapIcon';

const StatCard: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
    <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-4">
        <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg">
            {icon}
        </div>
        <div>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            <p className="text-sm text-gray-500">{label}</p>
        </div>
    </div>
);

const WhoIAm: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Who I Am</h2>
        <div className="text-lg text-gray-600 space-y-4">
            <p>
                I'm a <strong className="text-gray-800">Data Scientist and ML Engineer</strong> based in Berlin with over 5 years of experience building <strong className="text-gray-800">scalable machine learning pipelines</strong> and applying <strong className="text-gray-800">statistical models</strong> to solve real-world problems. Over the past year, I've also explored <strong className="text-gray-800">LLMs</strong> and <strong className="text-gray-800">RAG architectures</strong>, blending classic data science with cutting-edge AI.
            </p>
            <p>
                My sweet spot is transforming <strong className="text-gray-800">complex data</strong> into practical, intelligent systems. I work across the stack—<strong className="text-gray-800">data ingestion, modeling, evaluation, and deployment</strong>—using tools like <strong className="text-gray-800">PyTorch, Python, Scikit-learn, and Hugging Face</strong> to create solutions that are both <strong className="text-gray-800">accurate and efficient</strong>.
            </p>
            <p>
                I thrive on bridging <strong className="text-gray-800">ML, statistics, and AI</strong>, whether it's <strong className="text-gray-800">forecasting trends, classifying data,</strong> or fine-tuning models for <strong className="text-gray-800">retrieval and generation</strong> tasks. I'm passionate about turning <strong className="text-gray-800">raw data into actionable insights and intelligent applications</strong>.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-12">
            <StatCard icon={<CodeIcon className="w-6 h-6" />} value="5+" label="Years of Experience" />
            <StatCard icon={<LLMStatIcon className="w-6 h-6" />} value="1.5+" label="Years with LLMs" />
            <StatCard icon={<BookIcon className="w-6 h-6" />} value="20+" label="Key Projects" />
            <StatCard icon={<GraduationCapIcon className="w-6 h-6" />} value="M.Sc." label="Data Science" />
        </div>
        
        <div className="w-full max-w-2xl mx-auto">
            <img 
                src="https://i.imgur.com/ofGfC3E.png" 
                alt="Portrait of the engineer"
                className="rounded-2xl shadow-lg w-full object-cover"
            />
        </div>
      </div>
    </section>
  );
};

export default WhoIAm;