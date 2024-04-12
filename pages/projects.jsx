import ProjectCard from '../components/ProjectCard';
import { getMLProjects } from './api/projects_ml';
import { getAcademicProjects } from './api/projects_academic';
import { getpypiProjects } from './api/projects_pypi';
import styles from '../styles/ProjectsPage.module.css';

const ProjectsPage = ({ ml_projects, academic_projects, pypi_projects }) => {
  return (
    <>
      <h3>Open Source Projects</h3>
      <br/>
      <center><h4>Machine Learning</h4></center>
      <hr/>
      <div className={styles.container}>
        {ml_projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <br/>
      <center><h4>Academic</h4></center>
      <hr/>
      <div className={styles.container}>
        {academic_projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <br/>
      <center><h4>PyPi Packages</h4></center>
      <hr/>
      <div className={styles.container}>
        {pypi_projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <br/>
    </>
  );
};

export async function getStaticProps() {
  const ml_projects = getMLProjects();
  const academic_projects = getAcademicProjects();
  const pypi_projects = getpypiProjects();

  return {
    props: { title: 'Projects', ml_projects, academic_projects, pypi_projects },
  };
}

export default ProjectsPage;