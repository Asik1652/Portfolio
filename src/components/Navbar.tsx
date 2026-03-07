import React, { useEffect, useRef, useState } from 'react';

const NAV_LINKS = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#awards', label: 'Awards' },
  { href: '#contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_LINKS.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 80) {
            setActive(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.getElementById(href.slice(1));
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav
      ref={navRef}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        padding: '0 24px',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled
          ? 'rgba(10, 15, 30, 0.9)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,212,255,0.08)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
        maxWidth: '100vw',
      }}
    >
      {/* Logo */}
      <a
        href="#hero"
        onClick={e => { e.preventDefault(); handleNavClick('#hero'); }}
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '1.2rem',
          fontWeight: 700,
          background: 'var(--gradient-text)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '0.05em',
          cursor: 'none',
          flexShrink: 0,
        }}
      >
        {'<AU />'}
      </a>

      {/* Desktop Links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="nav-desktop">
        {NAV_LINKS.map(link => {
          const id = link.href.slice(1);
          const isActive = active === id;
          return (
            <a
              key={link.href}
              href={link.href}
              onClick={e => { e.preventDefault(); handleNavClick(link.href); }}
              style={{
                padding: '6px 14px',
                borderRadius: 8,
                fontFamily: 'var(--font-main)',
                fontSize: '0.88rem',
                fontWeight: isActive ? 600 : 400,
                color: isActive ? 'var(--blue)' : 'var(--text-muted)',
                background: isActive ? 'var(--blue-dim)' : 'transparent',
                transition: 'all 0.25s',
                cursor: 'none',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--text)';
              }}
              onMouseLeave={e => {
                if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)';
              }}
            >
              {link.label}
              {isActive && (
                <span
                  ref={indicatorRef}
                  style={{
                    display: 'block',
                    height: 2,
                    background: 'var(--gradient)',
                    borderRadius: 1,
                    marginTop: 2,
                    animation: 'slideIn 0.25s ease',
                  }}
                />
              )}
            </a>
          );
        })}
      </div>

      {/* Hamburger */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          cursor: 'none',
          flexDirection: 'column',
          gap: 5,
          padding: 4,
        }}
      >
        {[0, 1, 2].map(i => (
          <span key={i} style={{
            display: 'block', width: 22, height: 2,
            background: 'var(--blue)',
            borderRadius: 1,
            transition: 'all 0.3s',
            transform: menuOpen
              ? i === 0 ? 'rotate(45deg) translate(5px, 5px)'
              : i === 2 ? 'rotate(-45deg) translate(5px, -5px)'
              : 'scaleX(0)'
              : 'none',
          }} />
        ))}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: 64, left: 0, right: 0,
          background: 'rgba(10,15,30,0.98)',
          backdropFilter: 'blur(24px)',
          padding: '16px 0 24px',
          display: 'flex',
          flexDirection: 'column',
          borderBottom: '1px solid var(--border)',
          zIndex: 999,
        }}>
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => { e.preventDefault(); handleNavClick(link.href); }}
              style={{
                padding: '12px 32px',
                color: active === link.href.slice(1) ? 'var(--blue)' : 'var(--text)',
                fontFamily: 'var(--font-main)',
                fontSize: '1rem',
                fontWeight: 500,
                cursor: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;