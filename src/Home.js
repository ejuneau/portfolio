import { useState } from "react";
import sites from "./sites";

export default function Home(props) {
    const [backgroundColor, setBackgroundColor] = useState(props.offBlack);
    function exitHandler() {
        setBackgroundColor(props.offBlack)
    }

      return (
        <>
        {/* <div className="App" style={{"backgroundColor": props.backgroundColor}}> */}
        <div className="App">
            <ul className="Portfolio" id="Portfolio">
              {
                sites.slice(0,3).map(site => {
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