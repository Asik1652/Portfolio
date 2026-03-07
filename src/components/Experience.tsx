import React, { useRef, useEffect, useState } from 'react';
import { experiences } from '../data/skills';
import { useScrollAnimationAll } from '../hooks/useScrollAnimation';

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [lineHeight, setLineHeight] = useState(0);
  useScrollAnimationAll(sectionRef as React.RefObject<HTMLElement>);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate line drawing
          let start: number | null = null;
          const total = 360; // px approx
          const duration = 1200;
          const step = (ts: number) => {
            if (!start) start = ts;
            const elapsed = ts - start;
            const progress = Math.min(elapsed / duration, 1);
            setLineHeight(total * progress);
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-label">04 . experience</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: '#fff' }}>
            My Journey
          </h2>
        </div>

        {experiences.map((exp) => (
          <div key={exp.company} style={{ maxWidth: 640, margin: '0 auto' }}>
            {/* Company name */}
            <div className="reveal" style={{ marginBottom: 32, display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{
                width: 44, height: 44,
                borderRadius: 12,
                background: 'var(--blue-dim)',
                border: '1px solid rgba(0,212,255,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.3rem',
                flexShrink: 0,
              }}>
                🏢
              </div>
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-main)',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#fff',
                  marginBottom: 2,
                }}>
                  {exp.company}
                </h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--blue)', fontFamily: 'var(--font-mono)' }}>
                  July 2022 – Present
                </span>
              </div>
            </div>

            {/* Timeline */}
            <div style={{ position: 'relative', paddingLeft: 32 }}>
              {/* Animated vertical line */}
              <div style={{
                position: 'absolute',
                left: 14,
                top: 0,
                width: 2,
                height: `${lineHeight}px`,
                background: 'linear-gradient(180deg, var(--blue) 0%, var(--purple) 100%)',
                borderRadius: 1,
                transition: 'height 0.05s linear',
                boxShadow: '0 0 8px rgba(0,212,255,0.4)',
              }} />

              {exp.roles.map((role, i) => (
                <div
                  key={role.title}
                  className="reveal"
                  style={{
                    position: 'relative',
                    paddingBottom: i < exp.roles.length - 1 ? 40 : 0,
                  }}
                >
                  {/* Dot */}
                  <div style={{
                    position: 'absolute',
                    left: -27,
                    top: 6,
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    background: i === 0
                      ? 'var(--gradient)'
                      : 'rgba(124,58,237,0.5)',
                    border: `2px solid ${i === 0 ? 'var(--blue)' : 'var(--purple)'}`,
                    boxShadow: i === 0 ? '0 0 12px rgba(0,212,255,0.5)' : 'none',
                    zIndex: 1,
                  }} />

                  {/* Content card */}
                  <div
                    className="glass-card"
                    style={{ padding: '20px 24px' }}
                  >
                    {i === 0 && (
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 5,
                        padding: '3px 10px',
                        background: 'rgba(0,212,255,0.1)',
                        border: '1px solid rgba(0,212,255,0.25)',
                        borderRadius: 50,
                        fontSize: '0.7rem',
                        color: 'var(--blue)',
                        fontWeight: 600,
                        marginBottom: 10,
                        fontFamily: 'var(--font-mono)',
                      }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 6px #22c55e' }} />
                        Current Role
                      </span>
                    )}
                    <div style={{
                      fontFamily: 'var(--font-main)',
                      fontWeight: 700,
                      fontSize: '1rem',
                      color: '#fff',
                      marginBottom: 6,
                    }}>
                      {role.title}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color: 'var(--text-muted)',
                    }}>
                      {role.period}
                    </div>

                    {i === 0 && (
                      <div style={{ marginTop: 14, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                        {['React Native', 'TypeScript', 'Firebase', 'Redux'].map(t => (
                          <span key={t} style={{
                            padding: '3px 10px',
                            background: 'rgba(0,212,255,0.07)',
                            border: '1px solid rgba(0,212,255,0.15)',
                            borderRadius: 50,
                            fontSize: '0.72rem',
                            fontFamily: 'var(--font-mono)',
                            color: 'var(--blue)',
                          }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    )}

                    {i === 1 && (
                      <div style={{ marginTop: 14, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                        {['Selenium', 'Python', 'JMeter', 'unittest'].map(t => (
                          <span key={t} style={{
                            padding: '3px 10px',
                            background: 'rgba(124,58,237,0.07)',
                            border: '1px solid rgba(124,58,237,0.2)',
                            borderRadius: 50,
                            fontSize: '0.72rem',
                            fontFamily: 'var(--font-mono)',
                            color: '#a78bfa',
                          }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
