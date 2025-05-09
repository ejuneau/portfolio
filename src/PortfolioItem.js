import ProgressiveImage from "react-progressive-graceful-image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { useState } from "react";
import { faArrowUpRightFromSquare, faCircleInfo, } from "@fortawesome/free-solid-svg-icons";

function PortfolioItem(props) {
const { project, isDesktop } = props;

	const [isActive, setIsActive] = useState(false);
	const toggleActive = function() {
		setIsActive(!isActive)
	}

	return (
		<div className="portfolio-item-container" key={project.key} draggable="false" onClick={() => toggleActive()}>
			{/* {index !== 0 && window.innerWidth < 767 && !isDesktop && <FontAwesomeIcon icon={icon({name: "chevron-left"})} className="chevron chevron-left" />} */}
			<div className={`portfolio-item ${isDesktop?'desktop-portfolio-item':'mobile-portfolio-item'} ${isActive?'active':null}`} 
			style={{
			width: isDesktop?
			// isDesktop true
			(window.innerWidth > 767?
				// isDesktop true && innerWidth > 767
				"40vw":
				// isDesktop true && innerWidth <= 767
				'100vw'):
			// isDesktop false
			(window.innerWidth > 767?
				// isDesktop false && innerWidth > 767
				"20vw":
				// isDesktop false && innerWidth <= 767
				"100vw"),

			height: isDesktop? 
			// isDesktop true
			(window.innerWidth > 767?
				// isDesktop true && innerWidth > 767
				"22.5vw":
				// isDesktop true && innerWidth <= 767
				'56.25vw'):
			(window.innerWidth > 767?
				//'isDesktop false && innerWidth > 767
				"calc(20vw * 926 / 428)":
				// isDesktop false && innerWidth <= 767
				"calc(70vw * 926 / 428)"),
				
				// margin: isDesktop ?
				// //isDesktop true
				// (window.innerWidth > 767?
				// 	// isDesktop true && innerWidth > 767
				// 	"2em 3em" :
				// 	// isDesktop true && innerWidth <= 767
				// 	"0"):
				// (window.innerWidth > 767?
				// 	// isDesktop false && innerWidth > 767
				// 	"2em 3em":
				// 	// isDesktop false && innerWidth <= 767
				// 	"0"
				// )
				
				}}>

				<div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>    
					<h3>{project.title}</h3>
					<p style={{margin: "1.5em 0", width: "100%"}}>{project.description}</p>
					<div style={{display: "flex", width: "100%", justifyContent: "center", flexDirection: isDesktop ? "row":"column"}}>
					<Link className='portfolio-item-button' style={{marginRight: isDesktop?"1em":"0em", marginBottom: isDesktop?"0em":"1em"}} draggable="false" to={project.key}><FontAwesomeIcon icon={faCircleInfo}  /><p>Learn More</p></Link>
						<a className='portfolio-item-button' style={{marginLeft: isDesktop?"1em":"0em", marginTop: isDesktop?"0em":"1em"}} draggable="false" href={project.link} rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faArrowUpRightFromSquare}  /><p>Visit</p></a>
					</div>
				</div>

				<ProgressiveImage src={isDesktop ? project.desktopImageFull : !isDesktop ? project.mobileImageFull: null} alt={project.title + ": " + project.description} placeholder={isDesktop ? project.desktopImagePh : !isDesktop ? project.mobileImagePh: null} >
					{(src) => <img src={src} draggable="false" alt={project.title + ": " + project.description} />}
				</ProgressiveImage>
			</div>
			{/* {index !== projects.length -1 && window.innerWidth < 767 && !isDesktop &&  <FontAwesomeIcon icon={icon({name: "chevron-right"})} className="chevron chevron-right" />} */}

		</div>
  );
}

export default PortfolioItem;