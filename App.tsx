import React, { useState } from 'react';
import Header from './components/Header';
import WeavingIntelligence from './components/WeavingIntelligence';
import Expertise from './components/Expertise';
import FeaturedProjects from './components/FeaturedProjects';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import CertificatesSection from './components/CertificatesSection';
import ProjectsPage from './components/ProjectsPage';
import ProjectDetailPage from './components/ProjectDetailPage';
import { Project, projectsData } from './components/ProjectData';
import FooterNew from './components/FooterNew';
import AboutPage from './components/AboutPage';

type Route = {
  page: 'home' | 'projects' | 'projectDetail' | 'about' | 'knowledge' | 'contact';
  projectId?: number;
};

const App: React.FC = () => {
  const [route, setRoute] = useState<Route>({ page: 'home' });

  const navigateTo = (page: string, projectId?: number) => {
    if (['experience', 'education', 'certificates'].includes(page)) {
      setRoute({ page: 'home' });
      setTimeout(() => {
        const el = document.getElementById(page);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    setRoute({ page: page as Route['page'], projectId });
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (route.page) {
      case 'about':
        return <AboutPage currentPage={route.page} navigateTo={navigateTo} />;
      case 'projects':
        return <ProjectsPage currentPage={route.page} navigateTo={navigateTo} />;
      case 'projectDetail':
        const project = projectsData.find(p => p.id === route.projectId);
        if (project) {
          return <ProjectDetailPage project={project} navigateTo={navigateTo} />;
        }
        // Fallback to projects page if project not found
        return <ProjectsPage currentPage="projects" navigateTo={navigateTo} />;
      case 'home':
      default:
        return (
          <div className="min-h-screen bg-[#F8F7FF] text-gray-800 font-sans">
            <Header currentPage={route.page} navigateTo={navigateTo} />
            <div className="container mx-auto px-6 lg:px-8">
              <main className="overflow-hidden pt-8">
                <WeavingIntelligence navigateTo={navigateTo} />
                <Expertise />
                <FeaturedProjects navigateTo={navigateTo} />
                <ExperienceSection />
                <EducationSection />
                <CertificatesSection />
              </main>
            </div>
            <FooterNew navigateTo={navigateTo} />
          </div>
        );
    }
  };

  return <>{renderPage()}</>;
};

export default App;