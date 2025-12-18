import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import EducationTimeline from "./EducationTimeline";
import AchievementsCertifications from "./components/AchievementsCertifications"
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import AnimatedBackground from "./components/AnimatedBackground";
import ParticleAnimation from "./components/ParticleAnimation";
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Acheivements';
import Footer from './components/Footer';
function App() {
  return (
    <Router>

      <div className="portfolio">

          <AnimatedBackground />

       <nav className="navbar">

        <div className="nav-brand">
          <h1>Nagumeena Udayappan</h1>
          <div className="nav-subtitle">AI/ML Engineer & Full Stack Developer</div>
        </div>
        <ul className="nav-links">
          <li><a href="#hero" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#skills" className="nav-link">Skills</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#experience" className="nav-link">Experience</a></li>
          <li><a href="#educationTimeline" className="nav-link">Education</a></li>
          <li><a href="#achievements" className="nav-link">Achievements</a></li>
          <li><a href="#AchievementsCertifications" className="nav-link">Certifications</a></li>
          <li><a href="#leadership" className="nav-link">Leadership</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>

        <a href="/resume.pdf" download className="nav-resume-btn">
          <span className="btn-text">Download Resume</span>
          <div className="btn-glow"></div>
        </a>

      </nav>
         <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
  
      <section id="projects"><Projects /></section>
       <section id="experience"><Experience /></section>
           <section id="educationTimeline"><EducationTimeline /></section>
            <section id="achievements"><Achievements /></section>
              <section id="leadership"><Leadership /></section>
             <section id="AchievementsCertifications "><AchievementsCertifications /></section>
      <section id="contact"><Contact /></section>
      <Footer />

      </div>
    </Router>
     
  );
}

export default App;
