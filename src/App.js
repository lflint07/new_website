import React from 'react';
import './fontawesome';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Work from './components/Work';
import Blog from './components/Blog';
import Contact from './components/Contact';
import './App.scss';



function App() {
  return (
    <div id="body">

        <Header />
        <Main />
            <About />
            <Skills />
            <Education />
            <Experience />
            <Work />
            <Blog />
            <Contact />
            
    </div>
  );
}

export default App;

