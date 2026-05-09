import React from 'react';
import styles from './Badge.module.css';

interface BadgeProps {
  label: string;
  variant?: string;
}

const Badge: React.FC<BadgeProps> = ({ label, variant = 'primary' }) => {
  const getVariantClass = () => {
    switch (variant.toLowerCase()) {
      case 'workshop': return styles.workshop;
      case 'talk': return styles.talk;
      case 'online': return styles.online;
      case 'open':
      case 'registration open': return styles.open;
      case 'waitlist': return styles.waitlist;
      case 'full':
      case 'closed': return styles.closed;
      default: return styles.primary;
    }
  };

  return (
    <span className={`${styles.badge} ${getVariantClass()}`}>
      {label}
    </span>
  );
};

export default Badge;
