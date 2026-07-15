import React, { useRef } from 'react';
import { skillGroups } from '../data/skills';
import { useScrollAnimationAll } from '../hooks/useScrollAnimation';

const CATEGORY_COLORS: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  'Mobile Development': {
    bg: 'rgba(0,212,255,0.06)',
    border: 'rgba(0,212,255,0.18)',
    text: '#00d4ff',
    glow: '0 0 16px rgba(0,212,255,0.35)',
  },
  'Frontend Web': {
    bg: 'rgba(124,58,237,0.07)',
    border: 'rgba(124,58,237,0.22)',
    text: '#a78bfa',
    glow: '0 0 16px rgba(124,58,237,0.35)',
  },
  'Backend (AI-Assisted)': {
    bg: 'rgba(251,146,60,0.07)',
    border: 'rgba(251,146,60,0.2)',
    text: '#fb923c',
    glow: '0 0 16px rgba(251,146,60,0.3)',
  },
  'QA & Testing': {
    bg: 'rgba(34,197,94,0.06)',
    border: 'rgba(34,197,94,0.2)',
    text: '#4ade80',
    glow: '0 0 16px rgba(34,197,94,0.3)',
  },
};

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollAnimationAll(sectionRef as React.RefObject<HTMLElement>);

  return (
    <section id="skills" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-label">05 . skills</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: '#fff' }}>
            My Tech Stack
          </h2>
          <p style={{ marginTop: 12, maxWidth: 460, margin: '12px auto 0' }}>
            Tools and technologies I use to build production-grade apps
          </p>
        </div>

        {/* Skill groups */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
        }}>
          {skillGroups.map((group, gi) => {
            const colors = CATEGORY_COLORS[group.label] || CATEGORY_COLORS['Mobile Development'];
            return (
              <div
                key={group.label}
                className="reveal glass-card"
                style={{ padding: '28px', transition: `all 0.7s cubic-bezier(0.23,1.01,0.32,1) ${gi * 100}ms` }}
              >
                {/* Group header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: 20,
                  paddingBottom: 16,
                  borderBottom: `1px solid ${colors.border}`,
                }}>
                  <span style={{
                    width: 36, height: 36,
                    borderRadius: 10,
                    background: colors.bg,
                    border: `1px solid ${colors.border}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.1rem',
                  }}>
                    {group.icon}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-main)',
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: '#fff',
                  }}>
                    {group.label}
                  </span>
                </div>

                {/* Skill tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {group.skills.map((skill, si) => (
                    <span
                      key={skill}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '6px 13px',
                        background: colors.bg,
                        border: `1px solid ${colors.border}`,
                        borderRadius: 50,
                        fontSize: '0.82rem',
                        fontFamily: 'var(--font-mono)',
                        color: colors.text,
                        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        cursor: 'default',
                        willChange: 'transform',
                        transitionDelay: `${si * 15}ms`,
                      }}
                      onMouseEnter={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.boxShadow = colors.glow;
                        el.style.borderColor = colors.text;
                        el.style.transform = 'translateY(-4px) scale(1.06)';
                        el.style.background = colors.bg.replace('0.06', '0.14').replace('0.07', '0.14').replace('0.08', '0.14');
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.boxShadow = '';
                        el.style.borderColor = colors.border;
                        el.style.transform = '';
                        el.style.background = colors.bg;
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;