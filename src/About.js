import './About.css';

function About(props) {
  return (
    <div className="AboutContainer">
      <p className="About">EJ is a UI and UX designer based in Montreal, Canada specializing in web design via React.</p>
      <p className="CloseModal" onClick={props.closeModal}>Close</p>
    </div>
  );
}

export default About;
