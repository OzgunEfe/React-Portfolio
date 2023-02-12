import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./pages/about";
import Work from "./pages/work";
import Contact from "./pages/contact";

function App() {

  return (
    <div>
      <nav>
        <Header />
      </nav>
      <main>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

// {page === 'about' ? <About /> : <Main />}
