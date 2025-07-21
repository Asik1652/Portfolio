import React, { useRef } from 'react';
import { developerInfo } from '../data/developerInfo';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  useScrollAnimation(ref as React.RefObject<HTMLElement>);
  return (
    <section id="contact">
      <div className="fade-in card" style={{ textAlign: 'center' }} ref={ref}>
        <h2>Let’s Connect</h2>
        <p style={{ marginBottom: 18, color: 'var(--color-secondary)' }}>
          I’m always open to new opportunities, collaborations, or just a friendly chat about tech and life. Drop me a line!
        </p>
        <div style={{ marginBottom: 18 }}>
          <a href={`mailto:${developerInfo.email}`} className="social-icon" title="Email" target="_blank" rel="noopener noreferrer">📧</a>
          <a href={developerInfo.github} className="social-icon" title="GitHub" target="_blank" rel="noopener noreferrer">🐙</a>
          <a href={developerInfo.linkedIn} className="social-icon" title="LinkedIn" target="_blank" rel="noopener noreferrer">💼</a>
        </div>
        <p style={{ fontStyle: 'italic', color: 'var(--color-link)' }}>
          “Let’s build something meaningful together.”
        </p>
      </div>
    </section>
  );
};

export default Contact; 