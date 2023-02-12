import ProfilePic from "./img/profile-photo.png";

function About() {
  return (
    <div className="aboutPage">
      <div className="aboutMe">
        <h1>About Me</h1>
        <p>
          Hello! My name is Ozgun and I enjoy creating things that live on the
          internet. My interest in web development started back in 2018 when I
          decided to try to set up my photography portfolio website.
        </p>
        <p>
          After working as a project manager, I realized what interested me was
          web development and I started working to change my career. Now I'm
          working as a Frond-End developer.
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
        <img src={ProfilePic} alt="Image" width="320px" height="320px" />
      </div>
    </div>
    
  );
}

export default About;
