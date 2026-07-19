import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiArrowDown } from 'react-icons/fi';
import profileImage from '../assets/aarthi-profile.jpg';

const roles = ['Cloud Engineer', 'Software Developer', 'Tech Enthusiast'];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const isComplete = typedRole === currentRole;
    const isEmpty = typedRole.length === 0;

    const timer = setTimeout(() => {
      if (!isDeleting && isComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && isEmpty) {
        setIsDeleting(false);
        setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length);
        return;
      }

      setTypedRole(
        isDeleting
          ? currentRole.slice(0, typedRole.length - 1)
          : currentRole.slice(0, typedRole.length + 1),
      );
    }, isComplete && !isDeleting ? 1400 : isDeleting ? 55 : 105);

    return () => clearTimeout(timer);
  }, [isDeleting, roleIndex, typedRole]);

  return (
    <section id="home" className="home">
      <div className="stars" />
      <div className="floating-elements">
        <div className="float-elem float-1" />
        <div className="float-elem float-2" />
        <div className="float-elem float-3" />
      </div>

      <div className="home-container">
        <motion.div className="home-content" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <p className="greeting">Hello, I’m</p>
          <h1 className="name">Aarthi Venkat</h1>
          <div className="title-wrapper">
            <h2 className="title">
              {typedRole}<span className="typing-cursor" aria-hidden="true">|</span>
            </h2>
          </div>
          <p className="intro-text">
            Aspiring Computer Science and Engineering student passionate about software development, cloud technologies, and data analytics, with a focus on solving real-world problems.
          </p>
          <div className="home-buttons">
            <a className="btn btn-primary" href="/aarthi-venkat-resume.pdf" download="Aarthi-Venkat-Resume.pdf">
              <FiDownload />
              <span>Download Resume</span>
            </a>
            <a className="btn btn-secondary" href="#contact">
              <FiMail />
              <span>Contact Me</span>
            </a>
          </div>
        </motion.div>

        <motion.div className="home-image" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <div className="image-wrapper">
            <img src={profileImage} alt="Aarthi Venkat" className="profile-image" />
          </div>
        </motion.div>
      </div>

      <motion.a href="#about" className="scroll-indicator" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: [0, 10, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
        <FiArrowDown />
      </motion.a>
    </section>
  );
}

export default Hero;
