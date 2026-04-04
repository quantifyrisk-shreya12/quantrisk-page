import React from 'react';

interface IconProps {
  className?: string;
}

export const MLOpsIcon: React.FC<IconProps> = ({ className }) => (
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
        <path d="M7 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
        <path d="M17 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
        <path d="M7 12h7" />
        <path d="M14 12h-1" />
        <path d="M17 12v-1.5a1.5 1.5 0 0 0 -3 0v1.5" />
        <path d="M17 12v1.5a1.5 1.5 0 0 1 -3 0v-1.5" />
    </svg>
);
