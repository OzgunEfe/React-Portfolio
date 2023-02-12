import ProfilePic from "./img/profile-photo.png";

function About() {
  return (
    <div className="aboutPage">
      <div className="aboutMe">
        <h1>About Me</h1>
        <p>
          As a recent graduate of a front-end development Bootcamp, I bring a
          unique combination of mechanical engineering and tech skills to the
          table. I have honed my HTML, CSS, and JavaScript abilities, and have
          experience in creating dynamic websites.
        </p>
        <p>
          My project management background has taught me the importance of
          effective communication and collaboration. I am confident in my
          ability to approach problems from different angles and find creative
          solutions, with a focus on delivering quality results. I am eager to
          bring my expertise, passion for technology, and project management
          experience to a new role as a front-end developer.
        </p>
        <p>Here are a few technologies I’ve been working with recently:</p>
        <ul className="list">
          <li>React</li>
          <li>Bootstrap</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Node.js</li>
          <li>CSS</li>
        </ul>
      </div>
      <div className="profilePic">
        <img src={ProfilePic} alt="profileImg" width="320px" height="320px" />
      </div>
    </div>
  );
}

export default About;
