import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Work from './components/Work';
import Blog from './components/Blog';
import Contact from './components/Contact';
import './App.scss';
import './index.scss';

function App() {
  return (
    <div className="main-container">
      <div className="container-navbar">
            <Navbar />
      </div>
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
  );
}

export default App;

