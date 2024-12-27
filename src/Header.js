import './Header.css';
import Hamburger from './Hamburger';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import Logo from './Logo';
function Header(props) {

  const {isDarkMode, toggleDarkMode} = props
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    window.innerWidth < 767 && setHamburgerOpen(!hamburgerOpen);
  }
  const closeHamburger = () => {
    window.innerWidth < 767 && setHamburgerOpen(false)
  }

  return (
   <header>
        <Link to="/" className="logo-container"><Logo /></Link>
      <nav>
        <li><NavLink  draggable="false" 
        className={({ isActive, isPending, isTransitioning }) => [isPending ? "pending" : "", isActive ? "active-link" : "", isTransitioning ? "transitioning" : "",].join(" ")}
        to="/"
        onClick={closeHamburger}>Home</NavLink></li>

        <li><NavLink draggable="false" 
        className={({ isActive, isPending, isTransitioning }) => [ isPending ? "pending" : "", isActive ? "active-link" : "", isTransitioning ? "transitioning" : "", ].join(" ")}
        to="/projects"  
        onClick={closeHamburger}>All Projects</NavLink></li>

        <li><NavLink draggable="false" 
        className={({ isActive, isPending, isTransitioning }) => [ isPending ? "pending" : "", isActive ? "active-link" : "", isTransitioning ? "transitioning" : "", ].join(" ")}
        to="/about"     
        onClick={closeHamburger}>About</NavLink></li>

        <li><NavLink draggable="false" 
        className={({ isActive, isPending, isTransitioning }) => [ isPending ? "pending" : "", isActive ? "active-link" : "", isTransitioning ? "transitioning" : "", ].join(" ")}
        to="/contact"
        onClick={closeHamburger}>Contact</NavLink></li>

        <li>
          { isDarkMode?
          <FontAwesomeIcon icon={icon({name: "sun"})} className="dark-mode-switch sun" onClick={toggleDarkMode}/>:
          <FontAwesomeIcon icon={icon({name: "moon"})} className="dark-mode-switch moon" onClick={toggleDarkMode} />}
        </li>
      </nav>

        <Hamburger draggable="false" hamburgerOpen={hamburgerOpen} toggleHamburger={toggleHamburger} />

    </header>
  );
}

export default Header;
