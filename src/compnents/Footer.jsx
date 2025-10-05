import React from "react";
import "../Styles/Footer.css";

function Footer({ edition }) {
  return (
    <footer
      className="footer"
      style={{ backgroundColor: edition.bgColor, color: edition.textColor }}
    >
      <p>© 2025 Monster Energy. All rights reserved.</p>

      <div className="footer-links">
        <span className="footer-link">About</span>
        <span className="footer-link">Products</span>
        <span className="footer-link">Contact</span>
        <span className="footer-link">Privacy Policy</span>
      </div>
    </footer>
  );
}

export default Footer;
