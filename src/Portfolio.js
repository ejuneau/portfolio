import './Portfolio.css';
import 'react-indiana-drag-scroll/dist/style.css';
import sites from './Assets/sites';
import games from './Assets/games';
import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import {ReactComponent as Arrows} from './Assets/arrow-left-right.svg';
import PortfolioItem from './PortfolioItem';
import PortfolioItemGame from './PortfolioItemGame';
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
            <h2>Web</h2>
            <div className="mode-toggle" onClick={toggleMode}>
                <FontAwesomeIcon icon={icon({name: "mobile"})} className="device" style={{opacity: isDesktop? '0.5' : '1', scale: isDesktop ? '0.9' : '1.1'}} />
                <Arrows className={`arrows ${isDesktop?'desktop':'mobile'}`}/>
                <FontAwesomeIcon icon={icon({name: "display"})} className="device" style={{opacity: !isDesktop? '0.5' : '1', scale: isDesktop? '1.1' : '0.9'}}/>
            </div>

            <div className="portfolio-list" ref={ref} >
            
                    {
                        sites.map(site => {
                            return (
                                <PortfolioItem key={site.key} site={site} isDesktop={isDesktop} />
                            )
                        })
                    }
            </div>
            <h2>Games</h2>
            <div className="portfolio-list game-list">
                {
                    games.map(game => {
                        return (
                            <PortfolioItemGame key={game.key} game={game} site={game} />
                        )
                    })
                }
                <div className="portfolio-item-container game-item-container" >
                    <div className={`portfolio-item game-item undisclosed-games active`} 
                    style={{
                        width: window.innerWidth > 767?
                            // innerWidth > 767
                            "80vw" :
                            // innerWidth <= 767
                            '80vw',

                        height: window.innerWidth > 767?
                            // innerWidth > 767
                            "22.5vw":
                            // innerWidth <= 767
                            '45vw'
                            
                            }}>
            
                        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>    
                            <h3>10+ currently undisclosed/unreleased games</h3>
                            <div style={{display: "flex", width: "100%", justifyContent: "center"}}>
                                {/* <a style={{color: "white", marginRight: "1em"}} draggable="false" href={game.link} rel="noreferrer" target="_blank">Visit</a> */}
                                <p style={{fontSize: "0.9em", margin: "1em", fontStyle: "italic", width: "100%"}}>{"Scales range from indie to AAA"}</p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}