import camelquestFull from './images/desktop/full/camelquest.png';
import camelquestPh   from './images/desktop/ph/camelquest.png';

import dtefiieFull    from './images/desktop/full/dtefiie.png';
import dtefiiePh      from './images/desktop/ph/dtefiie.png';

import afterloveFull  from './images/desktop/full/afterlove.png';
import afterlovePh    from './images/desktop/ph/afterlove.png';


const games = [
  {
      color:              "#b55a45",
      key:                "camelquest",
      link:               "https://ejuneau.itch.io/camel-quest-update",
      title:              "Camel Quest Update",
      description:        "Resource-based dating sim.",
       desktopImageFull:   camelquestFull,
       desktopImagePh:     camelquestPh, 
      longDescription:    "Camel Quest: Journey of the Dry Hump is a resource-based dating sim that was made by myself, along with Maria Beck, Maxine Sophia Wolff, Pelo Brisson-Tsavousis, and Jake Kent. The project was submitted as part of the Desert Game Jam held on itch.io, and took the team two days to complete. However, due to time constraints the game was missing some polish, which I have released in this separate release.",
      involvement:        [
                              "Music", 
                              "Settings and UI",
                              "General bug fixes" 
                          ]
  },
  {
    color:              "#da576b",
    key:                "afterloveep",
    link:               "https://www.fellowtraveller.games/afterlove-ep",
    title:              "Afterlove EP",
    description:        "A slice of life adventure set in urban Jakarta",
     desktopImageFull:   afterloveFull,
     desktopImagePh:     afterlovePh, 
    longDescription:    "Taking place in the vibrant city of Jakarta, capital of Indonesia, Afterlove EP is a blend of visual novel, narrative adventure and rhythm game elements from the creator of Coffee Talk and What Comes After. Step into the shoes of Rama, a young musician struggling to move on with life after the death of their girlfriend, Cinta. Whilst his close friends and bandmates are all determined to help him move on, Rama has been stuck for more than a year. He’s neglecting his music, his mental health and his relationships. Making things harder, he’s hearing Cinta’s voice inside his head, unsure if she is a spirit or part of his imagination. (Source: fellowtraveller.games)",
    involvement:        [
                            "Internal production",
                            "Additional writing"
                        ],
    showreel: "V6oU723gfIk"
},
  {
      color:              "#224722",
      key:                "dtefiie",
      link:               "https://ejuneau.itch.io/dtefiie",
      title:              "Does the Entity Fit in Its Enclosure",
      description:        "Proof-of-concept 3D Game.",
       desktopImageFull:   dtefiieFull,
       desktopImagePh:     dtefiiePh, 
      longDescription:    "Inspired by a very vivid (and eerie) dream I had, Does the Entity Fit in Its Enclosure is my first attempt at a game fully developed by myself. I had never developed a game before creating this game, and had never attempted anything like it. The dream was so intense that I felt compelled to create a game that matched its surreal weird energy.",
      involvement:        [
                              "Full game development", 
                          ],
      showreel: "MTTmvqaJAAo"
  },
]

export default games;