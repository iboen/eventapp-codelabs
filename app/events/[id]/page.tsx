'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import styles from './EventDetail.module.css';

export default function EventDetail() {
  const params = useParams();
  const id = params.id;

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className="container">
          <Link href="/" className={styles.backLink}>
            <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Directory
          </Link>
          <h1 className={styles.title}>Event Details</h1>
        </div>
      </header>

      <main className="container">
        <div className={styles.card}>
          <p className={styles.placeholder}>
            This is a placeholder for event ID: <strong>{id}</strong>.
            <br />
            Full event details implementation is coming soon!
          </p>
          <div className={styles.skeleton}>
            <div className={styles.skeletonLine} style={{ width: '80%' }} />
            <div className={styles.skeletonLine} style={{ width: '60%' }} />
            <div className={styles.skeletonLine} style={{ width: '90%' }} />
          </div>
        </div>
      </main>
    </div>
  );
}
