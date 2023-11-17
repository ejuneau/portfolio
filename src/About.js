import './About.css';

function About() {
  return (
    <div className="AboutContainer">
      <h1 className="About" style={{marginTop: '5rem'}}>About</h1>
      <p className="About">My name is Eve Juneau (they/she), a UI and UX designer based in Montreal, 
      Canada. Specializing in web design via React.js, I'm passionate about creating user experiences 
      that stick with people.</p>
      <p className="About">With over 4 years of experience both in freelance as well as company web
       development, I offer services ranging from consultation, to design, to fully building and
       hosting your ideas and bringing them to life.</p>
       <p className="About">If you'd like to get in touch feel free to reach out by way of the Contact 
       page of this website. </p>
       <p className="About">Cheers!</p>
      <p className="About"> </p>
      <p className="About">Follow me on <a href="https://linkedin.com/in/e-juneau/" rel="noreferrer" target="_blank">LinkedIn</a></p>
    </div>
  );
}

export default About;
