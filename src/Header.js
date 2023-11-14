import './Header.css';
import Hamburger from './Hamburger';
import { useState } from 'react';
function Header(props) {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }
  return (
    <header className="Header" style={{"backgroundColor": props.backgroundColor}}>
      <h1><a href="./">EJ</a></h1>
      <nav>
        <li><a href="/"><p>Portfolio</p></a></li>
        <li onClick={props.openModal} id="about"><p>About</p></li>
        <li><p>Contact</p></li>
      </nav>
      <div className="hamburger" onClick={toggleHamburger}>
        <Hamburger hamburgerOpen={hamburgerOpen}/>
      </div>
    </header>
  );
}

export default Header;
