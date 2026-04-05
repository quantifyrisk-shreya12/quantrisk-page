import React from 'react';

interface LogoProps {
    dark?: boolean;
    navigateTo: (page: string) => void;
}

export const Logo: React.FC<LogoProps> = ({ dark = false, navigateTo }) => (
  <button onClick={() => navigateTo('home')} className="flex items-center space-x-2">
     <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" className={dark ? "fill-black" : "fill-white"}/>
        <path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" fill="url(#grad1)"/>
        <path d="M12 7v1m0 8v1m4.95-6.05l-.71.71M7.76 16.24l-.71.71m0-9.19l.71.71m8.48 8.48l.71.71M17 12h-1m-8 0H7" strokeWidth="1.5" strokeLinecap="round" className={dark ? "stroke-black" : "stroke-white"}/>
        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#a779e9', stopOpacity:1}} />
            <stop offset="100%" style={{stopColor: '#8242c7', stopOpacity:1}} />
            </linearGradient>
        </defs>
    </svg>
    <span className={`text-2xl font-bold ${dark ? 'text-black' : 'text-white'}`}>Shreya</span>
  </button>
);