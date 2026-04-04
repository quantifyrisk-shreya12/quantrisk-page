import React from 'react';
import { SearchIcon } from './icons/SearchIcon';

interface FilterBarProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  isHidden: boolean;
  stickyTop: number;
}

const categories = ['All', 'Time series analysis', 'Computer Vision', 'Data Science', 'Engineering', 'Graph theory', 'NLP'];

const FilterBar: React.FC<FilterBarProps> = ({ activeCategory, setActiveCategory, searchTerm, setSearchTerm, isHidden, stickyTop }) => {
  return (
    <section 
      style={{ top: stickyTop > 0 ? `${stickyTop}px` : undefined }}
      className={`sticky z-30 bg-[#F8F7FF] shadow-sm -mx-6 lg:-mx-8 px-6 lg:px-8 py-5 mb-12 transition-all duration-300 ${isHidden ? 'opacity-0 invisible -translate-y-full' : 'opacity-100 visible translate-y-0'}`}
    >
      <div className="flex flex-col md:flex-row gap-6 md:items-center">
        <div className="relative flex-grow">
          <label htmlFor="search-projects" className="font-semibold text-gray-800 mb-2 block">Search Projects</label>
          <div className="relative">
            <input
              type="text"
              id="search-projects"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by title, description"
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            />
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <SearchIcon className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
        <div className="md:pl-6">
            <h3 className="text-md font-semibold text-gray-800 mb-2 shrink-0">Filter by Category</h3>
            <div className="flex flex-wrap gap-2">
            {categories.map(category => (
                <button
                key={category}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`px-4 py-2 text-sm font-semibold rounded-full whitespace-nowrap transition-all duration-200 ${
                    activeCategory === category
                    ? 'bg-indigo-600 text-white shadow'
                    : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-100 hover:border-gray-400'
                }`}
                >
                {category}
                </button>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default FilterBar;