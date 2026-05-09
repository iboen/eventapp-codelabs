import React from 'react';
import styles from './EmptyState.module.css';

interface EmptyStateProps {
  message?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ 
  message = "No upcoming events found. Please check back soon!" 
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      <h3 className={styles.title}>No Events Found</h3>
      <p className={styles.message}>{message}</p>
    </div>
  );
};

export default EmptyState;
