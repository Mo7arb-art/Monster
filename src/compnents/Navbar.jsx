import React from "react";
import "../Styles/Navbar.css";

function Navbar({ edition }) {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div
        className="logo"
        style={{ backgroundImage: `url("/MonsterLogo.png")` }}
        aria-label="Monster Energy Logo"
      ></div>

      {/* Links */}
      <ul className="nav-links">
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#products">Products</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
