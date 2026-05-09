import React from 'react';
import styles from './ErrorState.module.css';

interface ErrorStateProps {
  message?: string;
  onRetry: () => void;
}

const ErrorState: React.FC<ErrorStateProps> = ({ 
  message = "Something went wrong while loading events.", 
  onRetry 
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 className={styles.title}>Unable to Load Events</h3>
      <p className={styles.message}>{message}</p>
      <button className={styles.retryButton} onClick={onRetry}>
        Try Again
      </button>
    </div>
  );
};

export default ErrorState;
