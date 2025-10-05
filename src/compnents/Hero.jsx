import React, { useState, useEffect, useRef } from "react";
import "../Styles/Hero.css";
import { editions } from "../data/Editions";

function Hero({ edition, setEdition }) {
  const [greenLoaded, setGreenLoaded] = useState(false);
  const greenRef = useRef(null);

  const allEditions = [
    editions.green,
    editions.white,
    editions.mango,
    editions.pink,
  ];

  // Track when green model finishes loading
  useEffect(() => {
    if (!greenRef.current) return;
    const handleLoad = () => setGreenLoaded(true);
    greenRef.current.addEventListener("load", handleLoad);
    return () => greenRef.current?.removeEventListener("load", handleLoad);
  }, []);

  return (
    <section className="hero-section" id="hero-section">
      {/* Text Section */}
      <div className="hero-content">
        <h1
          className="glitch"
          data-glitch="Unleash the Monster"
          style={{ color: edition.headingColor }}
        >
          Unleash the Monster
        </h1>
        <p style={{ color: edition.textColor }}>{edition.description}</p>

        {/* Edition Selector */}
        <div className="edition-buttons">
          {allEditions.map((ed) => (
            <button
              key={ed.model}
              style={{ backgroundColor: ed.buttonColor }}
              onClick={() => setEdition(ed)}
              className={edition.model === ed.model ? "active" : ""}
            />
          ))}
        </div>
      </div>

      {/* 3D Models */}
      <div className="hero-model">
        {!greenLoaded && (
          <div className="spinner-container">
            <div className="spinner">
              <div className="spinner">
                <div className="spinner"></div>
              </div>
            </div>
          </div>
        )}

        {allEditions.map((ed) => (
          <model-viewer
            key={ed.model}
            ref={ed.model === editions.green.model ? greenRef : null}
            src={ed.model}
            alt="Monster Energy Drink"
            auto-rotate
            camera-controls
            interaction-prompt="none"
            preload={ed.model === editions.green.model}
            style={{
              opacity: edition.model === ed.model && greenLoaded ? 1 : 0,
              pointerEvents: edition.model === ed.model ? "auto" : "none",
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
