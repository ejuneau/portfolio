import './Portfolio.css';
import sites from './sites';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import ProgressiveImage from "react-progressive-graceful-image";
import {ReactComponent as Arrows} from './Assets/arrow-left-right.svg';
import  ScrollContainer from 'react-indiana-drag-scroll';
export default function Portfolio() {


    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 767 ? true : false);
    function toggleMode() {
        setIsDesktop(!isDesktop);
    }
    useEffect(() => {
        const ele=document.getElementById("draggable");
        let pos = { top: 0, left: 0, x: 0, y: 0};

        const mouseDownHandler = function (e) {
            ele.style.cursor = "grabbing";
            ele.style.userSelect = "none";
            pos = {
                // The current scroll
                left: ele.scrollLeft,
                top: ele.scrollTop,
                // Get the current mouse position
                x: e.clientX,
                y: e.clientY,
            };
            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);
        }
    
        const mouseMoveHandler = function (e) {
            // How far the mouse has been moved
            const dx = e.clientX - pos.x;
            const dy = e.clientY - pos.y;
    
            // Scroll the element
            ele.scrollTop = pos.top - dy;
            ele.scrollLeft = pos.left - dx;
        }
        const mouseUpHandler = function(e) {
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
    
            ele.style.cursor = "grab";
            ele.style.removeProperty("user-select");
        }

        //attach the handler
        ele.addEventListener('mousedown', mouseDownHandler);
    }, [])
    
    return(
        <ScrollContainer>
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
                                <a href={site.link} className="portfolio-item-container" rel="noreferrer" target="_blank" key={site.title}>
                                    {window.innerWidth <= 767 && <div className={`portfolio-item ${isDesktop?'desktop-portfolio-item':'mobile-portfolio-item'}`} style={{width: isDesktop?'80vw': '70vw', height: isDesktop? '45vw' : 'calc(70vw * 926 / 428)'}}>
                                        <h3>{site.title}</h3>
                                        <p className="portfolio-description">{site.description}</p>
                                        <ProgressiveImage src={isDesktop ? site.desktopImageFull : !isDesktop ? site.mobileImageFull: null} alt={site.title + ": " + site.description} placeholder={isDesktop ? site.desktopImagePh : !isDesktop ? site.mobileImagePh: null} >
                                            {(src) => <img src={src} draggable="false" alt={site.title + ": " + site.description} />}
                                        </ProgressiveImage>
                                    </div> }
                                    {window.innerWidth > 767 && <div className={`portfolio-item ${isDesktop?'desktop-portfolio-item':'mobile-portfolio-item'}`} style={{width: isDesktop?'40vw': '20vw', height: isDesktop? '22.5vw' : 'calc(20vw * 926 / 428)'}}>
                                        <h3>{site.title}</h3>
                                        <p className="portfolio-description">{site.description}</p>
                                        <ProgressiveImage src={isDesktop ? site.desktopImageFull : !isDesktop ? site.mobileImageFull: null} alt={site.title + ": " + site.description} placeholder={isDesktop ? site.desktopImagePh : !isDesktop ? site.mobileImagePh: null} >
                                            {(src) => <img src={src} draggable="false" alt={site.title + ": " + site.description} />}
                                        </ProgressiveImage>
                                    </div> }
                                </a>
                            )
                        })
                    }
            </div>
        </div>
    </ScrollContainer>
    )
}