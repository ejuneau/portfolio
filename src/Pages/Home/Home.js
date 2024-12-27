import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Home.css';
 
import sites from "../../Assets/sites";
import games from "../../Assets/games";
import headshot from '../../Assets/images/headshot.jpg';

export default function Home() {

      return (
        <>
        <div className="App">
          <div className="intro">
            <div className="left-column">
              <div id="test" style={{display: "flex", position: "relative",alignItems: "baseline", justifyContent: "flex-end"}}><h1 className="emoji-wave">👋</h1><h1> Hi, I'm Eve.</h1></div>
              <p>I've been making websites for nearly six years, and working in games for two.</p>
            </div>
            <div className="right-column">
              <img src={headshot} className="headshot" alt="A professional photo of Eve Juneau" />
            </div>
          </div>
          <Link to="/projects" style={{marginTop: "1em"}}>Take a look at all my projects!</Link>

          <h2 >Here's some cool websites I've made:</h2>
            <ul className="Portfolio" id="Portfolio">
              {
                sites.slice(0,3).map(site => {
                return (
                <li 
                className="list-item" 
                key={site.key} 
                id={`${site.key}-parent`}>
                  <a id={site.key} 
                  style={{color: site.color}} 
                  onMouseEnter={() => document.getElementById(`${site.key}-parent`).style.color = site.color } 
                  onFocus={() => document.getElementById(`${site.key}-parent`).style.color = site.color } 

                  onMouseLeave={() => document.getElementById(`${site.key}-parent`).style.color = "transparent" }
                  onBlur={() => document.getElementById(`${site.key}-parent`).style.color = "transparent" }

                  href={site.link} target="_blank" rel="noreferrer">
                    {site.title}
                  </a>
                </li>)

                })
                
              }
            </ul>
            <h2>And here's some games I've worked on:</h2>
              <ul className="Portfolio">
                {
                   games.slice(0,3).map(game => {
                    return (
                    <li 
                    className="list-item" 
                    key={game.key} 
                    id={`${game.key}-parent`}>
                      <a id={game.key} 
                      style={{color: game.color}} 
                      onMouseEnter={() => document.getElementById(`${game.key}-parent`).style.color = game.color } 
                      onFocus={() => document.getElementById(`${game.key}-parent`).style.color = game.color } 

                      onMouseLeave={() => document.getElementById(`${game.key}-parent`).style.color = "transparent" }
                      onBlur={() => document.getElementById(`${game.key}-parent`).style.color = "transparent" }

                      href={game.link} target="_blank" rel="noreferrer">
                        {game.title}
                      </a>
                    </li>)
    
                    })
                  }
              </ul>
              <h2>Not to mention the secret stuff 😉</h2>
              <p>Like what you see? Interested in working together? Reach out on the <Link to="/Contact" style={{color: "var(--text-color)"}}>Contact</Link> page.</p>
        </div>
        {/* <style>{`
            html {
                background-color: ${backgroundColor}
            }
        `}
        </style> */}
        </>
      );
}