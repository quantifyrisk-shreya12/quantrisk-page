import React from 'react';

interface IconProps {
  className?: string;
}

export const SparkleIcon: React.FC<IconProps> = ({ className }) => (
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
    <path d="M12 2l2.35 2.35l3.65 .55l-2.65 2.55l.65 3.55l-3.3 -1.75l-3.3 1.75l.65 -3.55l-2.65 -2.55l3.65 -.55z" />
    <path d="M3 12l2.35 2.35l3.65 .55l-2.65 2.55l.65 3.55l-3.3 -1.75l-3.3 1.75l.65 -3.55l-2.65 -2.55l3.65 -.55z" />
    <path d="M21 12l-2.35 2.35l-3.65 .55l2.65 2.55l-.65 3.55l3.3 -1.75l3.3 1.75l-.65 -3.55l2.65 -2.55l-3.65 -.55z" />
  </svg>
);
