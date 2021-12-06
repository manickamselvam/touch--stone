import React from "react";
import "./Hero.css";

const Hero = ({ videoSrc }) => {
  return (
    <div className="hero">
      <video className="hero__image" src={videoSrc} autoPlay loop muted />

      <h1 className="hero__title">We made event great.</h1>
    </div>
  );
};

export default Hero;
