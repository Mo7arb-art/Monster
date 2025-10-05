import React from "react";
import "../Styles/Banner.css";
import MonsterLogo from "../Assets/MonsterLogo.png"; // ✅ import from src/Assets

function Banner() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="banner-section">
      {/* Top Navigation inside Banner */}
      <div className="banner-nav">
        <div
          className="logo"
          style={{ backgroundImage: `url(${MonsterLogo})` }} // ✅ use imported variable
          aria-label="Monster Energy Logo"
        ></div>

        <ul className="nav-links">
          <li>
            <button onClick={() => scrollToSection("home")}>Home</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("hero-section")}>
              Products
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("features")}>
              Features
            </button>
          </li>
        </ul>
      </div>

      {/* Banner Text */}
      <div className="banner-content">
        <p>
          Monster Energy hits harder than your morning alarm,
          <br /> firing up your focus, drive, and adrenaline in every sip!
        </p>
        <button
          className="Smbutton"
          onClick={() => scrollToSection("hero-section")}
        >
          See More
        </button>
      </div>
    </section>
  );
}

export default Banner;