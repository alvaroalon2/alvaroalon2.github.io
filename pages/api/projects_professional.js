import data from './projects_professional.json';

export const getProfessionalProjects = () => {
  return data;
};

export default (req, res) => {
  const projects = getProfessionalProjects();
  res.json(projects);
};
