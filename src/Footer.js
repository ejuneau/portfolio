import './Footer.css';

function Footer(props) {
  return (
    <footer className="Footer" style={{"backgroundColor": props.backgroundColor}}>
      <p className="disclaimer">Copyright 2023 EJ</p>
    </footer>
  );
}

export default Footer;
