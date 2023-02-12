import { NavLink } from "react-router-dom";

function Home(props) {
  return (
    <main className="about">
      <h4>Hi, my name is</h4>
      <h1 className="name">Ozgun EFE</h1>
      <h1>I build things for the web.</h1>
      <p>
        I’m a Front-End developer specializing in building exceptional digital
        experiences.
      </p>
      <div className="navButton">
        <NavLink to="/work" className="button">
          Check out my works!
        </NavLink>
      </div>
    </main>
  );
}

export default Home;
