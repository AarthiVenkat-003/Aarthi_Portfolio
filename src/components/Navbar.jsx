import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      setScrolled(window.scrollY > 24);
      const sections = navItems.map((item) => document.getElementById(item.id));
      let current = 'home';
      sections.forEach((section) => {
        if (section && window.scrollY + 180 >= section.offsetTop) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.div className="scroll-progress" animate={{ width: `${scrollProgress}%` }} transition={{ duration: 0.2 }} />
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <button className="nav-logo" onClick={() => handleNavClick('home')}>
            Aarthi<span className="logo-dot">Venkat</span>
          </button>
          <div className="nav-menu">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="nav-actions">
            <button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </button>
            <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="mobile-menu active">
            {navItems.map((item) => (
              <button key={item.id} className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`} onClick={() => handleNavClick(item.id)}>
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
