
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Stats from './components/Stats';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'portfolio', 'testimonials', 'contact'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          if (scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative selection:bg-blue-500/30">
      <CustomCursor />
      <Navbar activeSection={activeSection} />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="py-20">
          <About />
        </section>

        <Stats />

        <section id="skills" className="py-20">
          <Skills />
        </section>

        <section id="portfolio" className="py-20 bg-slate-900/20">
          <Portfolio />
        </section>

        <section id="testimonials" className="py-20">
          <Testimonials />
        </section>

        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
