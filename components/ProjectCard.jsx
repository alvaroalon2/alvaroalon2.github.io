import Image from 'next/image';
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  const cardStyle = styles.card;
  return (
    <div className={cardStyle}>
      <div className={styles.imageContainer}>
        <Image 
          src={project.image} 
          alt={project.name} 
          className={styles.img}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <div className={styles.content}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => {
            // Convert tag to CSS class name format
            // Replace spaces with hyphens and handle special cases
            let className = tag;
            if (tag === "Industry 4.0") {
              className = "Industry-4-0";
            } else if (tag.includes(" ")) {
              // Replace spaces with hyphens for CSS class names
              className = tag.replace(/ /g, "-");
            }
            return (
              <span key={tag} className={className}>
                {tag}
              </span>
            );
          })}
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
