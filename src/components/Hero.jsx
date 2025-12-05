import React, { useRef, useEffect } from 'react';
import styles from './Hero.module.css';
import { Activity, Zap, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef(null);
  const auroraRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current || !auroraRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      auroraRef.current.style.setProperty('--mouse-x', `${x}%`);
      auroraRef.current.style.setProperty('--mouse-y', `${y}%`);
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (hero) {
        hero.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section className={styles.hero} id="hero" ref={heroRef}>
      <div className={styles.heroOverlay}>
        <div className={styles.auroraEffect} ref={auroraRef} />
      </div>
      <div className={styles.radialGlow} />
      <div className={styles.heroContent}>
        <div className={styles.left}>
          <div className={styles.badge}>
            <span className={styles.pulseDot} />
            Now accepting new clients for Q4
          </div>
          <h1 className={styles.headline}>
            Turn Your Data Into <span className={styles.gradientText}>Unfair Advantage</span>
          </h1>
          <div className={styles.subheading}>
            We build custom web applications, automate your busy work with AI, and visualize your metrics so you can focus on the hustle.
          </div>
          <div className={styles.ctaRow}>
            <button className={styles.ctaBtn} onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}>
              Get Started
            </button>
            <button className={styles.ctaBtnOutline} onClick={() => document.querySelector('#services').scrollIntoView({ behavior: 'smooth' })}>
              Explore Services
            </button>
          </div>
          <div className={styles.bullets}>
            <div className={styles.bullet}><CheckCircle2 color="#2dd4bf" size={20} /> Custom Web Apps</div>
            <div className={styles.bullet}><CheckCircle2 color="#2dd4bf" size={20} /> AI Automation</div>
            <div className={styles.bullet}><CheckCircle2 color="#2dd4bf" size={20} /> Data Visualization</div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.metricsCard}>
            <div className={styles.metricsHeader}>
              <Activity color="#60a5fa" size={24} />
              <span className={styles.metricsTitle}>Live Metrics</span>
              <span className={styles.liveDot} />
              <span style={{ color: '#2dd4bf', fontWeight: 600, marginLeft: 8 }}>Live</span>
            </div>
            <div className={styles.chartArea}>
              <svg className={styles.waveChart} viewBox="0 0 300 80" preserveAspectRatio="none">
                <path className={styles.wavePath} d="M0,40 Q25,10 50,40 T100,40 T150,40 T200,40 T250,40 T300,40" fill="none" stroke="url(#gradient)" strokeWidth="3"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#2dd4bf', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#60a5fa', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className={styles.statsRow}>
              <div className={styles.stat}>
                <span className={styles.statLabel}>Revenue</span>
                <span className={styles.statValue}>$124k</span>
                <span className={styles.statChange}>+12%</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statLabel}>Users</span>
                <span className={styles.statValue}>8.2k</span>
                <span className={styles.statChange}>+5%</span>
              </div>
            </div>
          </div>
          <div className={styles.aiCard}>
            <Zap className={styles.aiIcon} />
            <div className={styles.aiTitle}>AI Agent</div>
            <div className={styles.aiSubtitle}>Optimizing workflow...</div>
          </div>
        </div>
      </div>
    </section>
  );
}
