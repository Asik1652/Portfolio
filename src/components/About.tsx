import React, { useRef } from 'react';
import { developerInfo } from '../data/developerInfo';
import { useScrollAnimationAll } from '../hooks/useScrollAnimation';

const STATS = [
  { value: '4', label: 'Years Experience' },
  { value: '500+', label: 'Daily Active Users' },
  { value: '2', label: 'Play Store Apps' },
  { value: '∞', label: 'Lines of Passion' },
];

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollAnimationAll(sectionRef as React.RefObject<HTMLElement>);

  return (
    <section id="about" ref={sectionRef} style={{ padding: '100px 0' }}>
      <div className="container">
        {/* Section header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-label">01 . about me</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: '#fff' }}>
            The Developer Behind the Code
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 40,
          alignItems: 'start',
        }}>
          {/* Left column */}
          <div className="reveal-left">
            {/* Avatar / Code block */}
            <div
              className="glass-card"
              style={{
                padding: '32px',
                marginBottom: 24,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Decorative glow */}
              <div style={{
                position: 'absolute',
                top: -40, right: -40,
                width: 180, height: 180,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />

              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                color: 'var(--text-muted)',
                lineHeight: 1.8,
              }}>
                <span style={{ color: '#7c3aed' }}>const </span>
                <span style={{ color: 'var(--blue)' }}>developer</span>
                <span style={{ color: '#fff' }}> = {'{'}</span>
                <br />
                &nbsp;&nbsp;<span style={{ color: '#a78bfa' }}>name</span>
                <span style={{ color: '#fff' }}>: </span>
                <span style={{ color: '#86efac' }}>"Asik Umar T K"</span>
                <span>,</span>
                <br />
                &nbsp;&nbsp;<span style={{ color: '#a78bfa' }}>role</span>
                <span style={{ color: '#fff' }}>: </span>
                <span style={{ color: '#86efac' }}>"React Native Dev"</span>
                <span>,</span>
                <br />
                &nbsp;&nbsp;<span style={{ color: '#a78bfa' }}>exp</span>
                <span style={{ color: '#fff' }}>: </span>
                <span style={{ color: '#fb923c' }}>"4 years"</span>
                <span>,</span>
                <br />
                &nbsp;&nbsp;<span style={{ color: '#a78bfa' }}>location</span>
                <span style={{ color: '#fff' }}>: </span>
                <span style={{ color: '#86efac' }}>"Sivagangai, Tamil Nadu"</span>
                <span>,</span>
                <br />
                &nbsp;&nbsp;<span style={{ color: '#a78bfa' }}>status</span>
                <span style={{ color: '#fff' }}>: </span>
                <span style={{ color: '#86efac' }}>"open to work 🟢"</span>
                <br />
                <span style={{ color: '#fff' }}>{'}'};</span>
              </div>
            </div>

            {/* Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 12,
            }}>
              {STATS.map(stat => (
                <div
                  key={stat.label}
                  className="glass-card"
                  style={{ padding: '20px 16px', textAlign: 'center' }}
                >
                  <div style={{
                    fontSize: '1.8rem',
                    fontFamily: 'var(--font-main)',
                    fontWeight: 700,
                    background: 'var(--gradient-text)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: 1,
                    marginBottom: 6,
                  }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.3 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="reveal-right">
            <div style={{ marginBottom: 28 }}>
              <p style={{
                fontSize: '1.05rem',
                lineHeight: 1.8,
                color: 'var(--text)',
                marginBottom: 20,
              }}>
                {developerInfo.about}
              </p>
              <p style={{
                fontSize: '0.95rem',
                lineHeight: 1.8,
                color: 'var(--text-muted)',
                fontStyle: 'italic',
                borderLeft: '3px solid var(--blue)',
                paddingLeft: 16,
                marginTop: 20,
              }}>
                "I love solving real-world problems and seeing my work make a difference —
                whether it's helping teams collaborate, track field agents, or simply making
                someone's day easier through a great mobile experience."
              </p>
            </div>

            {/* Key facts */}
            {[
              { icon: '🚀', text: '10 months in QA automation → promoted to React Native Developer' },
              { icon: '📱', text: '2 apps live on Play Store — CRM & FEMS, used by 500+ daily users' },
              { icon: '🤖', text: 'Built AI-powered visiting card scanner integrated into live CRM' },
              { icon: '🌏', text: 'Open to remote/hybrid React Native roles — immediate joiner' },
            ].map((fact, i) => (
              <div
                key={i}
                className="reveal"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 14,
                  padding: '14px 0',
                  borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                  transition: 'transform 0.3s',
                }}
              >
                <span style={{ fontSize: '1.2rem', marginTop: 1 }}>{fact.icon}</span>
                <span style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  {fact.text}
                </span>
              </div>
            ))}

            <a
              href={developerInfo.resume}
              download="Asik_Umar_TK_Resume.pdf"
              className="btn-primary"
              style={{ marginTop: 32, display: 'inline-flex' }}
            >
              <span>Download Resume</span>
              <span>↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;