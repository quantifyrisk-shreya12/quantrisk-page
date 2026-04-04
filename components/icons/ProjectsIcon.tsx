import React from 'react';

interface IconProps {
  className?: string;
}

export const ProjectsIcon: React.FC<IconProps> = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={className}
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        strokeWidth="2" 
        stroke="currentColor" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 4m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z" />
        <path d="M13 8h6a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-6" />
        <path d="M7 16h1" />
        <path d="M7 12h1" />
    </svg>
);
