import data from './projects_pypi.json';

export const getpypiProjects = () => {
  return data;
};

export default (req, res) => {
  const projects = getpypiProjects();
  res.json(projects);
};
