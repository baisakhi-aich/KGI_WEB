import React from "react";
import "./Footer.css"; // Ensure you create this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>Copyright ©2024 KGI, Odisha. All Rights Reserved.</p>
      </div>
      <div className="footer-right">
        <div className="icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="facebook"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="twitter"
          >
            <i className="bi bi-twitter"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="linkedin"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="youtube"
          >
            <i className="bi bi-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
