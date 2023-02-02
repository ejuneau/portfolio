import './Header.css';

function Header(props) {
  return (
    <header className="Header" style={{"backgroundColor": props.backgroundColor}}>
      <h1><a href="./">EJ</a></h1>
      <nav>
        <li><a href="/">Portfolio</a></li>
        <li><a href="/">About</a></li>
      </nav>
    </header>
  );
}

export default Header;
