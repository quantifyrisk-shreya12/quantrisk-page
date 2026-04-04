import React from 'react';
import Header from './Header';
import FooterNew from './FooterNew';
import AboutHero from './AboutHero';
import WhoIAm from './WhoIAm';
import TechnicalSkills from './TechnicalSkills';
import ProfessionalJourney from './ProfessionalJourney';
import MyApproach from './MyApproach';
import FloatingActionButton from './FloatingActionButton';

interface AboutPageProps {
  currentPage: string;
  navigateTo: (page: string, projectId?: number) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ currentPage, navigateTo }) => {
  return (
    <div className="bg-[#F8F7FF] text-gray-800 font-sans min-h-screen">
      <Header currentPage={currentPage} navigateTo={navigateTo} />
      <main className="container mx-auto px-6 lg:px-8 py-12">
        <AboutHero />
        <WhoIAm />
        <TechnicalSkills />
        <ProfessionalJourney />
        <MyApproach />
      </main>
      <FooterNew navigateTo={navigateTo} />
      <FloatingActionButton />
    </div>
  );
};

export default AboutPage;