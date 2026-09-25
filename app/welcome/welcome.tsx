import '@fontsource/poppins';
import '@fontsource-variable/libre-bodoni';

import { useEffect } from 'react';
import faviconLight from './assets/favicon-light.ico'
import faviconDark from './assets/favicon-dark.ico'

import { useState } from 'react';

import headshot from "./assets/headshot.png";
import silly from "./assets/silly.png";

import sweetbabyinc from './assets/sweetbaby.png';
import exothermic from './assets/exothermic.png';
import artstash from './assets/artstash.png';

import alep from './assets/alep.png'; 
import atwc from './assets/atwc.png';
import nomori from './assets/nomori.png';

import gettingkilled from './assets/gettingkilled.png'



export function Welcome() {

  useEffect(() => {
    var linkElement = document.querySelector("link[rel='icon']");
    if (!linkElement) {
      linkElement = document.createElement("a");
    }
    if (linkElement.href) {
      var isDarkMode = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)'));
      linkElement.href = isDarkMode.matches ? faviconDark : faviconLight;
    }


		document.querySelector("html")?.classList.contains("dark")
			? document.querySelector('meta[name="theme-color"]')?.setAttribute("content", "#2E2F2F")
			: document.querySelector('meta[name="theme-color"]')?.setAttribute("content", "#EEE7D7");

  })

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <main id="top" className="flex items-center justify-center">
      <div className="flex-1 flex flex-col items-center lg:gap-24 min-h-0 pt-16">
        <header className="flex sticky flex-row items-center w-[100vw] gap-16 h-[5em] pl-[15vw] pr-[15vw]">
          <a onClick={() => document.getElementById("top")?.scrollIntoView()} className="title text-xl lg:text-[2em]">Eve Juneau</a>
          <div className="spacer grow"></div>
          <nav className="hidden space-x-8 lg:flex">
            <a onClick={() => document.getElementById("marketing")?.scrollIntoView()}>Marketing</a>
            <a onClick={() => document.getElementById("games")?.scrollIntoView()}>Games</a>
            <a onClick={() => document.getElementById("about")?.scrollIntoView()}>About</a>
            <a onClick={() => document.getElementById("contact")?.scrollIntoView()}>Contact</a>
          </nav>

           <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 "></span>
            <span className="block h-0.5 w-8 "></span>
            <span className="block h-0.5 w-8 "></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8">
            <a onClick={() => {setIsNavOpen(false); setTimeout(() => document.getElementById("marketing")?.scrollIntoView(), 1);}}>Marketing</a>
              </li>
              <li className="border-b border-gray-400 my-8">
            <a onClick={() => {setIsNavOpen(false);setTimeout(() => document.getElementById("games")?.scrollIntoView(), 1);}}>Games</a>
              </li>
              <li className="border-b border-gray-400 my-8 ">
            <a onClick={() => {setIsNavOpen(false);setTimeout(() => document.getElementById("about")?.scrollIntoView(), 1);}}>About</a>
              </li>
              <li className="border-b border-gray-400 my-8 ">
            <a onClick={() => {setIsNavOpen(false);setTimeout(() => document.getElementById("contact")?.scrollIntoView(), 1);}}>Contact</a>
              </li>
            </ul>
          </div>
                <style>{`
                .hideMenuNav {
                  display: none;
                  opacity: 0;
                }
                .showMenuNav {
                  display: block;
                  opacity: 1;
                  position: absolute;
                  width: 100%;
                  height: 100vh;
                  top: 0;
                  left: 0;
                  z-index: 5;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-evenly;
                  align-items: center;
                }

              `}</style>
              {isNavOpen && <style>
                {`
                main {
                height: 100vh;
                overflow-y: hidden;
                }`}
              </style>}
        </section>
        </header>  
        <div className="header-spacer  h-0 lg:h-[1em] "></div>      

        <div className="flex flex-col lg:flex-row center place-content-between w-[75vw] mt-[7.5em] lg:mt-[2.5em]">

          <div className="flex flex-col lg:w-[35vw] gap-8">

            <img className="w-[70%] h-[40%] lg:hidden overflow-hidden self-center object-cover object-top" src={headshot}></img>
            <div className="flex flex-row self-center lg:self-start text-2xl lg:text-[2em]" ><h1 className="title wave w-[2em] ">👋</h1><h1 className="title"> Hi, I'm Eve!</h1></div>
            <p className="">I've been working in video games and marketing for three years, and have been making websites for nearly ten.</p>
            <p className=""><strong>I'm passionate about creating engaging user experiences.</strong></p>
            <a className="button w-fit self-center lg:self-start" onClick={() => document.getElementById("contact")?.scrollIntoView()}>Get in touch!</a>
            
            <div className="lg:h-[3em]"></div>

            <h2><strong>Recent Highlight:</strong></h2>
            <p>I analyzed trends to develop and execute a content strategy which:</p>

            <ul className="flex flex-col gap-8">
              <li className="highlight">Boosted Linked Followers by 600% over 8 months</li>
              <li className="highlight">Established steady followership on Instagram and TikTok</li>
              <li className="highlight">Delivered brand recognition through SEO on CRM sites like WordPress</li>
            </ul>

          </div>

          <div className="flex flex-col items-center gap-8 mt-[2em] lg:mt-0 lg:w-[30vw]">
            <img className="w-[70%] h-[40%] hidden lg:block overflow-hidden object-cover object-top" src={headshot}></img>
            <div className="lg:w-[70%] callout flex flex-col items-center p-4"><p><strong>Marketing</strong></p><p className="text-center">Copywriting, social media strategy, target audience</p></div>
            <div className="lg:w-[70%] callout flex flex-col items-center p-4 "><p><strong>Websites</strong></p><p className="text-center">Design, updates, management, Search Engine Optimization (SEO)</p></div>
            <div className="lg:w-[70%] callout flex flex-col items-center p-4 "><p><strong>Project Management</strong></p><p className="text-center">Stakeholder reporting, Daily Scrum, client communications</p></div>
          </div>

        </div>
        <div className="flex flex-col w-[100vw] lg:w-[75vw] gap-8 " id="marketing">
          <h1 className="mt-[7.5em] ml-[12.5vw] lg:ml-0"><strong>Portfolio - Marketing</strong></h1>
          <ul className="flex flex-row pl-[12.5vw] lg:pl-0 pr-[12.5vw] lg:pr-0 gap-16 place-content-between pb-8 lg:pb-0 overflow-x-scroll snap-x snap-mandatory mb-8 lg:mb-0">
            {marketing_portfolio.map(marketing_resource => 
                    <li key={marketing_resource.text} className="flex flex-col w-[80vw] lg:w-[20vw] snap-center shrink-0  grow gap-4 justify-start">
                      <a href={marketing_resource.href} target="_blank" rel="noreferrer">
                        <div>
                          <img src={marketing_resource.img}/>
                        </div>
                      </a>
                      <a href={marketing_resource.href}><strong>{marketing_resource.text}</strong></a>
                      <p>Role: {marketing_resource.role}</p>
                      <ul className="list-disc ml-[2em]">
                        {marketing_resource.tasks.map(task => 
                        <li key={task}>
                          <p>{task}</p>
                        </li>)}
                      </ul>
                    </li>
                  )}
          </ul>
        </div>
        <div className=" callout flex flex-col w-[80vw] lg:w-[35vw] gap-8 flex-wrap p-4 lg:p-8">
          <h1><strong>I've worked with:</strong></h1>
          <ul className="flex flex-row gap-4 lg:gap-8 flex-wrap">
            {workedWith.map(client => 
              <li key={client.name} ><a href={client.href}>{client.name}</a></li>)}
          </ul>
        </div>


        <div className="flex flex-col w-[100vw] lg:w-[75vw] gap-8 " id="games">
          <h1 className='mt-[7.5em] ml-[12.5vw] lg:ml-0'><strong>Portfolio - Games</strong></h1>
          <ul className="flex flex-row pl-[12.5vw] lg:pl-0 pr-[12.5vw] lg:pr-0 gap-16 place-content-between pb-8 lg:pb-0 overflow-x-scroll snap-x snap-mandatory mb-8 lg:mb-0">
            {games.map(game => 
                    <li key={game.name} className="flex flex-col w-[80vw] lg:w-[20vw] snap-center shrink-0  grow gap-4 justify-start">
                      <a href={game.href} target="_blank" rel="noreferrer">
                        <div>
                         <img src={game.img}/>
                        </div>
                      </a>
                      <a href={game.href}><strong>{game.name}</strong></a>
                      <p>Role: {game.role}</p>
                      <ul className="list-disc ml-[2em]">
                        {game.tasks.map(task => 
                        <li key={task}>
                          <p>{task}</p>
                        </li>)}
                      </ul>
                    </li>
                  )}
          </ul>
        </div>

        <div className="callout flex flex-col w-[80vw] lg:w-[35vw] gap-8 flex-wrap p-4 lg:p-8">
          <h1><strong>Tools I use:</strong></h1>
          <ul className="flex flex-row gap-4 lg:gap-8 flex-wrap">
            {tools.map(tool => 
                    <li key={tool} className="flex flex-col gap-4 justify-start">
                      {tool}
                    </li>
                  )}
          </ul>
          <ul className="flex flex-row gap-4 lg:gap-8 flex-wrap mt-8">
            {languages.map(language => 
                    <li key={language} className="flex flex-col gap-4 justify-start">
                      {language}
                    </li>
                  )}
          </ul>
        </div>

        <div className="flex flex-col w-[75vw] gap-8 " id="about">
          <h1 className="mt-[7.5em]"><strong>A little more about me!</strong></h1>
          <p>My name is Eve Juneau (they/she), a developer based in Montréal, Canada. Specializing in <strong>web design</strong> design via React and <strong>game development</strong> in Godot, I love the ways stories connect us and share ourselves with the world.</p>
          <p>With over a decade of experience both in freelance as well as contract work, I offer services ranging from consultation, to designing, to fully building and executing your plans and bring them to life.</p>
          <p>To get in touch regarding any of the above, please feel free to reach me at the contact form below!</p>
          <p>Here's an album that I'm listening to these days:</p>
          

            <div className=" items-center flex-col justify-center flex gap-8">
              <div className = "flex-col items-center center text-center text-[0.70em]">
                <h3 className="title text-xl lg:text-4xl"><em>{albums[0].title}</em></h3>
                <p className="title text-xl lg:text-2xl">by</p>
                <h3 className ="title text-2xl lg:text-4xl">{albums[0].artist}</h3>
              </div>
              <img src={albums[0].img} className='lg:w-[20vw]'/>
            <div className =" flex flex-col gap-8 lg:w-[50%]">
              <p className="text-center">Available to listen here:</p>
              <div className="flex flex-col lg:flex-row gap-8 ">
                <a className="bandcamp button w-[100%]" href={albums[0].bandcamphref} rel="noreferrer" target="_blank">Bandcamp</a>
                <a className="applemusic button w-[100%]" href={albums[0].applehref} rel="noreferrer" target="_blank">Apple Music</a>
                <a className="spotify button w-[100%]" href={albums[0].spotifyhref} rel="noreferrer" target="_blank">Spotify</a>
              </div>

            </div>

            </div>
        </div>

        <div className="flex flex-col w-[75vw] gap-8 " id="contact">
          <h1 className="mt-[7.5em]"><strong>Let's work together :)</strong></h1>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-48 place-content-center">
            <div className="flex flex-col">
              <img src={silly} className="lg:w-[21vw]"/>
              <p className="text-center lg:text-right mt-8">"You won't regret it!!!" —Pierogi</p>
            </div>

            <div className="flex flex-col self-center gap-8">
              <p>Get in touch with me on:</p>
              <a className="button linkedin" href="https://www.linkedin.com/in/ejuneau/" rel="noreferrer" target="_blank">LinkedIn</a>
              <a className="button bluesky" href="https://bsky.app/profile/ejuneau.me" rel="noreferrer" target="_blank">Bluesky</a>
              <a className="button instagram" href="https://www.instagram.com/rcjuneau/" rel="noreferrer" target="_blank">Instagram</a>
              <p className="text-right">...or just <a className="underline" style={{textDecoration: "underline"}} href="mailto:rcjuneau9@gmail.com" rel="noreferrer" target="_blank">email me</a>!</p>
            </div>
          </div>

          
        </div>

        <footer className="flex flex-col items-center w-[100vw] gap-4 h-[5em] mt-[5em] lg:mt-0 pl-[15vw] pr-[15vw] text-sm">
          <p>Copyright 2026 Eve Juneau</p>
          <p>Made with ❤️ in <a href="https://reactrouter.com/">React Router</a></p>
        </footer>
      </div>
    </main>
  );
}

const marketing_portfolio = [
  {
    href: "https://creative.artstash.io",
    text: "Artstash Creative",
    img: artstash,
    role: "Content Manager",
    tasks: [
      "LinkedIn Content Strategies",
      "Brevo Newsletter Administration",
      "Social Media Moderation (Instagram & TikTok)"
    ]
  },
  {
    href: "https://exothermic.co",
    text: "Exothermic Games",
    img: exothermic,
    role: "Communications Specialist",
    tasks: [
      "Community Management (Discord & Reddit)",
      "Weekly Streaming (YouTube & Twitch)",
      "Set up and maintenance of wiki farm"
    ]
  },
  {
    href: "https://sweetbabyinc.com",
    text: "Sweet Baby Inc",
    img: sweetbabyinc,
    role: "Studio Producer",
    tasks: [
      "Project Management",
      "Leading Daily Scrum",
      "Managing External Communications"
    ]
  }
];

const workedWith = [
  {
    name: "Enchanted Works",
    href: "https://www.enchantedworks.nl/"
  },
  {
    name: "Hidden IO",
    href: "https://www.hiddengem.io/"
  },
  {
    name: "MELLOW Games",
    href: "https://mellow-games.com/"
  },
  {
    name: "Pikselnesia",
    href: "https://store.steampowered.com/search/?developer=Pikselnesia"
  },
  {
    name: "Probably Monsters",
    href: "https://www.probablymonsters.com/"
  },
  {
    name: "PUBG Corp",
    href: "https://pubg.com/"
  },
  {
    name: "Reburn",
    href: "https://www.4a-games.com.mt/"
  },
  {
    name: "Rose City Games",
    href: "https://www.rosecitygames.com/"

  },
  {
    name: "Stormy Nights",
    href: "https://www.stormynights.games/"

  },
  {
    name: "Ubisoft Montréal",
    href: "https://montreal.ubisoft.com/en/"

  },
  {
    name: "Wētā Workshop",
    href: "https://www.wetaworkshop.com/"
  },
  {
    name: "World of Us",
    href: "https://www.worldofus.info/"
  },
  {
    name: "Xbox Game Studios",
    href: ""
  }

]

const games = [
  {
    name: "Afterlove EP",
    href: "https://store.steampowered.com/app/1599780/Afterlove_EP/",
    role: "Additional Writing",
    img: alep,
    tasks: [
      "Dialog writing for background characters",
    ]
  },
  {
    name: "All the World's Cravings",
    href: "https://store.steampowered.com/app/4617160/All_the_Worlds_Cravings/",
    role: "Lead Programmer and Designer",
    img: atwc,
    tasks: [
      "Full game development",
      "Presented at Ludodrome 2x"
    ]
  },
  {
    name: "Nomori",
    href: "https://store.steampowered.com/app/4617160/All_the_Worlds_Cravings/",
    role: "Studio Producer - SBI",
    img: nomori,
    tasks: [
      "Studio Production (SBI)",
    ]
  },
  
]

const tools = [
  "Google Suite",
  "Microsoft Office",
  "Miro",
  "Figma",
  "Asana",
  "Jira",
  "Notion",
  "Git",
]

const languages = [
  "HTML5",
  "GDScript",
  "C#",
  "Python",
  "JavaScript/TypeScript",
  "React.js",
  "Redux.js",
  "SQL/PostgreSQL",
  "Firebase/Firestore",
]

const albums = [
  {
    title: "Getting Killed",
    artist: "Geese",
    img: gettingkilled,
    bandcamphref: "https://geesebandnyc.bandcamp.com/album/getting-killed",  
    applehref: "https://music.apple.com/us/album/getting-killed/1818548779",
    spotifyhref: "https://open.spotify.com/album/0eeXb23yMW6EaIgm63xxPC"
  }
]