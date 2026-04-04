import React from 'react';

interface IconProps {
  className?: string;
}

export const LinkIcon: React.FC<IconProps> = ({ className }) => (
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
    <path d="M9 15l6 -6" />
    <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-1.828 1.828a5 5 0 0 1 -7.071 0l-.463 -.536" />
    <path d="M13 18l-.463 .536a5 5 0 0 1 -7.071 -7.072l1.828 -1.828a5 5 0 0 1 7.071 0l.463 .536" />
  </svg>
);