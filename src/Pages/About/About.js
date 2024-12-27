import { Link } from 'react-router-dom';
import AlbumShowcase from './AlbumShowcase';
import './About.css';

function About() {
  return (
    <div className="AboutContainer">
      <h1 className="About">About me</h1>
      <p className="About">My name is Eve Juneau (they/she), a developer based in Montreal, 
      Canada. Specializing in <b>web design</b> via React and <b>game development</b> in Godot, I'm passionate about creating user experiences 
      that stick with people.</p>
      <p className="About">With over 6 years of experience both in freelance as well as contract web
       development, I offer services ranging from consultation, to design, to fully building and
       hosting your ideas and bringing them to life.</p>
       <p className="About">To get in touch regarding any of the above, feel free to reach me via the <Link to="/Contact" >Contact</Link> page. </p>
       <p className="About">Here's an album I'm listening to these days:</p>
       <AlbumShowcase />
    </div>
  );
}

export default About;
