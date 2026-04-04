import React from 'react';

interface IconProps {
  className?: string;
}

export const LLMStatIcon: React.FC<IconProps> = ({ className }) => (
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
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M10 16v-6a2 2 0 1 1 4 0v6" />
    <path d="M10 13h4" />
    <path d="M14 21v-4a2 2 0 1 0 -4 0v4" />
    <path d="M3 12h1m8 -9v1m8 8h1m-15.5 -6.5l.7 .7m12.1 .1l-.7 .7" />
    <path d="M12 3a9 9 0 0 1 9 9a9 9 0 0 1 -9 9a9 9 0 0 1 -9 -9a9 9 0 0 1 9 -9z" />
  </svg>
);