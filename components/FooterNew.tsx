import React from 'react';
import { Logo } from './Logo';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { EnvelopeIcon } from './icons/EnvelopeIcon';
import { SendIcon } from './icons/SendIcon';

interface FooterNewProps {
  navigateTo: (page: string) => void;
}

const FooterNew = React.forwardRef<HTMLElement, FooterNewProps>(({ navigateTo }, ref) => {
  return (
    <footer ref={ref} className="bg-white text-gray-600 border-t border-gray-200">
      <div className="container mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Logo dark navigateTo={navigateTo} />
            <p className="mt-4 text-gray-500 max-w-xs">
             Exploring the intersection of AI, Machine Learning, and practical applications to solve real-world problems.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Github" className="text-gray-500 hover:text-indigo-600 transition-colors"><GithubIcon className="w-6 h-6" /></a>
              <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-indigo-600 transition-colors"><LinkedinIcon className="w-6 h-6" /></a>
              <a href="mailto:contact@akash-ai.com" aria-label="Email" className="text-gray-500 hover:text-indigo-600 transition-colors"><EnvelopeIcon className="w-6 h-6" /></a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:col-span-2 gap-8">
            {/* Navigation Column */}
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase mb-4">Navigation</h3>
              <ul className="space-y-3">
                <li><button onClick={() => navigateTo('home')} className="hover:text-indigo-600 transition-colors">Home</button></li>
                <li><button onClick={() => navigateTo('about')} className="hover:text-indigo-600 transition-colors">About Me</button></li>
                <li><button onClick={() => navigateTo('projects')} className="hover:text-indigo-600 transition-colors">Projects</button></li>
                <li><button onClick={() => navigateTo('knowledge')} className="hover:text-indigo-600 transition-colors">Knowledge Hub</button></li>
                <li><button onClick={() => navigateTo('contact')} className="hover:text-indigo-600 transition-colors">Contact</button></li>
              </ul>
            </div>
            {/* Stay Updated Column */}
            <div>
                <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                    <div className="flex items-center gap-3 mb-3">
                        <EnvelopeIcon className="w-6 h-6 text-indigo-600" />
                        <h3 className="text-lg font-semibold text-gray-800">Stay Updated</h3>
                    </div>
                    <p className="mb-4 text-gray-500 text-sm">Subscribe to our newsletter for the latest AI/ML insights, project updates, and more.</p>
                    <form className="flex flex-col gap-3">
                        <div className="relative">
                            <label htmlFor="footer-email" className="sr-only">Email address</label>
                             <EnvelopeIcon className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                            <input type="email" id="footer-email" placeholder="Enter your email" className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>
                        <button type="submit" className="w-full bg-indigo-600 text-white px-4 py-2.5 font-semibold rounded-md hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
                            <span>Subscribe</span>
                            <SendIcon className="w-5 h-5"/>
                        </button>
                    </form>
                </div>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>&copy; 2025 Akash-AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
});

export default FooterNew;