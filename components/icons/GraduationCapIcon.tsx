import React from 'react';

interface IconProps {
  className?: string;
}

export const GraduationCapIcon: React.FC<IconProps> = ({ className }) => (
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
    <path d="M6 13.5l6 3.5l6 -3.5" />
    <path d="M6 10l6 3.5l6 -3.5" />
    <path d="M12 19l-6 -3.5" />
    <path d="M18 10v3.5" />
    <path d="M22 10.5l-10 5.5l-10 -5.5" />
    <path d="M4 10.5v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-3" />
  </svg>
);