import './Portfolio.css';
import sites from './sites';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import ProgressiveImage from "react-progressive-graceful-image";
import {ReactComponent as Arrows} from './Assets/arrow-left-right.svg';
export default function Portfolio() {


    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 767 ? true : false);
    function toggleMode() {
        setIsDesktop(!isDesktop);
    }
    
    return(
        <div className="portfolio">
            <h1>Projects</h1>
            <div className="mode-toggle" onClick={toggleMode}>
                <FontAwesomeIcon icon={icon({name: "mobile"})} className="device" style={{opacity: isDesktop? '0.5' : '1', scale: isDesktop ? '0.9' : '1.1'}} />
                <Arrows className={`arrows ${isDesktop?'desktop':'mobile'}`}/>
                <FontAwesomeIcon icon={icon({name: "display"})} className="device" style={{opacity: !isDesktop? '0.5' : '1', scale: isDesktop? '1.1' : '0.9'}}/>
            </div>

            <div id="draggable" className="portfolio-list" style={{flexFlow: isDesktop? 'column':'row'}}>
            
                    {
                        sites.map(site => {
                            return (
                                <Link to={site.key} className="portfolio-item-container" key={site.key} draggable="false">
                                    <div className={`portfolio-item ${isDesktop?'desktop-portfolio-item':'mobile-portfolio-item'}`} 
                                    style={{
                                        width: isDesktop?
                                            // isDesktop true
                                            (window.innerWidth > 767?
                                                // isDesktop true && innerWidth > 767
                                            "40vw":
                                                // isDesktop true && innerWidth <= 767
                                            '80vw'):
                                            // isDesktop false
                                            (window.innerWidth > 767?
                                                // isDesktop false && innerWidth > 767
                                            "20vw":
                                                // isDesktop false && innerWidth <= 767
                                            "70vw"),

                                        height: isDesktop? 
                                            // isDesktop true
                                            (window.innerWidth > 767?
                                                // isDesktop true && innerWidth > 767
                                                "22.5vw":
                                                // isDesktop true && innerWidth <= 767
                                                '45vw'):
                                            (window.innerWidth > 767?
                                                //'isDesktop false && innerWidth > 767
                                                "calc(20vw * 926 / 428)":
                                                // isDesktop false && innerWidth <= 767
                                                "calc(70vw * 926 / 428)")}}>

                                        <h3>{site.title}</h3>
                                        <p className="portfolio-description">{site.description}</p>

                                        <ProgressiveImage src={isDesktop ? site.desktopImageFull : !isDesktop ? site.mobileImageFull: null} alt={site.title + ": " + site.description} placeholder={isDesktop ? site.desktopImagePh : !isDesktop ? site.mobileImagePh: null} >
                                            {(src) => <img src={src} draggable="false" alt={site.title + ": " + site.description} />}
                                        </ProgressiveImage>
                                    </div>
                                </Link>
                            )
                        })
                    }
            </div>
        </div>
    )
}