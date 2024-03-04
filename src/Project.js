import './Project.css';
import ProgressiveImage from 'react-progressive-graceful-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'


import { useParams } from 'react-router-dom';
import sites from './sites';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Project() {
  const { projectKey } = useParams();

  //retrieve project object with key matching params
  const project = sites.filter((site) => site.key === projectKey)[0];

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 767 ? true : false);
  function toggleMode() {
      setIsDesktop(!isDesktop);
  }
  return (
    <div className="project-container">
      <Link to="/projects" className="back"><FontAwesomeIcon icon={icon({name: "arrow-left"})} />Back</Link>
      <ProgressiveImage src={isDesktop ? project.desktopImageFull : !isDesktop ? project.mobileImageFull: null} alt={project.title + ": " + project.description} placeholder={isDesktop ? project.desktopImagePh : !isDesktop ? project.mobileImagePh: null} >
          {(src) => <img src={src} draggable="false" alt={project.title + ": " + project.description} className="project-image"/>}
      </ProgressiveImage>      
      <h1>{project.title}</h1>
      <p>{project.longDescription}</p>
      <h2>I worked on:</h2>
      <ul>
        {project.involvement.map((task) => {
          return (
          <li>{task}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default Project;
