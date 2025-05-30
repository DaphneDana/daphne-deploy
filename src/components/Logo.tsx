// src/components/Logo.tsx
import React from 'react';

interface LogoProps {
  className?: string;
  textColor?: string; 
  accentColor?: string; 
}

const Logo: React.FC<LogoProps> = ({
  className = "h-10 w-auto",
  textColor = "text-blue-600",
  accentColor = "text-teal-400"
}) => {
  return (
    <svg
      viewBox="0 0 200 50"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="LLP Company Logo"
    >
      {/* LLP Text */}
      <text
        x="10"
        y="38"
        fontFamily="Arial, sans-serif"
        fontSize="38"
        fontWeight="bold"
        className={`fill-current ${textColor}`}
      >
        L
      </text>
      <text
        x="40"
        y="38"
        fontFamily="Arial, sans-serif"
        fontSize="38"
        fontWeight="bold"
        className={`fill-current ${textColor}`}
      >
        L
      </text>
      <text
        x="70"
        y="38"
        fontFamily="Arial, sans-serif"
        fontSize="38"
        fontWeight="bold"
        className={`fill-current ${textColor}`}
      >
        P
      </text>

      {/* AI/ML inspired design elements */}
      {/* Connecting line */}
      <line
        x1="115"
        y1="15"
        x2="165"
        y2="15"
        strokeWidth="3"
        className={`stroke-current ${accentColor} opacity-70`}
      />

      {/* Nodes */}
      <circle cx="115" cy="15" r="5" className={`fill-current ${accentColor}`} />
      <circle cx="140" cy="15" r="7" className={`fill-current ${textColor}`} />
      <circle cx="165" cy="15" r="5" className={`fill-current ${accentColor}`} />

      {/* Subtle 'brainwave' or 'data flow' lines */}
      <path
        d="M110 30 Q 125 20, 140 30 T 170 30"
        strokeWidth="2.5"
        className={`stroke-current ${accentColor} opacity-50`}
        fill="none"
      />
       <path
        d="M10 15 Q 25 25, 40 15 T 70 15"
        strokeWidth="2"
        className={`stroke-current ${textColor} opacity-30`}
        fill="none"
      />
    </svg>
  );
};

export default Logo;