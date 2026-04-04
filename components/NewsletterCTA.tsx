import React from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

const NewsletterCTA: React.FC = () => {
  return (
    <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 mb-24">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold text-gray-900">Stay Updated</h2>
          <p className="text-gray-600 mt-2 max-w-lg">
            Subscribe to my newsletter to get the latest updates on my projects, articles, and research findings.
          </p>
        </div>
        <form className="w-full max-w-md flex flex-col sm:flex-row gap-3">
          <label htmlFor="email-input" className="sr-only">Email address</label>
          <input
            id="email-input"
            type="email"
            placeholder="Enter your email"
            required
            className="flex-grow px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
          >
            Subscribe
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterCTA;
