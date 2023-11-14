import { useState } from "react";

export default function Home(props) {
    const [backgroundColor, setBackgroundColor] = useState(props.offBlack);
    function exitHandler() {
        setBackgroundColor(props.offBlack)
    }
    const sites = [
        {
          color: "#fc5130",
          link: "https://ejuneau.github.io/spyglass/",
          title: "Spyglass Eyewear"
        },
        {
          color: "#242f40",
          link: "https://ejuneau.github.io/soupgang/",
          title: "OpenKitchen"
        }
      ]
      return (
        <>
        {/* <div className="App" style={{"backgroundColor": props.backgroundColor}}> */}
        <div className="App">
            <ul className="Portfolio" id="Portfolio">
              {
                sites.map(site => {
                return <li className="list-item" key={site.title}><a onMouseEnter={() => setBackgroundColor(site.color)} onMouseLeave={()=> exitHandler()} href={site.link} target="_blank" rel="noreferrer">{site.title}</a></li>
                //    return <li className="list-item" key={site.title}><a href={site.link} target="_blank" rel="noreferrer">{site.title}</a></li>

                })
                
              }
            </ul>
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