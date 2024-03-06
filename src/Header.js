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

  return (
    <header>
        <h1><NavLink to="/" ><Logo /></NavLink></h1>
      <nav>
        <li><NavLink  draggable="false" className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending" : "",
            isActive ? "active-link" : "",
            isTransitioning ? "transitioning" : "",
          ].join(" ")}         to="/"          onClick={toggleHamburger}>Home</NavLink></li>
        <li><NavLink draggable="false" className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending" : "",
            isActive ? "active-link" : "",
            isTransitioning ? "transitioning" : "",
          ].join(" ")}   to="/projects"  onClick={toggleHamburger}>All Projects</NavLink></li>
        <li><NavLink draggable="false" className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending" : "",
            isActive ? "active-link" : "",
            isTransitioning ? "transitioning" : "",
          ].join(" ")}      to="/about"     onClick={toggleHamburger}>About</NavLink></li>
        <li><NavLink draggable="false" className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending" : "",
            isActive ? "active-link" : "",
            isTransitioning ? "transitioning" : "",
          ].join(" ")}    to="/contact"   onClick={toggleHamburger}>Contact</NavLink></li>
      </nav>

        <Hamburger draggable="false" hamburgerOpen={hamburgerOpen} toggleHamburger={toggleHamburger}/>

    </header>
  );
}

export default Header;
