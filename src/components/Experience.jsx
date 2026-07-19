import { motion } from 'framer-motion';

const experienceItems = [
  {
    title: 'AWS Cloud Computing Virtual Internship',
    subtitle: 'NASSCOM FutureSkills Prime',
    date: 'One-month virtual internship',
    description: 'Worked with AWS EC2 and S3 while learning cloud deployment, scalability, storage, and cloud security fundamentals.',
  },
  {
    title: 'Cloud Computing Internship',
    subtitle: 'Cloudsteir Solutions Pvt. Ltd.',
    date: 'Internship',
    description: 'Gained hands-on experience in cloud infrastructure, deployment models, cloud security concepts, and cloud-based application deployment.',
  },
  {
    title: 'Data Analytics Internship',
    subtitle: 'Smart Yugam Academy',
    date: 'Internship',
    description: 'Used Anaconda, Jupyter Notebook, Power BI, and Tableau for data preprocessing, visualization, dashboards, and an end-to-end Zomato data analysis project.',
  },
];

function Experience() {
  return (
    <div className="timeline">
      {experienceItems.map((item, index) => (
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

export default Experience;
