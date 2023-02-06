function NavBar(props) {
    
    const handleDownload = () => {
      window.open("https://drive.google.com/file/d/1YeNKGB5F6uNwKWP2i-C9fJ29OmQSsmXy/view?usp=sharing", "_blank");
    };
  
    return (
      <nav>
        <div className="navbar">
          <button className="navitem" onClick={() => props.setPage('main')}>Home</button>
          <button className="navitem" onClick={() => props.setPage('about')}>About</button>
          <button className="navitem" onClick={() => props.setPage('work')}>Work</button>
          <button className="navitem" onClick={() => props.setPage('contact')}>Contact</button>
        </div>
        <div className="resume">
          <button onClick={handleDownload}>Resume</button>
        </div>
      </nav>
    );
  }
  
  export default NavBar;
  