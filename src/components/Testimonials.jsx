import React from 'react';
import styles from './Testimonials.module.css';
import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: 'Hustle Data Club transformed our manual reporting process into a seamless, automated dashboard. Highly recommend!',
    company: 'TechFlow Inc.',
  },
  {
    quote: 'The AI email agent they built for us is incredible—our team saves hours every week.',
    company: 'GrowthBox',
  },
  {
    quote: 'Their independent data review gave us the confidence to pitch to investors and scale up.',
    company: 'FinStream',
  },
];

export default function Testimonials() {
  return (
    <section className={styles.testimonials} id="testimonials">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>What Our Clients Say</h2>
        </div>
        <div className={styles.grid}>
          {TESTIMONIALS.map((t, i) => (
            <div className={styles.card} key={t.company}>
              <Quote className={styles.quoteIcon} />
              <div className={styles.quoteText}>{t.quote}</div>
              <div className={styles.companyBadge}>{t.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
