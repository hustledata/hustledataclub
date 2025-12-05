import React from 'react';
import styles from './UseCases.module.css';
import { Instagram, Mail, LayoutDashboard, Activity } from 'lucide-react';

const USE_CASES = [
  {
    icon: <Instagram size={28} color="#2dd4bf" />,
    title: 'Automated Content',
    desc: 'AI-powered content creation and scheduling for social platforms.',
    img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000',
  },
  {
    icon: <Mail size={28} color="#60a5fa" />,
    title: 'Smart Campaigns',
    desc: 'Automated email and messaging campaigns for growth.',
    img: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=1000',
  },
  {
    icon: <LayoutDashboard size={28} color="#c084fc" />,
    title: 'Executive Dashboard',
    desc: 'Real-time dashboards for executive decision making.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000',
  },
  {
    icon: <Activity size={28} color="#fb923c" />,
    title: 'Data Health Check',
    desc: 'Automated data audits and health monitoring.',
    img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000',
  },
];

export default function UseCases() {
  return (
    <section className={styles.useCases} id="usecases">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Use Cases</h2>
          <div className={styles.subtitle}>Real-world examples of our solutions in action</div>
        </div>
        <div className={styles.grid}>
          {USE_CASES.map((uc, i) => (
            <div className={styles.card} key={uc.title}>
              <img src={uc.img} alt={uc.title} className={styles.bgImg} />
              <div className={styles.gradientOverlay} />
              <div className={styles.iconGlass}>{uc.icon}</div>
              <div className={styles.cardTitle}>{uc.title}</div>
              <div className={styles.cardDesc}>{uc.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
