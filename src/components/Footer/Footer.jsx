import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Liens rapides */}
        <div className="footer-section-block">
          <h3>Liens rapides</h3>
          <ul>
            <li><a href="#about" aria-label="About">About</a></li>
            <li><a href="#skills" aria-label="Skills">Skills</a></li>
            <li><a href="#experience" aria-label="Projects">Experience</a></li>
            <li><a href="#work" aria-label="Projects">Projects</a></li>
            <li><a href="#education" aria-label="Skills">Education</a></li>
            <li><a href="#contact" aria-label="Contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section-block">
          <h3>Contactez-nous</h3>
          <p>Email: <a href="mailto:mohamed.jlidi.5680@gmail.com">mohamed.jlidi.5680@gmail.com</a></p>
          <p>Téléphone: <a href="tel:+21650130813">+216 50 130 813</a></p>
          <p>Adresse: Gabes, Tunis</p>
        </div>

        <div className="footer-section-block">
          <h3>Suivez-nous</h3>
          <ul className="social-links">
            <li><a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a></li>
            <li><a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a></li>
            <li><a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a></li>
            <li><a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedinIn /></a></li>
            <li><a href="https://github.com" aria-label="GitHub"><FaGithub /></a></li>
          </ul>
        </div>

      </div>

      {/* Bas du footer */}
      <div className="footer-bottom">
        <p>© 2025 MyPortfolio By Mohamed Jlidi. Tous droits réservés. | <a href="#privacy-policy">Privacy Policy</a></p>
      </div>
    </footer>
  );
};

export default Footer;
