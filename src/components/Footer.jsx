import React from 'react';
import styles from './Footer.module.css';
import { Twitter, Linkedin, Github } from 'lucide-react';

const linkCols = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Web Development', href: '#services' },
      { label: 'Data Review', href: '#services' },
      { label: 'Dashboarding', href: '#services' },
      { label: 'AI Automation', href: '#services' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
];

const socials = [
  { icon: <Twitter />, href: 'https://twitter.com', label: 'Twitter' },
  { icon: <Linkedin />, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: <Github />, href: 'https://github.com', label: 'GitHub' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.logoDesc}>
          <div className={styles.logoRow}>
            <img
              src="https://assets.floot.app/b000c9c4-a40c-4488-ab08-1ccd05443a47/85dbdba5-91dc-468c-8e5a-345639bcf320.gif"
              alt="Hustle Data Club Logo"
              className={styles.logoImg}
            />
            <span className={styles.logoText}>Hustle Data Club</span>
          </div>
          <div className={styles.desc}>
            Empowering businesses with data-driven solutions for growth, automation, and insight.
          </div>
        </div>
        <div className={styles.linksRow}>
          {linkCols.map(col => (
            <div className={styles.linkCol} key={col.title}>
              <div className={styles.colTitle}>{col.title}</div>
              {col.links.map(link => (
                <a className={styles.link} href={link.href} key={link.label}>{link.label}</a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.copyright}>
          © 2025 Hustle Data Club. All rights reserved.
        </div>
        <div className={styles.socialRow}>
          {socials.map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
