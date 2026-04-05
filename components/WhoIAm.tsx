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
                 I'm <strong className="text-gray-800">Shreya Biswas</strong>, a quantitative analyst and AI/ML professional based in <strong className="text-gray-800">Kiel, Germany</strong>, with 4+ years of hands-on experience delivering intelligent data solutions across <strong className="text-gray-800">financial services, insurance, and energy trading</strong>.
            </p>
            <p>
                My core strength lies in building end-to-end analytical systems — from <strong className="text-gray-800"> fraud detection, credit default PD models</strong> (XGBoost, 80%+ recall) and <strong className="text-gray-800">Hybrid RAG pipelines</strong> that boosted semantic recall by 34%, to <strong className="text-gray-800">event-driven algorithmic trading systems</strong> on Azure and <strong className="text-gray-800">Python-based model screening tools</strong> for regulatory compliance at Commerzbank AG. I am passionate about applying advanced statistical modeling, NLP, and end-to-end data pipelines to solve high-impact business challenges. From predictive analytics and intelligent automation to robust financial risk management.
            </p>
            <p>
                 I work at the intersection of <strong className="text-gray-800">quantitative finance and applied AI</strong> — leveraging Agentic AI, Gen AI, machine learning, NLP, and cloud automation (Azure, GCP) to solve high-stakes problems in <strong className="text-gray-800">Financial Crime and Compliance, Fraud Detection, Credit Risk, Insurance Analytics, and Intelligent Automation</strong>. Currently pursuing an <strong className="text-gray-800">M.Sc. in Quantitative Finance at CAU Kiel</strong>, I am actively seeking roles where advanced analytics and AI drive real financial decision-making.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-12">
            <StatCard icon={<CodeIcon className="w-6 h-6" />} value="4+" label="Years of Experience" />
            <StatCard icon={<LLMStatIcon className="w-6 h-6" />} value="4" label="Companies Across 2 Countries" />
            <StatCard icon={<BookIcon className="w-6 h-6" />} value="2" label="Master's Degrees" />
            <StatCard icon={<GraduationCapIcon className="w-6 h-6" />} value="M.Sc." label="Quantitative Finance (Current)" />
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