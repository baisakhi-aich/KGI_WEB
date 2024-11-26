import React, { useState } from "react";
import logo from "../../assets/logo2.png";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="main-container">
      <div className="leftmenu">
        <img src={logo} alt="kgi logo" />
      </div>
      <div className={`rightmenu ${menuOpen ? "active" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#groups" onClick={() => setMenuOpen(false)}>Our institutes</a>
        <a href="#team" onClick={() => setMenuOpen(false)}>Our Team</a>
        <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
        <a href="#blog" onClick={() => setMenuOpen(false)}>Blog</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
};

export default Navbar;
