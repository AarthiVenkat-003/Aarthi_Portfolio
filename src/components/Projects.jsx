import { motion } from 'framer-motion';
import healthcareImage from '../../images/healthcare-aws-project.png';
import zomatoImage from '../../images/zomato-data-analysis-project.png';
import sportsImage from '../../images/ai-sports-assessment-project.png';

const projects = [
  {
    title: 'Healthcare Management System Using AWS',
    image: healthcareImage,
    description: 'Built a cloud-based healthcare application using AWS EC2 and S3, improving scalability and accessibility while applying secure patient-data storage concepts.',
    stack: ['AWS', 'EC2', 'S3', 'Cloud Security'],
  },
  {
    title: 'Zomato Data Analysis and Visual Storytelling',
    image: zomatoImage,
    description: 'Cleaned and explored restaurant data to uncover trends in ratings, customer preferences, and pricing, then presented actionable insights through dashboards and visual stories.',
    stack: ['Python', 'Jupyter', 'Power BI', 'Tableau'],
  },
  {
    title: 'AI-Powered Sports Talent Assessment Platform',
    image: sportsImage,
    description: 'Developed an AI-based mobile platform that analyzes athlete performance metrics and generates performance scores and personalized feedback. Selected for Smart India Hackathon 2025.',
    stack: ['AI', 'Machine Learning', 'Computer Vision', 'Mobile'],
  },
];

function Projects() {
  return (
    <div className="projects-grid">
      {projects.map((project, index) => (
        <motion.article className="project-card" key={project.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }} whileHover={{ y: -8, scale: 1.01 }}>
          <img className="project-image" src={project.image} alt={`${project.title} project visual`} loading="lazy" />
          <div className="project-body">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.stack.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

export default Projects;
