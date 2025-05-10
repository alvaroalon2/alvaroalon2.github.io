import ProjectCard from '../components/ProjectCard';
import { getMLProjects } from './api/projects_ml';
import { getAcademicProjects } from './api/projects_academic';
//import { getpypiProjects } from './api/projects_pypi';
import { getProfessionalProjects } from './api/projects_professional';
import styles from '../styles/ProjectsPage.module.css';

const ProjectsPage = ({ professional_projects, ml_projects, academic_projects }) => {
  return (
    <>
      <h3>Professional Projects</h3>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', margin: '1rem 0' }}>
        <a href="#professional-section" style={{ textDecoration: 'none', color: 'var(--accent-color)' }}>Work Experience</a>
      </div>
      <br/>
      <section id="professional-section">
        <center><h4>Work Experience</h4></center>
        <hr/>
        <div className={professional_projects.length === 1 ? styles.singleItemContainer : styles.container}>
          {professional_projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      <br/><br/><br/>
      
      <h3>Open Source Projects</h3>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', margin: '1rem 0' }}>
        <a href="#ml-section" style={{ textDecoration: 'none', color: 'var(--accent-color)' }}>Machine Learning</a>
        <a href="#academic-section" style={{ textDecoration: 'none', color: 'var(--accent-color)' }}>Academic</a>
        {/* <a href="#pypi-section" style={{ textDecoration: 'none', color: 'var(--accent-color)' }}>PyPi Packages</a> */}
      </div>
      <br/>
      <section id="ml-section">
        <center><h4>Machine Learning</h4></center>
        <hr/>
        <div className={ml_projects.length === 1 ? styles.singleItemContainer : styles.container}>
          {ml_projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      <br/><br/><br/>
      
      <section id="academic-section">
        <center><h4>Academic</h4></center>
        <hr/>
        <div className={academic_projects.length === 1 ? styles.singleItemContainer : styles.container}>
          {academic_projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      <br/><br/><br/>
      
      {/* <section id="pypi-section">
        <center><h4>PyPi Packages</h4></center>
        <hr/>
        <div className={pypi_projects.length === 1 ? styles.singleItemContainer : styles.container}>
          {pypi_projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section> */}
      <br/><br/>
    </>
  );
};

export async function getStaticProps() {
  const professional_projects = getProfessionalProjects();
  const ml_projects = getMLProjects();
  const academic_projects = getAcademicProjects();
  // const pypi_projects = getpypiProjects();

  return {
    props: { title: 'Projects', professional_projects, ml_projects, academic_projects },
  };
}

export default ProjectsPage;
