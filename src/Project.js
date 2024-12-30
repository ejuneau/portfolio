import './Project.css';
import ProgressiveImage from 'react-progressive-graceful-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'


import { useParams } from 'react-router-dom';
import sites from './Assets/sites';
import games from './Assets/games';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function Project() {
  const { projectKey } = useParams();

  //retrieve project object with key matching params
  const project = sites.filter((site) => site.key === projectKey)[0] || games.filter((game) => game.key === projectKey)[0];

  // const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 767 ? true : false);
  const isDesktop = useState(window.innerWidth >= 767 ? true : false);

  return (
    <div className="project-container">
      <Link to="/projects" className="back" draggable="false"><FontAwesomeIcon icon={icon({name: "arrow-left"})} />Back</Link>
      {      
      project.showreel?
      <div className="showreel-container">
      <iframe 
      style={{position: "fixed", left: "20vw", right: "20vw", width: "60vw", height: "calc(60vw * 9 / 16", zIndex: 1}}
      className="project-showreel"
      src={`https://www.youtube.com/embed/${project.showreel}?si=0m8vX-NLCK86YRHs&controls=0&loop=1&mute=1&autoplay=1&showinfo=0&playlist=${project.showreel}`} 
      title={`${project.title} Showreel`} 
      frameborder="0"  
      >
        
      </iframe>
      </div>:
        <div className="image-container">
          <ProgressiveImage src={isDesktop ? project.desktopImageFull : project.mobileImageFull} alt={project.title + ": " + project.description} placeholder={isDesktop ? project.desktopImagePh : project.mobileImagePh} >
              {(src) => <img src={src} draggable="false" alt={project.title + ": " + project.description} className="project-image"/>}
          </ProgressiveImage>  
        </div>
      }
      <div className="project-cover">
        <a href={project.link} draggable="false" target="_blank" rel="noreferrer" style={{display: "flex", alignItems: "baseline", marginTop: "5vh"}}>
          <h1>{project.title}</h1> 
          <FontAwesomeIcon className="forward-icon" icon={icon({name: "arrow-up-right-from-square", size: "2xs"})} style={{marginLeft: "0.5em"}} />
          {/* <p style={{marginLeft: "0.5em", marginRight: '1em'}}>Visit</p> */}
        </a>
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
    </div>
  );
}

export default Project;
