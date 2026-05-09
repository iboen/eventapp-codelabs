import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Badge from './Badge';
import styles from './EventCard.module.css';

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  location: string;
  type: string;
  status: string;
  image: string;
}

const EventCard: React.FC<EventCardProps> = ({ id, title, date, location, type, status, image }) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });

  return (
    <Link href={`/events/${id}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <Image 
          src={image} 
          alt={title} 
          fill 
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className={styles.statusOverlay}>
          <Badge label={status === 'Open' ? 'Registration Open' : status} variant={status} />
        </div>
      </div>
      
      <div className={styles.content}>
        <div className={styles.typeWrapper}>
          <Badge label={type} variant={type} />
        </div>
        
        <h3 className={styles.title}>{title}</h3>
        
        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{formattedDate}</span>
          </div>
          <div className={styles.metaItem}>
            <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{location}</span>
          </div>
        </div>
        
        <div className={styles.footer}>
          <span className={styles.viewDetails}>View Details</span>
          <svg className={styles.arrowIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
