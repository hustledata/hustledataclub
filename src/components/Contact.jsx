import React from 'react';
import styles from './Contact.module.css';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.leftCard}>
          <h2 className={styles.ctaTitle}>Ready to optimize your business?</h2>
          <p className={styles.ctaSubtitle}>Join the club. Let's build something great together.</p>
          <button
            className={styles.ctaBtn}
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Project
          </button>
        </div>
        <div className={styles.rightCard}>
          <h2 className={styles.title}>Get In Touch</h2>
          <p className={styles.subtitle}>
            Schedule an initial call by mailing your requirements at{' '}
          </p>
          <a href="mailto:michael@hustledataclub.com" className={styles.emailLink}>
            <Mail size={20} />
            michael@hustledataclub.com
          </a>
        </div>
      </div>
    </section>
  );
}
