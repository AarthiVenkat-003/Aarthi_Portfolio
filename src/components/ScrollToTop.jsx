import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 350);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <motion.button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
      <FiArrowUp />
    </motion.button>
  );
}

export default ScrollToTop;
