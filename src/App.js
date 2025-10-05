import React, { useState } from "react";
import "./styles.css";
import Hero from "./compnents/Hero";
import Footer from "./compnents/Footer";
import Navbar from "./compnents/Navbar";
import Banner from "./compnents/Banner";
import Features from "./compnents/Features";
import { editions } from "./data/Editions";

export default function App() {
  const [currentEdition, setCurrentEdition] = useState(editions.green);

  return (
    <div
      className="App relative"
      style={{
        backgroundColor: currentEdition.bg,
        color: currentEdition.textColor,
        minHeight: "100vh",
        transition: "background 0.5s ease",
        overflow: "hidden",
      }}
    >
      <Banner />
      <Hero edition={currentEdition} setEdition={setCurrentEdition} />
      <Features />
      <Footer edition={currentEdition} />
    </div>
  );
}
