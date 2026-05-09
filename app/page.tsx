'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { useEvents } from '../hooks/useEvents';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import EventCard from '../components/EventCard';
import EmptyState from '../components/EmptyState';
import ErrorState from '../components/ErrorState';
import styles from './Home.module.css';

const CATEGORIES = ['All', 'Workshop', 'Talk', 'Online'];

export default function Home() {
  const { events, loading, error, retry } = useEvents();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          event.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || event.type === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [events, searchQuery, selectedCategory]);

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>Upcoming Events in Bandung</h1>
              <p className={styles.heroSubtitle}>
                Discover, learn, and build with the Google Cloud developer community in Bandung. 
                Join our workshops, talks, and hands-on sessions.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image 
                src="/images/hero.png" 
                alt="Community Event" 
                fill 
                className={styles.heroImage}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <main className="container">
        <div className={styles.controls}>
          <SearchBar onSearch={setSearchQuery} />
          <div className={styles.filterWrapper}>
            <CategoryFilter 
              categories={CATEGORIES} 
              selectedCategory={selectedCategory} 
              onSelect={setSelectedCategory} 
            />
          </div>
        </div>

        {loading ? (
          <div className={styles.grid}>
            {[...Array(6)].map((_, i) => (
              <div key={i} className={styles.skeletonCard} />
            ))}
          </div>
        ) : error ? (
          <ErrorState message={error} onRetry={retry} />
        ) : filteredEvents.length > 0 ? (
          <div className={styles.grid}>
            {filteredEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        ) : (
          <EmptyState 
            message={searchQuery || selectedCategory !== 'All' 
              ? "No events match your current filters. Try adjusting your search." 
              : undefined} 
          />
        )}
      </main>

      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerContent}>
            <div className={styles.footerBrand}>
              <span className={styles.footerLogo}>GDG Cloud Bandung</span>
            </div>
            <nav className={styles.footerNav}>
              <a href="#">Community Guidelines</a>
              <a href="#">Code of Conduct</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </nav>
            <p className={styles.copyright}>© 2024 GDG Cloud Bandung. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
