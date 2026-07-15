import React, { useEffect, useRef } from 'react';
import { developerInfo } from '../data/developerInfo';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Fade in on mount
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>('.hero-item');
    items.forEach((item, i) => {
      setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, 200 + i * 150);
    });
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 24px 60px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Radial glow */}
      <div style={{
        position: 'absolute',
        top: '30%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600, height: 600,
        background: 'radial-gradient(ellipse, rgba(124,58,237,0.18) 0%, rgba(0,212,255,0.08) 50%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Keyframes for the pulse animation */}
      <style>
        {`
          @keyframes text-glow-pulse {
            0%, 100% {
              filter: drop-shadow(0 0 4px rgba(0, 212, 255, 0.4));
            }
            50% {
              filter: drop-shadow(0 0 10px rgba(0, 212, 255, 0.8));
            }
          }
        `}
      </style>

      <div
        ref={containerRef}
        className="container"
        style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}
      >
        {/* Badge */}
        <div
          className="hero-item"
          style={{
            opacity: 0,
            transform: 'translateY(30px)',
            transition: 'all 0.7s cubic-bezier(0.23,1.01,0.32,1)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '6px 18px',
            background: 'rgba(0,212,255,0.08)',
            border: '1px solid rgba(0,212,255,0.2)',
            borderRadius: 50,
            color: 'var(--blue)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            marginBottom: 28,
            letterSpacing: '0.05em',
          }}
        >
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', display: 'inline-block', boxShadow: '0 0 8px #22c55e' }} />
          Available for Remote Roles
        </div>

        {/* Name */}
        <h1
          className="hero-item"
          style={{
            opacity: 0,
            transform: 'translateY(30px)',
            transition: 'all 0.7s cubic-bezier(0.23,1.01,0.32,1)',
            fontSize: 'clamp(2.4rem, 6vw, 4rem)',
            fontFamily: 'var(--font-main)',
            fontWeight: 700,
            color: '#fff',
            lineHeight: 1.1,
            marginBottom: 16,
            letterSpacing: '-0.03em',
          }}
        >
          {developerInfo.name}
        </h1>

        {/* Static Title */}
        <div
          className="hero-item"
          style={{
            opacity: 0,
            transform: 'translateY(30px)',
            transition: 'all 0.7s cubic-bezier(0.23,1.01,0.32,1)',
            fontSize: 'clamp(1.3rem, 3.5vw, 2rem)',
            fontFamily: 'var(--font-mono)',
            marginBottom: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              background: 'var(--gradient-text)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            React Native Developer
          </span>
        </div>

        {/* Subtitle */}
        <p
          className="hero-item"
          style={{
            opacity: 0,
            transform: 'translateY(30px)',
            transition: 'all 0.7s cubic-bezier(0.23,1.01,0.32,1)',
            fontSize: '1.05rem',
            color: 'var(--text-muted)',
            marginBottom: 40,
            maxWidth: 480,
            margin: '0 auto 40px',
          }}
        >
          {developerInfo.subtitle}
        </p>

        {/* CTA Buttons */}
        <div
          className="hero-item"
          style={{
            opacity: 0,
            transform: 'translateY(30px)',
            transition: 'all 0.7s cubic-bezier(0.23,1.01,0.32,1)',
            display: 'flex',
            gap: 14,
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: 52,
          }}
        >
          <a
            href="#projects"
            className="btn-primary"
            onClick={e => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>View My Work</span>
            <span>→</span>
          </a>
          <a
            href={developerInfo.resume}
            download="Asik_Umar_TK_Resume.pdf"
            className="btn-outline"
          >
            <span>↓</span>
            <span>Download Resume</span>
          </a>
        </div>

        {/* Social Icons */}
        <div
          className="hero-item"
          style={{
            opacity: 0,
            transform: 'translateY(30px)',
            transition: 'all 0.7s cubic-bezier(0.23,1.01,0.32,1)',
            display: 'flex',
            justifyContent: 'center',
            gap: 16,
          }}
        >
          {[
            {
              label: 'LinkedIn',
              href: developerInfo.linkedIn,
              svg: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              ),
            },
            {
              label: 'GitHub',
              href: developerInfo.github,
              svg: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              ),
            },
            {
              label: 'Email',
              href: `mailto:${developerInfo.email}`,
              svg: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              ),
            },
          ].map(({ label, href, svg }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                width: 44, height: 44,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(0,212,255,0.15)',
                color: 'var(--text-muted)',
                transition: 'all 0.3s',
                cursor: 'none',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = 'var(--blue)';
                el.style.borderColor = 'var(--blue)';
                el.style.background = 'var(--blue-dim)';
                el.style.transform = 'translateY(-6px) rotate(-8deg) scale(1.15)';
                el.style.boxShadow = '0 10px 28px rgba(0,212,255,0.25)';
                el.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = 'var(--text-muted)';
                el.style.borderColor = 'rgba(0,212,255,0.15)';
                el.style.background = 'rgba(255,255,255,0.05)';
                el.style.transform = '';
                el.style.boxShadow = '';
                el.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
              }}
            >
              {svg}
            </a>
          ))}
        </div>


      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes scrollDot {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(16px); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
