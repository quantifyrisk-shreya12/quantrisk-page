import React from 'react';

interface IconProps {
  className?: string;
}

export const DeepLearningIcon: React.FC<IconProps> = ({ className }) => (
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
        <path d="M10 12l-6 4l6 4" />
        <path d="M14 12l6 4l-6 4" />
        <path d="M12 4v16" />
    </svg>
);
