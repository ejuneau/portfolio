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
        <li><NavLink   className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending" : "",
            isActive ? "active-link" : "",
            isTransitioning ? "transitioning" : "",
          ].join(" ")}         to="/"          onClick={toggleHamburger}>Home</NavLink></li>
        <li><NavLink className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending" : "",
            isActive ? "active-link" : "",
            isTransitioning ? "transitioning" : "",
          ].join(" ")}   to="/projects"  onClick={toggleHamburger}>All Projects</NavLink></li>
        <li><NavLink className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending" : "",
            isActive ? "active-link" : "",
            isTransitioning ? "transitioning" : "",
          ].join(" ")}      to="/about"     onClick={toggleHamburger}>About</NavLink></li>
        <li><NavLink className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending" : "",
            isActive ? "active-link" : "",
            isTransitioning ? "transitioning" : "",
          ].join(" ")}    to="/contact"   onClick={toggleHamburger}>Contact</NavLink></li>
      </nav>
      <div className="hamburger" onClick={toggleHamburger}>
        <Hamburger hamburgerOpen={hamburgerOpen} />
      </div>
    </header>
  );
}

export default Header;
