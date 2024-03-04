import './Header.css';
import Hamburger from './Hamburger';
import { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    window.innerWidth < 767 && setHamburgerOpen(!hamburgerOpen);
  }
  const [pathname, setPathname] = useState("");
  useEffect(() =>{
    setPathname(window.location.pathname);
  },[pathname, window])
  return (
    <header>
        <h1><NavLink className={pathname === "/" } to="/" >EJ</NavLink></h1>
      <nav>
        <li><NavLink className={pathname === "/" && "active-link" } to="/" onClick={toggleHamburger}>Home</NavLink></li>
        <li><NavLink className={pathname === "/projects" && "active-link"} to="/projects" onClick={toggleHamburger}>All Projects</NavLink></li>
        <li><NavLink className={pathname === "/about" && "active-link"} to="/about" onClick={toggleHamburger}>About</NavLink></li>
        <li><NavLink className={pathname === "/contact" && "active-link"} to="/contact" onClick={toggleHamburger}>Contact</NavLink></li>
      </nav>
      <div className="hamburger" onClick={toggleHamburger}>
        <Hamburger hamburgerOpen={hamburgerOpen} />
      </div>
    </header>
  );
}

export default Header;
