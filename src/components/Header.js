import {NavLink} from 'react-router-dom';

function Header() {
    
    const handleDownload = () => {
      window.open("https://drive.google.com/file/d/10U95X6jfvmqfrV6EQbc8aORQ7JoMXfc1/view", "_blank");
    };
  
    return (
      <nav>
        <div className="navbar">
          <NavLink className="navitem" to="/home">Home</NavLink>
          <NavLink className="navitem" to="/about">About</NavLink>
          <NavLink className="navitem" to="/work">Works</NavLink>
          <NavLink className="navitem" to="/contact">Contact</NavLink>
        </div>
        <div className="resume">
          <button onClick={handleDownload}>Resume</button>
        </div>
      </nav>
    );
  }
  
  export default Header;
  
