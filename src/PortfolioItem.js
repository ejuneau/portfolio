import ProgressiveImage from "react-progressive-graceful-image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from "react-router-dom";
import { useState } from "react";
import sites from "./Assets/sites";

function PortfolioItem(props) {
const { site, isDesktop } = props;

	const [isActive, setIsActive] = useState(false);
	const toggleActive = function() {
		setIsActive(!isActive)
	}
	//get index of current site
	let index = sites.indexOf(site);

	return (
		<div className="portfolio-item-container" key={site.key} draggable="false" onClick={() => toggleActive()}>
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
					<h3>{site.title}</h3>
					<p style={{margin: "1.5em 0", width: "100%"}}>{site.description}</p>
					<div style={{display: "flex", width: "100%", justifyContent: "center", flexDirection: isDesktop ? "row":"column"}}>
						<a style={{color: "white", marginRight: isDesktop?"1em":"0em", marginBottom: isDesktop?"0em":"1em"}} draggable="false" href={site.link} rel="noreferrer" target="_blank">Visit</a>
						<Link style={{color: "white", marginLeft: isDesktop?"1em":"0em", marginTop: isDesktop?"0em":"1em"}} draggable="false" to={site.key}>Learn More</Link>
					</div>
				</div>

				<ProgressiveImage src={isDesktop ? site.desktopImageFull : !isDesktop ? site.mobileImageFull: null} alt={site.title + ": " + site.description} placeholder={isDesktop ? site.desktopImagePh : !isDesktop ? site.mobileImagePh: null} >
					{(src) => <img src={src} draggable="false" alt={site.title + ": " + site.description} />}
				</ProgressiveImage>
			</div>
			{/* {index !== sites.length -1 && window.innerWidth < 767 && !isDesktop &&  <FontAwesomeIcon icon={icon({name: "chevron-right"})} className="chevron chevron-right" />} */}

		</div>
  );
}

export default PortfolioItem;