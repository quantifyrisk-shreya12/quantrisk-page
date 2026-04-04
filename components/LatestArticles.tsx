import React from 'react';
import { ArticlesIcon } from './icons/ArticlesIcon';
import { ArrowRightIcon } from './icons/ArrowRightIcon';


const articlesData = [
  {
    image: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop',
    category: 'Transformers',
    title: 'Attention Is All You Need',
    description: 'Unpacking concepts like RAGs and LoRAs, Chain of thought, context window, parameters, tokens, LLM... Attention...',
  },
  {
    image: 'https://images.unsplash.com/photo-1696208262332-a241584c4782?q=80&w=2070&auto=format&fit=crop',
    category: 'LLM Architecture',
    title: 'Overall LLM architecture',
    description: 'A Large Language Model (LLM) predicts the most probable next word in a sequence based on the preceding text...',
  },
];

const ArticleCard: React.FC<typeof articlesData[0]> = ({ image, category, title, description }) => (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
        <div className="p-6">
            <p className="text-indigo-600 font-semibold mb-2">{category}</p>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <a href="#" className="group flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800">
                Read More <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
        </div>
    </div>
)

const LatestArticles: React.FC = () => {
  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3">
            <ArticlesIcon className="w-8 h-8 text-indigo-500" />
            <h2 className="text-4xl md:text-5xl font-extrabold section-title-gradient">
                Latest Articles & Knowledge
            </h2>
        </div>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mt-4">
          Sharing knowledge, research findings, and practical applications in AI and machine learning.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {articlesData.map((article, index) => <ArticleCard key={index} {...article} />)}
      </div>
      <div className="text-center">
         <button className="group flex items-center gap-2 px-8 py-3 bg-transparent text-gray-800 font-medium rounded-lg border-2 border-gray-300 hover:bg-gray-100 hover:border-gray-400 transition-colors mx-auto">
          Explore All Articles
          <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default LatestArticles;