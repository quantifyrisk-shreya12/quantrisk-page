import React, { useState } from 'react';
import { Logo } from './Logo';
import { MenuIcon } from './icons/MenuIcon';
import { CloseIcon } from './icons/CloseIcon';

interface HeaderProps {
  currentPage: string;
  navigateTo: (page: string) => void;
}

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'Projects', id: 'projects' },
  { name: 'Experience', id: 'experience' },
  { name: 'Education', id: 'education' },
  { name: 'Certificates', id: 'certificates' },
  { name: 'About Me', id: 'about' },
];

const Header = React.forwardRef<HTMLElement, HeaderProps>(({ currentPage, navigateTo }, ref) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getLinkClass = (pageId: string) => {
    const isActive = currentPage === pageId;
    if (pageId === 'projects' && isActive) {
      return 'bg-indigo-600 text-white font-semibold rounded-full px-4 py-2 transition-all';
    }
    return `text-lg ${isActive ? 'text-gray-900 font-semibold' : 'text-gray-500'} hover:text-gray-900 transition-colors px-4 py-2`;
  };

  return (
    <>
      <header ref={ref} className="py-4 sticky top-0 z-50 transition-colors duration-300 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-6 lg:px-8 flex justify-between items-center">
          <Logo dark navigateTo={navigateTo} />
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => navigateTo(link.id)}
                className={getLinkClass(link.id)}
              >
                {link.name}
              </button>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
              <MenuIcon className="w-8 h-8 text-gray-800" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-72 bg-white text-black shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-6">
            <div className="flex justify-between items-center mb-10">
                <Logo dark navigateTo={navigateTo} />
                 <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                    <CloseIcon className="w-7 h-7" />
                </button>
            </div>
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  navigateTo(link.id);
                  setIsMenuOpen(false);
                }}
                className={`text-lg text-left p-4 rounded-lg ${currentPage === link.id ? 'bg-indigo-100 text-indigo-700 font-bold' : 'text-gray-700 font-medium'} hover:bg-gray-100 transition-colors`}
              >
                {link.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
      {isMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsMenuOpen(false)}></div>}
    </>
  );
});

export default Header;