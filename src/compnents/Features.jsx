import React, { useEffect, useRef } from "react";
import "../Styles/Features.css";

const featuresData = [
  {
    title: "Energy Boost",
    desc: "Packed with caffeine and taurine to keep you powered up all day and night.",
    video: "/mp4/zenitsu.mp4",
  },
  {
    title: "Unique Flavors",
    desc: "Explore bold, refreshing tastes that stand out from ordinary energy drinks.",
    video: "/mp4/another.mp4",
  },
  {
    title: "Gamer-Friendly",
    desc: "Stay sharp, focused, and ready for every match with long-lasting energy.",
    video: "/mp4/gaming.mp4",
  },
];

function Features() {
  const featuresRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.2 }
    );

    featuresRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="features-section" id="features">
      {featuresData.map((item, i) => (
        <div
          key={i}
          className="feature"
          ref={(el) => (featuresRef.current[i] = el)}
        >
          <div className="feature-text">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
          <video
            className="feature-video"
            src={item.video}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      ))}
    </section>
  );
}

export default Features;
