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

  return (
    <div className="project-container">
      <Link to="/projects" className="back" draggable="false"><FontAwesomeIcon icon={icon({name: "arrow-left"})} />Back</Link>
      <ProgressiveImage src={isDesktop ? project.desktopImageFull : project.mobileImageFull} alt={project.title + ": " + project.description} placeholder={isDesktop ? project.desktopImagePh : project.mobileImagePh} >
          {(src) => <img src={src} draggable="false" alt={project.title + ": " + project.description} className="project-image"/>}
      </ProgressiveImage>      
      <div style={{display: "flex", alignItems: "baseline"}}><h1>{project.title}</h1> <a href={project.link} className="forward" draggable="false" target="_blank" rel="noreferrer" style={{marginLeft: "1em"}}>Visit <FontAwesomeIcon icon={icon({name: "arrow-right"})} /></a></div>
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
