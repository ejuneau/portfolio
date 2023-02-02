import './App.css';
import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const offBlack = "#0F0F0F";
const jammmingColor = '#010c3f';
const artemisColor = '#415a74';
const ravenousColor = '#cca353';


function App() {


  const [backgroundColor, setBackgroundColor] = useState(offBlack);
 
  useEffect(() => {
    console.log("effect");
  }, [backgroundColor]);
 
  const artemisHandler = () => {
    setBackgroundColor(artemisColor);
  }
  const jammmingHandler = () => {
    setBackgroundColor(jammmingColor);
  }
  const ravenousHandler = () => {
    setBackgroundColor(ravenousColor);
  }
  const exitHandler = () => {
    setBackgroundColor(offBlack);
  }



  return (
    <>
    <Header backgroundColor={backgroundColor}/>
    <div className="App" style={{"backgroundColor": backgroundColor}}>
        <ul className="Portfolio">
          <li onMouseEnter={artemisHandler} onMouseLeave={exitHandler}><a href="https://ejuneau.github.io/CA_Artemis/" target="_blank">Artemis for Reddit</a></li>
          <li onMouseEnter={jammmingHandler} onMouseLeave={exitHandler}><a href="https://ejuneau.github.io/CA_Jammming/" target="_blank">Jammming for Spotify</a></li>
          <li onMouseEnter={ravenousHandler} onMouseLeave={exitHandler}><a href="https://ejuneau.github.io/CA_Ravenous/" target="_blank">Ravenous for Yelp</a></li>
        </ul>
    </div>
    <Footer backgroundColor={backgroundColor}/>
    </>
  );
}

export default App;
