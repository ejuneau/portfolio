import { useState } from "react";
import { Link } from "react-router-dom";
import './Home.css';
 
import sites from "../../Assets/sites";
import games from "../../Assets/games";
import headshot from '../../Assets/images/headshot.jpg';

export default function Home(props) {
    const [backgroundColor, setBackgroundColor] = useState(props.offBlack);
    function exitHandler() {
        setBackgroundColor(props.offBlack)
    }

      return (
        <>
        <div className="App">
          <div className="intro">
            <div className="left-column">
              <h1>👋 Hi, I'm Eve.</h1>
              <p>I've been making websites for nearly six years, and working in games for two.</p>
              <Link to="/projects">Take a look at my projects</Link>
            </div>
            <div className="right-column">
              <img src={headshot} className="headshot" alt="A professional photo of Eve Juneau" />
            </div>
          </div>
          <h2>Here's some cool websites I've made:</h2>
            <ul className="Portfolio" id="Portfolio">
              {
                sites.slice(0,3).map(site => {
                return <li className="list-item" key={site.key}><a id={site.key} style={{color: site.color}} onMouseEnter={() => document.getElementById(site.key).style.textDecorationColor = site.color } onMouseLeave={() => document.getElementById(site.key).style.textDecorationColor = props.offBlack }href={site.link} target="_blank" rel="noreferrer">{site.title}</a></li>

                })
                
              }
            </ul>
            <h2>And here's some games I've worked on:</h2>
              <ul className="Portfolio">
                {
                    games.slice(0,3).map(game => {
                    return <li className="list-item" key={game.key}><a id={game.key} style={{color: game.color}} onMouseEnter={() => document.getElementById(game.key).style.textDecorationColor = game.color } onMouseLeave={() => document.getElementById(game.key).style.textDecorationColor = props.offBlack }href={game.link} target="_blank" rel="noreferrer">{game.title}</a></li>

                    })
                    
                  }
              </ul>
              <h2>Not to mention the secret stuff 😉</h2>
              <p>Like what you see? Interested in working together? Reach out on the <Link to="/Contact">Contact</Link> page.</p>
        </div>
        <style>{`
            html {
                background-color: ${backgroundColor}
            }
        `}
        </style>
        </>
      );
}