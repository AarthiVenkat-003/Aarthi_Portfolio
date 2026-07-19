import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-socials">
        <a href="https://github.com/aarthivenkat12-ctrl" target="_blank" rel="noreferrer" aria-label="Aarthi Venkat on GitHub"><FiGithub /></a>
        <a href="https://www.linkedin.com/in/aarthi-venkat-b112a92a3" target="_blank" rel="noreferrer" aria-label="Aarthi Venkat on LinkedIn"><FiLinkedin /></a>
        <a href="https://www.instagram.com/is_sunshine__?igsh=eXpjcDk0ZTE2NWY4" target="_blank" rel="noreferrer" aria-label="Aarthi Venkat on Instagram"><FiInstagram /></a>
      </div>
      <div className="container footer-bottom">
        <p>© <span id="year">2026</span> Aarthi Venkat. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
