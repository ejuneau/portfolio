import '@fontsource/poppins';
import '@fontsource-variable/libre-bodoni';

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

  return (
    <main id="top" className="flex items-center justify-center">
      <div className="flex-1 flex flex-col items-center gap-24 min-h-0 pt-16">
        <header className="flex sticky flex-row items-center w-[100vw] gap-16 h-[5em] pl-[15vw] pr-[15vw]">
          <a onClick={() => document.getElementById("top")?.scrollIntoView()} className="title">Eve Juneau</a>
          <div className="spacer grow"></div>
          <a onClick={() => document.getElementById("marketing")?.scrollIntoView()}>Marketing</a>
          <a onClick={() => document.getElementById("games")?.scrollIntoView()}>Games</a>
          <a onClick={() => document.getElementById("about")?.scrollIntoView()}>About</a>
          <a onClick={() => document.getElementById("contact")?.scrollIntoView()}>Contact</a>
        </header>  
        <div className="header-spacer flex flex-row items-center w-[100vw] gap-16 h-[1em] pl-[15vw] pr-[15vw]"></div>      
        <div className="flex flex-row center place-content-between w-[75vw] mt-[2.5em]">

          <div className="flex flex-col w-[35vw] gap-8">
            <div className="flex flex-row" ><h1 className="title wave w-[2em]">👋</h1><h1 className="title"> Hi, I'm Eve!</h1></div>
            <p className="">I've been working in video games and marketing for three years, and have been making websites for nearly ten.</p>
            <p className=""><strong>I'm passionate about creating engaging user experiences.</strong></p>
            <a className="button w-fit" onClick={() => document.getElementById("contact")?.scrollIntoView()}>Get in touch!</a>
            <div className="h-[3em]"></div>
            <h2><strong>Recent Highlight:</strong></h2>
            <p>I analyzed trends to develop and execute a content strategy which:</p>
            <ul className="flex flex-col gap-8">
              <li className="highlight">Boosted Linked Followers by 600% over 8 months</li>
              <li className="highlight">Established steady followership on Instagram and TikTok</li>
              <li className="highlight">Delivered brand recognition through SEO on CRM sites like WordPress</li>
            </ul>
          </div>

          <div className="flex flex-col items-center gap-8 w-[30vw]">
            <img className="w-[70%] h-[40%] overflow-hidden object-cover object-top" src={headshot}></img>
            <div className="w-[70%] callout flex flex-col items-center p-[0.5em]"><p><strong>Marketing</strong></p><p className="text-center">Copywriting, social media strategy, target audience</p></div>
            <div className="w-[70%] callout flex flex-col items-center p-[0.5em]"><p><strong>Websites</strong></p><p className="text-center">Design, updates, management, Search Engine Optimization (SEO)</p></div>
            <div className="w-[70%] callout flex flex-col items-center p-[0.5em]"><p><strong>Project Management</strong></p><p className="text-center">Stakeholder reporting, Daily Scrum, client communications</p></div>
          </div>

        </div>
        <div className="flex flex-col w-[75vw] gap-8 " id="marketing">
          <h1 className="mt-[7.5em]"><strong>Portfolio - Marketing</strong></h1>
          <ul className="flex flex-row gap-16 place-content-between">
            {marketing_portfolio.map(marketing_resource => 
                    <li key={marketing_resource.text} className="flex flex-col gap-4 justify-start">
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
        <div className=" callout flex flex-col w-[35vw] gap-8 flex-wrap p-8">
          <h1><strong>I've worked with:</strong></h1>
          <ul className="flex flex-row gap-8 flex-wrap">
            {workedWith.map(client => 
              <li key={client.name} ><a href={client.href}>{client.name}</a></li>)}
          </ul>
        </div>


        <div className="flex flex-col w-[75vw] gap-8 " id="games">
          <h1 className='mt-[7.5em]'><strong>Portfolio - Games</strong></h1>
          <ul className="flex flex-row gap-16 place-content-between">
            {games.map(game => 
                    <li key={game.name} className="flex flex-col gap-4 justify-start">
                      <a href={game.href} target="_blank" rel="noreferrer">
                        <div>
                         <img src={game.img}/>
                        </div>
                      </a>
                      <a href={game.href}><strong>{game.name}</strong></a>
                      <p>Role: {game.role}</p>
                      <ul className="list-disc ml-[2em]">
                        {game.tasks.map(task => 
                        <li>
                          <p>{task}</p>
                        </li>)}
                      </ul>
                    </li>
                  )}
          </ul>
        </div>

        <div className="callout flex flex-col w-[35vw] gap-8 flex-wrap p-8">
          <h1><strong>Tools I use:</strong></h1>
          <ul className="flex flex-row gap-8 flex-wrap">
            {tools.map(tool => 
                    <li key={tool} className="flex flex-col gap-4 justify-start">
                      {tool}
                    </li>
                  )}
          </ul>
          <ul className="flex flex-row gap-8 flex-wrap mt-8">
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
                <h3 className="title"><em>{albums[0].title}</em></h3>
                <p className="title text-[0.3em]">by</p>
                <h3 className ="title">{albums[0].artist}</h3>
              </div>
              <img src={albums[0].img} className='w-[20vw]'/>
            <div className =" flex flex-col gap-8 w-[50%]">
              <p className="text-center">Available to listen here:</p>
              <div className="flex flex-row gap-8 ">
                <a className="bandcamp button w-[100%]" href={albums[0].bandcamphref} rel="noreferrer" target="_blank">Bandcamp</a>
                <a className="applemusic button w-[100%]" href={albums[0].applehref} rel="noreferrer" target="_blank">Apple Music</a>
                <a className="spotify button w-[100%]" href={albums[0].spotifyhref} rel="noreferrer" target="_blank">Spotify</a>
              </div>

            </div>

            </div>
        </div>

        <div className="flex flex-col w-[75vw] gap-8 " id="contact">
          <h1 className="mt-[7.5em]"><strong>Let's work together :)</strong></h1>
          <div className="flex flex-row gap-48 place-content-center">
            <div className="flex flex-col">
              <img src={silly} className="w-[21vw]"/>
              <p className="text-right mt-8">"You won't regret it!!!" —Pierogi</p>
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

        <footer className="flex flex-col items-center w-[100vw] gap-4 h-[5em] pl-[15vw] pr-[15vw] text-sm">
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