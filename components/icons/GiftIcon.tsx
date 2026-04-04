import React from 'react';

interface IconProps {
  className?: string;
}

export const GiftIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w.org/2000/svg"
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
    <path d="M3 8m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" />
    <path d="M12 8l0 13" />
    <path d="M19 12h-14" />
    <path d="M7.5 8a2.5 2.5 0 0 1 0 -5a2.5 2.5 0 0 1 4.5 1.5" />
    <path d="M16.5 8a2.5 2.5 0 0 0 0 -5a2.5 2.5 0 0 0 -4.5 1.5" />
  </svg>
);
