import React from "react";
import img1 from "../images/hero.png";
import img2 from "../images/scroll.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="textContainer">
        <h2>Datti Vamsi</h2>
        <h1>Web Developer and UI Designer</h1>
        <div className="buttons">
          <button>See the latest Works</button>
          <button>Contact Us</button>
        </div>
        <img src={img2} alt="" />
      </div>
      <div className="imageContainer">
        <img src={img1} alt="" />
      </div>
    </div>
  );
};

export default Hero;
