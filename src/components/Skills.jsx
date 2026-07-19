import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiDatabase, FiTool, FiCpu } from 'react-icons/fi';

const skillGroups = [
  {
    title: 'Frontend',
    icon: <FiLayers />,
    skills: [
      { name: 'HTML', percent: 90 },
      { name: 'CSS', percent: 88 },
      { name: 'JavaScript', percent: 82 },
      { name: 'React.js', percent: 70 },
    ],
  },
  {
    title: 'Programming Languages',
    icon: <FiCode />,
    skills: [
      { name: 'Java', percent: 88 },
      { name: 'C Programming', percent: 100 },
    ],
  },
  {
    title: 'Databases',
    icon: <FiDatabase />,
    skills: [
      { name: 'SQL', percent: 82 },
      { name: 'MySQL', percent: 82 },
    ],
  },
  {
    title: 'Cloud & Tools',
    icon: <FiTool />,
    skills: [
      { name: 'AWS Cloud Computing', percent: 82 },
      { name: 'AWS EC2 & S3', percent: 78 },
      { name: 'GitHub', percent: 85 },
    ],
  },
  {
    title: 'Data & Core Concepts',
    icon: <FiCpu />,
    skills: [
      { name: 'Jupyter & Anaconda', percent: 80 },
      { name: 'Power BI & Tableau', percent: 78 },
      { name: 'Hadoop & Hive', percent: 72 },
      { name: 'DSA, OOP & DBMS', percent: 80 },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-title">
          <p className="eyebrow">Skills & Expertise</p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.div className="skill-category" key={group.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }}>
              <div className="category-title">
                <span className="category-icon">{group.icon}</span>
                <h3>{group.title}</h3>
              </div>
              <div className="skills-list">
                {group.skills.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.percent}%</span>
                    </div>
                    <div className="progress-bar">
                      <motion.div className="progress-fill" initial={{ width: 0 }} whileInView={{ width: `${skill.percent}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
