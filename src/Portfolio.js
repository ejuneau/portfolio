import './Portfolio.css';
import 'react-indiana-drag-scroll/dist/style.css';
import sites from './sites';
import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import {ReactComponent as Arrows} from './Assets/arrow-left-right.svg';
import PortfolioItem from './PortfolioItem';
import { ScrollContainer } from 'react-indiana-drag-scroll';

export default function Portfolio() {
    
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    useEffect(() => {
        console.log(scrollPosition);
    })
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 767 ? true : false);

    function toggleMode() { setIsDesktop(!isDesktop) }
    
    const ref = useRef();


    return(
        <div className="portfolio">
            <h1>Projects</h1>
            <div className="mode-toggle" onClick={toggleMode}>
                <FontAwesomeIcon icon={icon({name: "mobile"})} className="device" style={{opacity: isDesktop? '0.5' : '1', scale: isDesktop ? '0.9' : '1.1'}} />
                <Arrows className={`arrows ${isDesktop?'desktop':'mobile'}`}/>
                <FontAwesomeIcon icon={icon({name: "display"})} className="device" style={{opacity: !isDesktop? '0.5' : '1', scale: isDesktop? '1.1' : '0.9'}}/>
            </div>

            <ScrollContainer id="draggable" className="portfolio-list" ref={ref} style={{flexFlow: isDesktop? 'column':'row', cursor: isDesktop?"default":"grab"}}>
            
                    {
                        sites.map(site => {
                            return (
                                <PortfolioItem key={site.key} site={site} isDesktop={isDesktop} />
                            )
                        })
                    }
            </ScrollContainer>
        </div>
    )
}