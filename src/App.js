import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  // État global du mode sombre (true = nuit, false = clair)
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : true; // par défaut mode nuit
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    } else {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className="app-container">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
