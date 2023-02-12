import {NavLink} from 'react-router-dom';

function Header() {
    
    const handleDownload = () => {
      window.open("https://drive.google.com/file/d/1YeNKGB5F6uNwKWP2i-C9fJ29OmQSsmXy/view?usp=sharing", "_blank");
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
  