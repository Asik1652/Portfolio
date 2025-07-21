import React, { useRef } from 'react';
import { skills } from '../data/skills';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SkillGroup: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
  <div style={{ marginBottom: 18 }}>
    <h4 style={{ fontWeight: 600, color: 'var(--color-primary)', marginBottom: 6 }}>{title}</h4>
    <div>
      {items.map(skill => (
        <span key={skill}>{skill}</span>
      ))}
    </div>
  </div>
);

const Skills: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  useScrollAnimation(ref as React.RefObject<HTMLElement>);
  return (
    <section id="skills">
      <div className="fade-in card" ref={ref}>
        <h2>What I’m Great At</h2>
        <p style={{ marginBottom: 18, color: 'var(--color-secondary)' }}>
          I love learning new tools, but here are the ones I use to build, test, and launch real products:
        </p>
        <SkillGroup title="Languages" items={skills.languages} />
        <SkillGroup title="Technologies" items={skills.technologies} />
        <SkillGroup title="Tools" items={skills.tools} />
      </div>
    </section>
  );
};

export default Skills; 