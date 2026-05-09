import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIcon}>
              <div className={styles.dot} style={{ backgroundColor: '#4285F4' }} />
              <div className={styles.dot} style={{ backgroundColor: '#EA4335' }} />
              <div className={styles.dot} style={{ backgroundColor: '#FBBC04' }} />
              <div className={styles.dot} style={{ backgroundColor: '#34A853' }} />
            </div>
            <div className={styles.logoText}>
              <span className={styles.brand}>GDG Cloud</span>
              <span className={styles.city}>Bandung</span>
            </div>
          </Link>
          
          <nav className={styles.nav}>
            <Link href="/" className={styles.navLink}>Events</Link>
            <Link href="/about" className={styles.navLink}>About</Link>
            <Link href="/community" className={styles.navLink}>Community</Link>
          </nav>
          
          <div className={styles.actions}>
            <button className={styles.loginBtn}>Login</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
