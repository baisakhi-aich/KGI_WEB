import React, { useState } from "react";
import logo from "../../assets/logo2.png";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="main-container">
      {/* Logo */}
      <div className="leftmenu">
        <img src={logo} alt="KGI Logo" />
      </div>

      {/* Menu Links */}
      <div className={`rightmenu ${menuOpen ? "active" : "inactive"}`}>
        <Link
          to="home"
          className="nav-link"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="groups"
          className="nav-link"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={() => setMenuOpen(false)}
        >
          Our Team
        </Link>
        <Link
          to="team"
          className="nav-link"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={() => setMenuOpen(false)}
        >
          Our Institutions
        </Link>
        <Link
          to="gallery"
          className="nav-link"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={() => setMenuOpen(false)}
        >
          Gallery
        </Link>
        <Link
          to="blog"
          className="nav-link"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={() => setMenuOpen(false)}
        >
          Blog
        </Link>
        <Link
          to="contact"
          className="nav-link contact-button"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={() => setMenuOpen(false)}
        >
          Contact Us
        </Link>
      </div>

      {/* Hamburger Menu */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
};

export default Navbar;
