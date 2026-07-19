import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <p className="eyebrow">Contact</p>
          <h2>Let’s connect and build something meaningful together.</h2>
        </div>

        <div className="contact-content">
          <motion.div className="contact-info" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="contact-methods">
              <a className="contact-card" href="mailto:aarthianu801@gmail.com" aria-label="Email Aarthi Venkat">
                <FiMail />
                <h3>Email</h3>
                <span>aarthianu801@gmail.com</span>
              </a>
              <a className="contact-card" href="tel:+919342050914" aria-label="Call Aarthi Venkat">
                <FiPhone />
                <h3>Phone</h3>
                <span>+91 93420 50914</span>
              </a>
              <a className="contact-card" href="https://www.google.com/maps/search/?api=1&query=Tirupattur%2C%20Tamil%20Nadu" target="_blank" rel="noreferrer" aria-label="Open Tirupattur, Tamil Nadu in Google Maps">
                <FiMapPin />
                <h3>Location</h3>
                <span>Tirupattur, Tamil Nadu</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
