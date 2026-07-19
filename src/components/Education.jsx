import { motion } from 'framer-motion';

const educationItems = [
  {
    title: 'B.E. Computer Science and Engineering',
    subtitle: 'Kathir College of Engineering, Coimbatore',
    date: '2023–2027',
    description: 'Currently pursuing a Bachelor of Engineering degree with a CGPA of 8.0.',
  },
  {
    title: 'Higher Secondary Certificate (HSC)',
    subtitle: 'Government Higher Secondary School, Kunichi',
    date: '2021–2023',
    description: 'Completed higher secondary education with 72.1%.',
  },
];

function Education() {
  return (
    <div className="timeline">
      {educationItems.map((item, index) => (
        <motion.div className="timeline-item" key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }}>
          <div className="timeline-marker" />
          <div className="timeline-content">
            <h3>{item.title}</h3>
            <p className="timeline-subtitle">{item.subtitle}</p>
            <p className="timeline-date">{item.date}</p>
            <p className="timeline-description">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Education;
