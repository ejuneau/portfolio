import './About.css';

function About(props) {
  return (
    <div className="AboutContainer">
      <p className="About">My name is Eve Juneau (they/she), a UI and UX designer based in Montreal, Canada. Specializing in web design via React, I'm passionate about creating user experiences that stick with people.</p>
      <p className="CloseModal" onClick={props.closeModal}>close</p>
    </div>
  );
}

export default About;
