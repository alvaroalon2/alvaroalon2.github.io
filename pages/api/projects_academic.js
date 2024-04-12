import data from './projects_academic.json';

export const getAcademicProjects = () => {
  return data;
};

export default (req, res) => {
  const projects = getAcademicProjects();
  res.json(projects);
};
