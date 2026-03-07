import React, { useRef } from 'react';
import { awards } from '../data/skills';
import { useScrollAnimationAll } from '../hooks/useScrollAnimation';

const Awards: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollAnimationAll(sectionRef as React.RefObject<HTMLElement>);

  return (
    <section id="awards" ref={sectionRef} style={{ padding: '80px 0' }}>
      <div className="container">
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="section-label">06 . awards</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: '#fff' }}>
            Recognition
          </h2>
        </div>

        {/* Award cards — 2-column grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 20,
        }}>
          {awards.map((award, i) => (
            <div
              key={award.title}
              className="reveal glass-card"
              style={{
                padding: '28px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: 20,
                transition: `all 0.7s cubic-bezier(0.23,1.01,0.32,1) ${i * 120}ms`,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Background number */}
              <span style={{
                position: 'absolute',
                right: 16, bottom: -8,
                fontSize: '5rem',
                fontFamily: 'var(--font-main)',
                fontWeight: 900,
                color: 'rgba(255,255,255,0.02)',
                lineHeight: 1,
                userSelect: 'none',
                pointerEvents: 'none',
              }}>
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Icon */}
              <div style={{
                width: 56, height: 56,
                borderRadius: 16,
                background: i === 0
                  ? 'rgba(251,191,36,0.1)'
                  : 'rgba(124,58,237,0.1)',
                border: `1px solid ${i === 0 ? 'rgba(251,191,36,0.25)' : 'rgba(124,58,237,0.25)'}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.6rem',
                flexShrink: 0,
              }}>
                {award.icon}
              </div>

              {/* Content */}
              <div>
                <div style={{
                  fontFamily: 'var(--font-main)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: '#fff',
                  marginBottom: 6,
                }}>
                  {award.title}
                </div>
                <div style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  marginBottom: 8,
                }}>
                  {award.company}
                </div>
                <div style={{
                  display: 'inline-flex',
                  padding: '3px 10px',
                  background: i === 0 ? 'rgba(251,191,36,0.08)' : 'rgba(124,58,237,0.08)',
                  border: `1px solid ${i === 0 ? 'rgba(251,191,36,0.2)' : 'rgba(124,58,237,0.2)'}`,
                  borderRadius: 50,
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  color: i === 0 ? '#fbbf24' : '#a78bfa',
                }}>
                  {award.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;

