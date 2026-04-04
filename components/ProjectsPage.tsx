import React, { useState, useMemo, useRef, useEffect } from 'react';
import Header from './Header';
import ProjectsHero from './ProjectsHero';
import FilterBar from './FilterBar';
import ProjectsGrid from './ProjectsGrid';
import FooterNew from './FooterNew';
import FloatingActionButton from './FloatingActionButton';
import { projectsData } from './ProjectData';

interface ProjectsPageProps {
  currentPage: string;
  navigateTo: (page: string, projectId?: number) => void;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ currentPage, navigateTo }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const currentFooterRef = footerRef.current;
    if (currentFooterRef) {
      observer.observe(currentFooterRef);
    }

    return () => {
      if (currentFooterRef) {
        observer.unobserve(currentFooterRef);
      }
    };
  }, []);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);

    // Re-check after a short delay for any late-rendering elements
    const timeoutId = setTimeout(updateHeaderHeight, 100);

    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
      clearTimeout(timeoutId);
    };
  }, []);


  const filteredProjects = useMemo(() => {
    return projectsData.filter(project => {
      const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
      const matchesSearch = 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="bg-[#F8F7FF] text-gray-800 font-sans min-h-screen">
      <Header ref={headerRef} currentPage={currentPage} navigateTo={navigateTo} />
      <main className="container mx-auto px-6 lg:px-8 py-12">
        <ProjectsHero />
        <FilterBar 
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          isHidden={isFooterVisible}
          stickyTop={headerHeight}
        />
        <ProjectsGrid projects={filteredProjects} navigateToDetail={navigateTo} />
      </main>
      <FooterNew ref={footerRef} navigateTo={navigateTo} />
      <FloatingActionButton />
    </div>
  );
};

export default ProjectsPage;