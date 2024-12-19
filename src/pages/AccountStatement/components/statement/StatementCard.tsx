import React from 'react';

interface StatementCardProps {
  children: React.ReactNode;
  className?: string;
}

export const StatementCard: React.FC<StatementCardProps> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-2xl shadow-lg ${className}`}>
    {children}
  </div>
);