import React, { useEffect, useState } from 'react';

const PageLoader: React.FC = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`page-loader${hidden ? ' hidden' : ''}`}>
      <div className="loader-logo">{'<AU />'}</div>
      <div className="loader-bar-track">
        <div className="loader-bar" />
      </div>
      <p style={{
        marginTop: 16,
        fontFamily: 'var(--font-mono)',
        fontSize: '0.75rem',
        color: 'var(--text-muted)',
        letterSpacing: '0.1em'
      }}>
        Loading portfolio...
      </p>
    </div>
  );
};

export default PageLoader;
