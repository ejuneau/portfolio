import ProgressiveImage from "react-progressive-graceful-image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from "react-router-dom";
import { useState } from "react";
import games from "./Assets/games";

function PortfolioItemGame(props) {
const { game } = props;

	const [isActive, setIsActive] = useState(false);
	const toggleActive = function() {
		setIsActive(!isActive)
	}
	//get index of current game
	let index = games.indexOf(game);

	return (
		<div className="portfolio-item-container game-item-container" key={game.key} draggable="false" onClick={() => toggleActive()}>
			{/* {index !== 0 && window.innerWidth < 767 && !isDesktop && <FontAwesomeIcon icon={icon({name: "chevron-left"})} className="chevron chevron-left" />} */}
			<div className={`portfolio-item game-item ${isActive?'active':null}`} 
			style={{
				width: window.innerWidth > 767?
					// innerWidth > 767
					"40vw" :
					// innerWidth <= 767
					'100vw',

				height: window.innerWidth > 767?
					// innerWidth > 767
					"22.5vw":
					// innerWidth <= 767
					'56.25vw'

					
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
					<h3>{game.title}</h3>
					<p style={{margin: "1.5em 0", width: "100%"}}>{game.description}</p>
					<div style={{display: "flex", width: "100%", justifyContent: "center"}}>
						<a style={{color: "white", marginRight: "1em"}} draggable="false" href={game.link} rel="noreferrer" target="_blank">Visit</a>
						<Link style={{color: "white", marginLeft: "1em"}} draggable="false" to={game.key}>Learn More</Link>
					</div>
				</div>

				<ProgressiveImage src={game.desktopImageFull} alt={game.title + ": " + game.description} placeholder={game.desktopImagePh} >
					{(src) => <img src={src} draggable="false" alt={game.title + ": " + game.description} />}
				</ProgressiveImage>
			</div>
			{/* {index !== games.length -1 && window.innerWidth < 767 && !isDesktop &&  <FontAwesomeIcon icon={icon({name: "chevron-right"})} className="chevron chevron-right" />} */}

		</div>
  );
}

export default PortfolioItemGame;