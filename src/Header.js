import './Header.css';
import Hamburger from './Hamburger';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }
  console.log(window.location.pathname);
  return (
    // <header className="Header" style={{"backgroundColor": props.backgroundColor}}>
    <header>
      <h1><Link to="/">EJ</Link></h1>
      <nav>
        <li><NavLink className={window.location.pathname === "/" && "active-link" } to="/" onClick={toggleHamburger}>Home</NavLink></li>
        <li><NavLink className={window.location.pathname === "/portfolio" && "active-link"} to="/portfolio" onClick={toggleHamburger}>Portfolio</NavLink></li>
        <li><NavLink className={window.location.pathname === "/about" && "active-link"} to="/about" onClick={toggleHamburger}>About</NavLink></li>
        <li><NavLink className={window.location.pathname === "/contact" && "active-link"} to="/contact" onClick={toggleHamburger}>Contact</NavLink></li>
      </nav>
      <div className="hamburger" onClick={toggleHamburger}>
        <Hamburger hamburgerOpen={hamburgerOpen} />
      </div>
    </header>
  );
}

export default Header;
