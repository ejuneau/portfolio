import './Project.css';

import { useParams } from 'react-router-dom';
import sites from './sites';

function Project() {
  const { projectKey } = useParams();
  console.log (projectKey);

  //retrieve project object with key matching params
  const project = sites.filter((site) => site.key === projectKey)[0];
  console.log(project)

  return (
    <div className="project-container">
      <h1>{project.title}</h1>
    </div>
  );
}

export default Project;
