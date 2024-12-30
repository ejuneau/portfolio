import soupgangDesktopFull from './images/desktop/full/soupgang.png';
import soupgangDesktopPh from './images/desktop/ph/soupgang.png';
import soupgangMobileFull from './images/mobile/full/soupgang.png';
import soupgangMobilePh from './images/mobile/ph/soupgang.png';


import townsquareDesktopFull from './images/desktop/full/townsquare.png';
import townsquareDesktopPh from './images/desktop/ph/townsquare.png';
import townsquareMobileFull from './images/mobile/full/townsquare.png';
import townsquareMobilePh from './images/mobile/ph/townsquare.png';


import spyglassDesktopFull from './images/desktop/full/spyglass.png';
import spyglassDesktopPh from './images/desktop/ph/spyglass.png';
import spyglassMobileFull from './images/mobile/full/spyglass.png';
import spyglassMobilePh from './images/mobile/ph/spyglass.png';

import maxineDesktopFull from './images/desktop/full/maxine.png';
import maxineDesktopPh from './images/desktop/ph/maxine.png';
import maxineMobileFull from './images/mobile/full/maxine.png';
import maxineMobilePh from './images/mobile/ph/maxine.png';

import reclaimDesktopFull from './images/desktop/full/reclaim.png';
import reclaimDesktopPh from './images/desktop/ph/reclaim.png';
import reclaimMobileFull from './images/mobile/full/reclaim.png';
import reclaimMobilePh from './images/mobile/ph/reclaim.png';




const sites = [
    {
        color:              "#FFA900",
        key:                "townsquare",
        link:               "https://www.townsquaremtl.com/",
        title:              "Townsquare",
        description:        "Local contractor service.",
        desktopImageFull:   townsquareDesktopFull,
        desktopImagePh:     townsquareDesktopPh, 
        mobileImageFull:    townsquareMobileFull,
        mobileImagePh:      townsquareMobilePh,
        longDescription:    "Townsquare is a local contractor service which aims to provide a number of services to its users across the Greater Montreal Area. From smaller jobs like painting or cleaning, to bigger tasks like patio finishing and arborist services, Townsquare puts a focus on the quality of their employees' work as well as their quick turnaround for tasks.",
        involvement:        [
                                "Implemented WordPress website", 
                                "Outlined design language", 
                            ]
    },
    {
        color:              "#254e70",
        key:                "maxine",
        link:               "https://maxinesophiawolff.me/",
        title:              "Maxine Sophia Wolff",
        description:        "Simple responsive portfolio.",
        desktopImageFull:   maxineDesktopFull,
        desktopImagePh:     maxineDesktopPh, 
        mobileImageFull:    maxineMobileFull,
        mobileImagePh:      maxineMobilePh,
        longDescription:    "The portfolio of Maxine Sophia Wolff is a small and responsive Multi-Page Application hosted on Render through a custom domain name. The goal of this project was to streamline and condense the information provided on the client's previous portfolio site, while updating styles to conform with best practises in web design.",
        involvement:        [
                                "Full website development", 
                                "Collaborated with client to establish design",
                                "Website built in React.js and hosted on Render", 
                            ],
    },
    {
        color:              "#FC5130",
        key:                "spyglass",
        link:               "https://spyglass-hsef.onrender.com/",
        title:              "Spyglass Eyewear",
        description:        "Sunglasses webstore.",
        desktopImageFull:   spyglassDesktopFull,
        desktopImagePh:     spyglassDesktopPh, 
        mobileImageFull:    spyglassMobileFull,
        mobileImagePh:      spyglassMobilePh,
        longDescription:    `Spyglass Eyewear is a portfolio project designed by me. Everything about this project was done by myself, from from designing the layout to hosting the website and even to coordinating the photoshoots for the glasses models. The goal of this project was to design a theoretical webstore with a striking visual design that immediately grabs the client's attention - animations are flashy, colours are bright, everything about the site is meant to dazzle. The off-centre design proved to be a very fun challenge to achieve in CSS, and the final result speaks for itself. The design of this website is heavily inspired by Persona 5, a video game with a similar visual identity.`,
        involvement:        [
                                "Full website design and development", 
                                "Website built in React.js and hosted on Render", 
                            ],
        showreel:           "8HzenvtBKk4",
    },
    {
        color:              "#3daeda",
        key:                "reclaim",
        link:               "https://reclaimliteracy.ca/",
        title:              "RECLAIM Literacy",
        description:        "Nonprofit organisation.",
        desktopImageFull:   reclaimDesktopFull,
        desktopImagePh:     reclaimDesktopPh, 
        mobileImageFull:    reclaimMobileFull,
        mobileImagePh:      reclaimMobilePh,
        longDescription:    `RECLAIM Literacy is a not-for-profit organisation that offers resources to help address illiteracy rates in Montreal. For such an important cause, their website must convey the services they provide clearly and efficiently. A website overhaul with prioritisation of visual assets was the key to this project's success, and accessibiltiy was a top priority throughout the entire design process.`,
        involvement:        [
                                "Full website design and development", 
                                "Website built and designed in Weebly", 
                            ],
    },
    {
        color:              "#242F40",
        key:                "openkitchen",
        link:               "https://openkithchen.onrender.com/",
        title:              "OpenKitchen",
        description:        "Meal Preparation service.",
        desktopImageFull:   soupgangDesktopFull,
        desktopImagePh:     soupgangDesktopPh, 
        mobileImageFull:    soupgangMobileFull,
        mobileImagePh:      soupgangMobilePh,
        longDescription:    "Openkitchen is a portfolio project by me, with the main pitch of its idea being a centralised, crowd-funded meal service. The goal of this project was to showcase the valuable skills and lessons I have learned completing my certification for Full-Stack development. Combining my design experience with the suite of services offered by Google's Firebase platform, I was able to create a fully functional database to manage users and their credentials within this project.",
        involvement:        [
                                "Full website design and development", 
                                "Website built in React.js and hosted on Render", 
                            ],
        showreel:           "3qWsVV8fZkA"
    },

  ]
  export default sites;