import React from 'react';
import { Project } from './ProjectData';
import Header from './Header';
import FooterNew from './FooterNew';
import FloatingActionButton from './FloatingActionButton';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { CalendarIcon } from './icons/CalendarIcon';
import { LinkIcon } from './icons/LinkIcon';
import { CodeIcon } from './icons/CodeIcon';
import { ChipIcon } from './icons/ChipIcon';

interface ProjectDetailPageProps {
  project: Project;
  navigateTo: (page: string) => void;
}

const CodeSnippet: React.FC<{ language: string; code: string }> = ({ language, code }) => (
    <div className="my-6">
        <div className="bg-gray-800 rounded-t-lg px-4 py-2">
            <p className="text-sm text-gray-300 font-mono">{language}</p>
        </div>
        <pre className="bg-gray-900 text-white p-4 rounded-b-lg overflow-x-auto">
            <code className={`language-${language}`}>{code}</code>
        </pre>
    </div>
);

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ project, navigateTo }) => {
  return (
    <div className="bg-[#F8F7FF] text-gray-800 font-sans min-h-screen">
      <Header currentPage="" navigateTo={navigateTo} />
      <main className="container mx-auto px-6 lg:px-8 py-12">
        <div className="max-w-5xl mx-auto">
          <button
            onClick={() => navigateTo('projects')}
            className="group flex items-center gap-2 text-gray-600 hover:text-indigo-600 font-semibold mb-8 transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </button>

          <div className="mb-6">
            <span className="bg-indigo-100 text-indigo-700 text-sm font-medium px-3 py-1.5 rounded-full">{project.category}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">{project.title}</h1>
            <div className="flex items-center gap-3 text-gray-500 mt-4">
              <CalendarIcon className="w-5 h-5" />
              <span>Created on {project.createdDate}</span>
            </div>
          </div>

          <div className="w-full h-64 md:h-[450px] rounded-2xl overflow-hidden mb-12 shadow-lg border border-gray-200">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 min-w-0">
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">{project.longDescription}</p>
                {project.youtubeVideoId && (
                    <div className="my-6 relative w-full overflow-hidden" style={{ paddingTop: '56.25%' }}>
                         <iframe 
                            className="absolute top-0 left-0 w-full h-full rounded-lg"
                            src={`https://www.youtube.com/embed/${project.youtubeVideoId}`}
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                )}
                {project.codeSnippets?.map((snippet, index) => (
                    <CodeSnippet key={index} language={snippet.language} code={snippet.code} />
                ))}
              </div>
            </div>
            <div className="lg:col-span-1 min-w-0 space-y-8">
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Project Details</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex justify-between"><span className="font-semibold">Category:</span><span>{project.category}</span></div>
                  <div className="flex justify-between"><span className="font-semibold">Created:</span><span>{project.createdDate}</span></div>
                </div>
                 <hr className="my-4 border-gray-200" />
                 <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2"><LinkIcon className="w-5 h-5" />Links</h4>
                 <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 w-full text-left text-gray-800 font-semibold px-4 py-3 rounded-lg transition-colors">
                    <CodeIcon className="w-5 h-5" /> View Code
                </a>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                 <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><ChipIcon className="w-6 h-6" />Technologies Used</h3>
                 <div className="flex flex-wrap gap-2">
                    {project.techStack.map(tag => (
                        <span key={tag} className="bg-indigo-100 text-indigo-700 text-sm font-medium px-2.5 py-1 rounded-full">{tag}</span>
                    ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
      <FooterNew navigateTo={navigateTo} />
      <FloatingActionButton />
    </div>
  );
};

export default ProjectDetailPage;