import "./App.css";
import NavBar from "./components/nav";
import Main from "./components/main";
import { useState } from "react";
import About from "./pages/about";
import Work from "./pages/work";
import Contact from "./pages/contact";

function App() {
  const [page, setPage] = useState("main");

  const project = () => {
    switch (page) {
      case "main":
        return <Main setPage={setPage} />;
      case "about":
        return <About />;
      case "work":
        return <Work setPage={setPage} />;
      case "contact":
        return <Contact />;
      default:
        return <Main setPage={setPage} />;
    }
  };

  return (
    <div>
      <nav>
        <NavBar setPage={setPage} />
      </nav>
      <main>{project()}</main>
    </div>
  );
}

export default App;

// {page === 'about' ? <About /> : <Main />}
