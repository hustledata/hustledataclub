import React from 'react';
import styles from './Process.module.css';

const STEPS = [
  {
    num: '01',
    title: 'Consultation',
    desc: 'We meet to understand your business goals, challenges, and vision for success.',
  },
  {
    num: '02',
    title: 'Strategy',
    desc: 'Our team designs a tailored roadmap to maximize your data and automation potential.',
  },
  {
    num: '03',
    title: 'Development',
    desc: 'We build your solution with agile sprints, keeping you in the loop at every step.',
  },
  {
    num: '04',
    title: 'Delivery',
    desc: 'We launch your project, provide training, and support your ongoing success.',
  },
];

export default function Process() {
  return (
    <section className={styles.process} id="process">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>How It Works</h2>
          <div className={styles.subtitle}>A transparent, collaborative process from start to finish</div>
        </div>
        <div className={styles.timeline}>
          {STEPS.map((step, i) => (
            <div className={styles.step} key={step.num}>
              <div className={styles.badge}>{step.num}</div>
              <div className={styles.stepTitle}>{step.title}</div>
              <div className={styles.stepDesc}>{step.desc}</div>
              {/* Connector line and animated dot for all but last step */}
              {i < STEPS.length - 1 && (
                <div className={styles.connector}>
                  <div className={styles.flowLine} />
                  <div className={styles.glowDot} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
