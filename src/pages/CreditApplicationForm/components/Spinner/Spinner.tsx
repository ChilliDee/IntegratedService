import React from 'react';
import styles from './Spinner.module.css';

interface SpinnerProps {
  size?: 'default' | 'large';
  variant?: 'primary' | 'white';
}

export function Spinner({ size = 'default', variant = 'primary' }: SpinnerProps) {
  return (
    <div 
      className={`
        ${styles.spinner}
        ${size === 'large' ? styles.large : ''}
        ${styles[variant]}
      `}
    />
  );
}