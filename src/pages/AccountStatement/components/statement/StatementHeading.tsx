import React from 'react';

interface StatementHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export const StatementHeading: React.FC<StatementHeadingProps> = ({ children, className = '' }) => (
  <h3 className={`text-xl font-bold text-gray-800 p-6 border-b border-gray-100 ${className}`}>
    {children}
  </h3>
);