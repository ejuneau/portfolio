import './Header.css';
import Hamburger from './Hamburger';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    window.innerWidth < 767 && setHamburgerOpen(!hamburgerOpen);
  }
  const closeHamburger = () => {
    window.innerWidth < 767 && setHamburgerOpen(false)
  }

  return (
    <header>
        <h1><NavLink to="/" ><Logo /></NavLink></h1>
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
      </nav>

        <Hamburger draggable="false" hamburgerOpen={hamburgerOpen} toggleHamburger={toggleHamburger}/>

    </header>
  );
}

export default Header;
