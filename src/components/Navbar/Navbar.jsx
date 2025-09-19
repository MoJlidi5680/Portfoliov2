import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import "./Navbar.css";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (id) => {
    setActiveSection(id);
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="logo">Portfolio</div>

        <ul className="menu">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`menu-item ${activeSection === item.id ? "active" : ""}`}
              onClick={() => handleMenuItemClick(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>

        <div className="social-icons">
          <a href="https://github.com/MoJlidi5680" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/fourat-toumi-7679232a7/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Bouton toggle mode clair / nuit */}
        <div
          className="mode-toggle"
          onClick={() => setDarkMode(!darkMode)}
          title={darkMode ? "Passer en mode clair" : "Passer en mode nuit"}
        >
          {darkMode ? (
            <MdLightMode size={28} color="#facc15" />
          ) : (
            <MdDarkMode size={28} color="white" />
          )}
        </div>

        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </div>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          <ul>
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`mobile-menu-item ${activeSection === item.id ? "active" : ""}`}
                onClick={() => handleMenuItemClick(item.id)}
              >
                {item.label}
              </li>
            ))}
            <div className="mobile-social-icons">
              <a href="https://github.com/MoJlidi5680" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/mohamed-jlidi-934979265/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
