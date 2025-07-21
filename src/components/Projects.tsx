import React, { useRef, useEffect } from 'react';
import { projects } from '../data/projects';

const projectCopy = [
  `I built this chat app to make real-time conversations seamless for teams and friends. Firebase powers the instant delivery — and it just feels fast!`,
  `This e-commerce site was my playground for building a real store from scratch. Secure checkout, smooth cart, and Django magic behind the scenes.`,
  `Our internal CRM was a game-changer: Kanban boards, swipeable cards, and push notifications — all designed to help teams stay on top of their work.`,
  `FEMS solved a real-world headache: tracking field agents in real time. With maps and live updates, managers finally had clarity — and agents felt supported.`
];

const Projects: React.FC = () => {
  const refs = useRef(projects.map(() => React.createRef<HTMLDivElement>()));

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    refs.current.forEach(ref => {
      const node = ref.current;
      if (!node) return;
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            node.classList.add('visible');
            observer.unobserve(node);
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(node);
      observers.push(observer);
    });
    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  return (
    <section id="projects" >
      <h2>What I Build</h2>
      <div>
        {projects.map((project, idx) => (
          <div
            key={project.title}
            className="card fade-in"
            ref={refs.current[idx]}
          >
            <h3>{project.title}</h3>
            <div style={{ marginBottom: 8 }}>
              {project.tech.map(tech => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <ul style={{ marginBottom: 8 }}>
              {project.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
            <p style={{ color: 'var(--color-secondary)', fontStyle: 'italic', marginTop: 8 }}>
              {projectCopy[idx]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 