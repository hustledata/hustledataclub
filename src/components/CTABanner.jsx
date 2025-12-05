import React from 'react';
import styles from './CTABanner.module.css';

export default function CTABanner() {
  return (
    <section className={styles.ctaBanner} id="cta">
      <div className={styles.radialGlowLeft} />
      <div className={styles.radialGlowRight} />
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.title}>Ready to optimize your business?</div>
          <div className={styles.subtitle}>Join the club. Let's build something great together.</div>
          <button
            className={styles.ctaBtn}
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
}
