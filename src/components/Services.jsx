import React from 'react';
import styles from './Services.module.css';
import { Code, ShieldCheck, BarChart3, Bot } from 'lucide-react';

const SERVICES = [
  {
    icon: <Code size={28} color="#60a5fa" />,
    iconBox: styles.iconBlue,
    title: 'Web Development',
    desc: 'Custom websites and web applications built with modern frameworks like React and Node.js. Fast, responsive, and scalable.',
  },
  {
    icon: <ShieldCheck size={28} color="#2dd4bf" />,
    iconBox: styles.iconTeal,
    title: 'Machine Learning & Data Science',
    desc: 'Advanced analytics, predictive modeling, and Data Visualization to unlock insights from your data. Tailored solutions for your business needs.',
  },
  {
    icon: <BarChart3 size={28} color="#c084fc" />,
    iconBox: styles.iconPurple,
    title: 'Dashboarding Solutions',
    desc: 'Interactive Power BI and Tableau dashboards to track KPIs that bring your metrics to life. Real-time visualization for better decision making.',
  },
  {
    icon: <Bot size={28} color="#fb923c" />,
    iconBox: styles.iconOrange,
    title: 'AI Automation',
    desc: 'Intelligent agents that handle scheduling, emails, and follow-ups. Reclaim your time by automating repetitive tasks.',
  },
];

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <div className={styles.radialGlow} />
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Services</h2>
          <div className={styles.subtitle}>Comprehensive data and tech solutions to power your growth.</div>
        </div>
        <div className={styles.grid}>
          {SERVICES.map((svc, i) => (
            <div className={styles.card} key={svc.title}>
              <div className={`${styles.iconBox} ${svc.iconBox}`}>{svc.icon}</div>
              <div className={styles.cardTitle}>{svc.title}</div>
              <div className={styles.cardDesc}>{svc.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
