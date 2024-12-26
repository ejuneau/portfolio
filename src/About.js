import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div className="AboutContainer">
      <h1 className="About" style={{marginTop: '5rem'}}>About me</h1>
      <p className="About">My name is Eve Juneau (they/she), a developer based in Montreal, 
      Canada. Specializing in web design via React and game development in Godot, I'm passionate about creating user experiences 
      that stick with people.</p>
      <p className="About">With over 5 years of experience both in freelance as well as contract web
       development, I offer services ranging from consultation, to design, to fully building and
       hosting your ideas and bringing them to life.</p>
       <p className="About">If you'd like to get in touch regarding any matter feel free to reach out by way of the <Link to="/Contact" >Contact</Link> page of this website. </p>
       <p className="About">Cheers!</p>
    </div>
  );
}

export default About;
