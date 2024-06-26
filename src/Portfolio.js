import './Portfolio.css';
import sites from './sites';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import {ReactComponent as Arrows} from './Assets/arrow-left-right.svg';
import PortfolioItem from './PortfolioItem';
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
                                <PortfolioItem site={site} isDesktop={isDesktop} />
                            )
                        })
                    }
            </div>
        </div>
    )
}