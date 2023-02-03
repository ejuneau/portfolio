import './Header.css';

function Header(props) {
  return (
    <header className="Header" style={{"backgroundColor": props.backgroundColor}}>
      <h1><a href="./">EJ</a></h1>
      <nav>
        <li><a href="/">Portfolio</a></li>
        <li onClick={props.openModal} id="about">About</li>
      </nav>
    </header>
  );
}

export default Header;
