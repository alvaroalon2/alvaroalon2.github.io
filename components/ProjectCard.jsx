import Image from 'next/image';
import { getMLProjects } from '../pages/api/projects_ml';
import { getAcademicProjects } from '../pages/api/projects_academic';
import { getpypiProjects } from '../pages/api/projects_pypi';
import styles from '../styles/ProjectCard.module.css';



const getProjectLength = (project) => {
  let projects;
  switch (project.type) {
    case "academic":
      projects = getAcademicProjects();
      break;
    case "ml":
      projects = getMLProjects();
      break;
    case "pypi":
      projects = getpypiProjects();
      break;
    default:
      throw new Error(`Unknown project type: ${project.type}`);
  }
  
  const length = Object.keys(projects).length;
  return length;
};

const getCardStyle = (length) => {
  if (length === 1) {
    return styles.card_single;
  }
  return styles.card;
};

const ProjectCard = ({ project }) => {
  const length = getProjectLength(project);
  const cardStyle = getCardStyle(length);
  return (
    <div className={cardStyle}>
      <Image src={project.image} height={300} width={600} alt={project.name} className={styles.img}/>
      <div className={styles.content}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.cta}>
          {project.source_code && (
            <a
              href={project.source_code}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              Source Code
            </a>
          )}
          {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.underline}
          >
            Live Demo
          </a>
          )}
          {project.paper && (
          <a
            href={project.paper}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.underline}
          >
            Paper
          </a>
        )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

