import React from 'react';
import './index.css';

import PageLoader from './components/PageLoader';
import CustomCursor from './components/CustomCursor';
import ParticlesBackground from './components/ParticlesBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Awards from './components/Awards';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <PageLoader />
      <CustomCursor />
      <ParticlesBackground />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Awards />
        <Contact />
      </main>
    </>
  );
}

export default App;
