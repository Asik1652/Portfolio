import React, { useState, useEffect } from 'react';
import { developerInfo } from '../data/developerInfo';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Who I Am', href: '#about' },
  { label: 'What I Build', href: '#projects' },
  { label: 'What I’m Great At', href: '#skills' },
  { label: 'Let’s Connect', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : '');
  }, [dark]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollY = window.scrollY + 80;
      let current = '';
      sections.forEach((section, idx) => {
        if (section && section instanceof HTMLElement && section.offsetTop <= scrollY) {
          current = navLinks[idx].href;
        }
      });
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, type: 'spring' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <a
          href="#top"
          style={{
            fontWeight: 800,
            fontSize: '2rem',
            letterSpacing: '-0.02em',
            color: 'var(--color-primary)',
            fontFamily: 'Poppins, Inter, Arial, sans-serif',
            textShadow: '0 2px 12px rgba(56,189,248,0.10)',
            lineHeight: 1.1,
            textTransform: 'uppercase',
            marginRight: 32,
            flex: '0 0 auto',
            textAlign: 'left',
          }}
        >
          {developerInfo.name}
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: '1 1 auto', justifyContent: 'flex-end' }}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-underline${active === link.href ? ' active-link' : ''}`}
            >
              {link.label}
              <span className="nav-underline-anim" />
            </a>
          ))}
          <button
            aria-label="Toggle dark mode"
            onClick={() => setDark(d => !d)}
            title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {dark ? (
              <span role="img" aria-label="Light mode">🌞</span>
            ) : (
              <span role="img" aria-label="Dark mode">🌙</span>
            )}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 