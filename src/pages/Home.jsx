import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

function Home() {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <section id="resume" className="resume">
        <div className="container">
          <div className="section-title">
            <p className="eyebrow">Resume & Experience</p>
          </div>

          <div className="resume-tabs">
            <button className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`} onClick={() => setActiveTab('education')}>Education</button>
            <button className={`tab-btn ${activeTab === 'projects' ? 'active' : ''}`} onClick={() => setActiveTab('projects')}>Internships</button>
          </div>

          {activeTab === 'education' ? <Education /> : <Experience />}

          <div className="projects-section">
            <Projects />
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Home;
