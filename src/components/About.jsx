import { motion } from 'framer-motion';
import { FiBookOpen, FiTarget, FiZap, FiUsers } from 'react-icons/fi';
import aboutImage from '../assets/aarthi-about.jpg';

const aboutCards = [
  {
    title: 'Education',
    content: 'Kathir College of Engineering, Coimbatore',
    meta: 'B.E. Computer Science and Engineering • 2023–2027 • CGPA: 8.0',
    icon: <FiBookOpen />,
  },
  {
    title: 'Career Objective',
    content: 'To apply my technical and analytical skills to innovative software, cloud, and data-driven solutions while continuously learning emerging IT technologies.',
    meta: '',
    icon: <FiTarget />,
  },
  {
    title: 'Technical Focus',
    content: 'Software Development • AWS Cloud Computing • Data Analytics • AI/ML • Problem Solving',
    meta: '',
    icon: <FiZap />,
  },
  {
    title: 'Experience Highlights',
    content: 'AWS Cloud Computing • Cloud Infrastructure • Data Analytics • Power BI • Tableau',
    meta: '',
    icon: <FiUsers />,
  },
];

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <p className="eyebrow">About Me</p>
        </div>

        <div className="about-content">
          <motion.div className="about-image" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="image-card">
              <img src={aboutImage} alt="Aarthi" className="about-img" />
            </div>
          </motion.div>

          <div className="about-text">
            <motion.p className="about-paragraph" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              I’m <strong>Aarthi Venkat</strong>, an aspiring Computer Science and Engineering student with a strong foundation in Java, cloud computing, Python, SQL, C programming, HTML, Hadoop, Hive, and AWS. I have hands-on experience in data analytics using Jupyter Notebook and Anaconda, and I’m eager to contribute to meaningful software and cloud projects while expanding my expertise.
            </motion.p>

            <div className="about-cards">
              {aboutCards.map((card, index) => (
                <motion.div className="about-card" key={card.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <div className="about-card-icon">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p><strong>{card.content}</strong></p>
                  {card.meta && <p className="card-secondary">{card.meta}</p>}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
