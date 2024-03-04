import soupgangDesktopFull from './Assets/images/desktop/full/soupgangDesktopFull.png';
import soupgangDesktopPh from './Assets/images/desktop/ph/soupgangDesktopPh.png';
import soupgangMobileFull from './Assets/images/mobile/full/soupgangMobileFull.png';
import soupgangMobilePh from './Assets/images/mobile/ph/soupgangMobilePh.png';


import townsquareDesktopFull from './Assets/images/desktop/full/townsquareDesktopFull.png';
import townsquareDesktopPh from './Assets/images/desktop/ph/townsquareDesktopPh.png';
import townsquareMobileFull from './Assets/images/mobile/full/townsquareMobileFull.png';
import townsquareMobilePh from './Assets/images/mobile/ph/townsquareMobilePh.png';


import spyglassDesktopFull from './Assets/images/desktop/full/spyglassDesktopFull.png';
import spyglassDesktopPh from './Assets/images/desktop/ph/spyglassDesktopPh.png';
import spyglassMobileFull from './Assets/images/mobile/full/spyglassMobileFull.png';
import spyglassMobilePh from './Assets/images/mobile/ph/spyglassMobilePh.png';



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
                                "Outlined design danguage", 
                            ]
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
        longDescription:    "Spyglass Eyewear is a portfolio project designed by me. Everything about this project was done by myself, from from designing the layout to hosting the website and even to coordinating the photoshoots for the glasses models. The goal of this project was to design a theoretical webstore with a striking visual design that immediately grabs the client's attention - animations are flashy, colours are bright, everything about the site is meant to dazzle. The off-centre design proved to be a very fun challenge to achieve in CSS, and the final result speaks for itself. The design of this website is heavily inspired by Persona 5, a video game with a similar visual identity.",
        involvement:        [
                                "Full website design and development", 
                                "Website built in React.js and hosted on Render", 
                            ]
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
                            ]
    },

  ]
  export default sites;