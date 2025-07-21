import React, { useRef } from 'react';
import { developerInfo } from '../data/developerInfo';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  useScrollAnimation(ref as React.RefObject<HTMLElement>);
  return (
    <section id="about" className="first-section">
      <div className="card fade-in" ref={ref}>
        <h1>Who I Am</h1>
        <p style={{ fontWeight: 500, color: 'var(--color-primary)' }}>
          Hi, I'm {developerInfo.name} — a passionate Mobile App Developer from {developerInfo.location}.
        </p>
        <p style={{ fontWeight: 400, margin: '18px 0 0 0' }}>
          I don't just write code — I design human-centered experiences that work beautifully on real devices, for real people.
        </p>
        <p style={{ margin: '18px 0 0 0' }}>{developerInfo.about}</p>
        <div className="slide-up" style={{ margin: '28px 0 0 0' }}>
          <h3 style={{ color: 'var(--color-secondary)', marginBottom: 6 }}>Why I Build</h3>
          <p style={{ fontStyle: 'italic', color: 'var(--color-link)' }}>
            I love solving real-world problems and seeing my work make a difference — whether it’s helping teams collaborate, track field agents, or simply making someone’s day easier.
          </p>
        </div>
        <a href={developerInfo.resume} target="_blank" rel="noopener noreferrer" className="resume-btn" style={{ marginTop: 24, display: 'inline-block' }}>
          View My Resume
        </a>
      </div>
    </section>
  );
};

export default About; 