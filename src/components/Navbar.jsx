import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Services', to: '#services' },
  { label: 'Process', to: '#process' },
  { label: 'Use Cases', to: '#usecases' },
  { label: 'Testimonials', to: '#testimonials' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, to) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(to);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img
            src="./src/assets/koala_logo.gif"
            alt="Hustle Data Club Logo"
            className={styles.logoImg}
          />
          <span className={styles.logoText}>Hustle Data Club</span>
        </div>
        <div className={styles.navLinks}>
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.to}
              className={styles.navLink}
              onClick={e => handleNavClick(e, link.to)}
            >
              {link.label}
            </a>
          ))}
          <button
            className={styles.ctaBtn}
            onClick={e => handleNavClick(e, '#contact')}
          >
            Get Started
          </button>
        </div>
        <button
          className={styles.menuIcon}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(m => !m)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.to}
              className={styles.navLink}
              onClick={e => handleNavClick(e, link.to)}
            >
              {link.label}
            </a>
          ))}
          <button
            className={styles.ctaBtn}
            onClick={e => handleNavClick(e, '#contact')}
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
