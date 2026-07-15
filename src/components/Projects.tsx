import React, { useRef, useState } from 'react';
import { projects } from '../data/projects';
import { useScrollAnimationAll } from '../hooks/useScrollAnimation';

const ProjectCard: React.FC<{ project: typeof projects[0]; delay: number }> = ({ project, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: -(y / rect.height) * 14,
      y: (x / rect.width) * 14,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      className="reveal"
      style={{ transition: `all 0.7s cubic-bezier(0.23,1.01,0.32,1) ${delay}ms`, perspective: '1000px' }}
    >
      <div
        ref={cardRef}
        className="project-card-inner"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          padding: '28px',
          background: 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(20px)',
          border: `1px solid ${isHovered ? 'rgba(0,212,255,0.45)' : 'rgba(0,212,255,0.1)'}`,
          borderRadius: 20,
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${isHovered ? 'translateZ(16px)' : 'translateZ(0)'}`,
          transition: tilt.x === 0 && tilt.y === 0
            ? 'all 0.55s cubic-bezier(0.34, 1.56, 0.64, 1)'
            : 'transform 0.08s linear, border-color 0.3s, box-shadow 0.3s',
          boxShadow: isHovered
            ? '0 28px 64px rgba(0,0,0,0.55), 0 0 48px rgba(0,212,255,0.18), 0 0 0 1px rgba(0,212,255,0.1)'
            : '0 8px 32px rgba(0,0,0,0.3)',
          cursor: 'none',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
          willChange: 'transform',
        }}
      >
        {/* Shine effect */}
        {isHovered && (
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(0,212,255,0.04) 0%, transparent 60%)',
            pointerEvents: 'none',
            borderRadius: 20,
          }} />
        )}

        {/* Icon + Title row */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: '2rem' }}>{project.icon}</span>
            <div>
              <h3 style={{
                fontFamily: 'var(--font-main)',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#fff',
                lineHeight: 1.3,
              }}>
                {project.title}
              </h3>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                {project.org}
              </span>
            </div>
          </div>
          {project.liveOnStore && (
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 5,
              padding: '4px 10px',
              background: 'rgba(34,197,94,0.1)',
              border: '1px solid rgba(34,197,94,0.3)',
              borderRadius: 50,
              fontSize: '0.7rem',
              fontWeight: 600,
              color: '#86efac',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 6px #22c55e' }} />
              Play Store
            </span>
          )}
        </div>

        {/* Description */}
        <ul style={{ listStyle: 'none', margin: '0 0 20px', padding: 0, flex: 1 }}>
          {project.description.map((desc, i) => (
            <li
              key={i}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 10,
                padding: '6px 0',
                color: 'var(--text-muted)',
                fontSize: '0.88rem',
                lineHeight: 1.5,
                borderBottom: i < project.description.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
              }}
            >
              <span style={{ color: 'var(--blue)', marginTop: 1, flexShrink: 0 }}>›</span>
              {desc}
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
          {project.tech.map(t => (
            <span
              key={t}
              style={{
                display: 'inline-flex',
                padding: '4px 12px',
                background: 'rgba(0,212,255,0.07)',
                border: '1px solid rgba(0,212,255,0.18)',
                borderRadius: 50,
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--blue)',
                transition: 'all 0.25s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(0,212,255,0.16)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 12px rgba(0,212,255,0.25)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(0,212,255,0.07)';
                (e.currentTarget as HTMLElement).style.boxShadow = '';
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollAnimationAll(sectionRef as React.RefObject<HTMLElement>);

  return (
    <section id="projects" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-label">02 . what i build</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: '#fff' }}>
            Projects That Ship to Real Users
          </h2>
          <p style={{ marginTop: 12, maxWidth: 500, margin: '12px auto 0' }}>
            Every project below is live, production-grade, and used by real people every day.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 24,
        }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;