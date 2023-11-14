import './Header.css';
import Hamburger from './Hamburger';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Header(props) {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }
  return (
    // <header className="Header" style={{"backgroundColor": props.backgroundColor}}>
    <header>
      <h1><Link to="/">EJ</Link></h1>
      <nav>
        <li><Link to="/" onClick={toggleHamburger}>Home</Link></li>
        <li><Link to="/portfolio" onClick={toggleHamburger}>Portfolio</Link></li>
        <li><Link to="/About" onClick={toggleHamburger}>About</Link></li>
        <li><Link to="/Contact" onClick={toggleHamburger}>Contact</Link></li>
      </nav>
      <div className="hamburger" onClick={toggleHamburger}>
        <Hamburger hamburgerOpen={hamburgerOpen} />
      </div>
    </header>
  );
}

export default Header;
