import React from 'react';
import Aside from './components/Aside';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Work from './components/Work';
import Blog from './components/Blog';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="container-page">
      <div className="container-wrap">
          
            <Aside />
          
        <div className="container-main">
            <Hero/>
            <About />
            <Skills />
            <Education />
            <Experience />
            <Work />
            <Blog />
            <Contact />
          
          </div>
      </div>
    </div>
  );
}

export default App;


