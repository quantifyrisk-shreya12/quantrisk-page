import React from 'react';
import { Briefcase, Brain, Sparkles, GraduationCap } from 'lucide-react';

const HeroStats: React.FC = () => {

  // ─── Part 1: Impact Cards ─────────────────────────────────────────────────
  const cards = [
    {
      icon: <Briefcase className="w-7 h-7 text-indigo-600" />,
      value: '4+ Years',
      label: 'Production-Grade AI & Risk Solutions',
    },
    {
      icon: <Brain className="w-7 h-7 text-indigo-600" />,
      value: 'HSBC · MetLife · RWE · Commerzbank',
      label: 'Cross-Industry Impact',
    },
    {
      icon: <Sparkles className="w-7 h-7 text-indigo-600" />,
      value: 'Agentic AI & NLP',
      label: 'RAG · LangChain · Cloud Automation',
    },
    {
      icon: <GraduationCap className="w-7 h-7 text-indigo-600" />,
      value: 'Dual Masters',
      label: 'Quantitative Finance + Data Science',
    },
  ];

  // ─── Part 2: Career Timeline ──────────────────────────────────────────────
  const timeline = [
    {
      company: 'HSBC',
      role: 'Analyst Business Consulting',
      dot: 'bg-indigo-500',
      ring: 'ring-indigo-200',
    },
    {
      company: 'MetLife US',
      role: 'Associate Data Scientist',
      dot: 'bg-purple-500',
      ring: 'ring-purple-200',
    },
    {
      company: 'RWE',
      role: 'Data Analyst - Energy Trading',
      dot: 'bg-blue-500',
      ring: 'ring-blue-200',
    },
    {
      company: 'Commerzbank AG',
      role: 'Model Validation Intern',
      dot: 'bg-green-500',
      ring: 'ring-green-200',
    },
  ];

  // ─── Part 3: Specialisation Tags ─────────────────────────────────────────
  const tags = [
    'Credit Risk Modelling',
    'Insurance Analytics',
    'Agentic AI',
    'NLP & RAG',
    'Cloud Automation',
    'Quantitative Finance',
    'MLOps',
    'Algorithmic Trading',
  ];

  return (
    <div className="w-full max-w-5xl mx-auto mb-10 space-y-8">

      {/* ── Part 1: Impact Cards ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow duration-200"
          >
            <div className="bg-indigo-50 p-3 rounded-xl">
              {card.icon}
            </div>
            <p className="font-bold text-gray-900 text-sm leading-snug">{card.value}</p>
            <p className="text-xs text-gray-500 leading-snug">{card.label}</p>
          </div>
        ))}
      </div>

      {/* ── Part 2: Horizontal Career Timeline ── */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-8">

        {/* Desktop — horizontal row */}
        <div className="hidden md:flex items-start justify-between relative">
          {/* connecting line sits behind dots */}
          <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200 z-0" />

          {timeline.map((node, i) => (
            <div key={i} className="flex flex-col items-center z-10 flex-1 px-2">
              <div
                className={`w-10 h-10 rounded-full ${node.dot} ring-4 ${node.ring} flex items-center justify-center mb-3 shadow-sm`}
              >
                <span className="text-white text-xs font-bold">{i + 1}</span>
              </div>
              <p className="font-bold text-gray-900 text-sm text-center leading-tight">{node.company}</p>
              <p className="text-xs text-gray-500 text-center mt-1 leading-tight">{node.role}</p>
            </div>
          ))}
        </div>

        {/* Mobile — vertical stack with left line */}
        <div className="flex md:hidden flex-col gap-6 relative">
          {/* vertical connecting line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />

          {timeline.map((node, i) => (
            <div key={i} className="flex items-start gap-4">
              <div
                className={`w-8 h-8 rounded-full ${node.dot} ring-4 ${node.ring} flex items-center justify-center flex-shrink-0 z-10 shadow-sm`}
              >
                <span className="text-white text-xs font-bold">{i + 1}</span>
              </div>
              <div className="pt-1">
                <p className="font-bold text-gray-900 text-sm leading-tight">{node.company}</p>
                <p className="text-xs text-gray-500 mt-0.5 leading-tight">{node.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Part 3: Specialisation Tags ── */}
      <div className="flex flex-wrap justify-center gap-3">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="bg-indigo-50 text-indigo-700 text-sm font-semibold px-4 py-2 rounded-full border border-indigo-100 hover:bg-indigo-100 transition-colors duration-150"
          >
            {tag}
          </span>
        ))}
      </div>

    </div>
  );
};

export default HeroStats;
