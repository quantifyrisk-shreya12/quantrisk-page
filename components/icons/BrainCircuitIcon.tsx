import React from 'react';

interface IconProps {
  className?: string;
}

export const BrainCircuitIcon: React.FC<IconProps> = ({ className }) => (
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
        <path d="M12 13m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M12 21a9 9 0 0 0 -5.618 -8.412" />
        <path d="M12 3a9 9 0 0 1 5.618 8.412" />
        <path d="M12 13h-2" />
        <path d="M12 13h2" />
        <path d="M10 11v-2" />
        <path d="M14 11v-2" />
        <path d="M10 15v2" />
        <path d="M14 15v2" />
    </svg>
);
