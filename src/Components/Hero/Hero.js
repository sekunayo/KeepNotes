import React from "react";
import image from "../../images/image.png";

function Hero() {
  return (
    <div className="hero">
      <h1 className="hero-heading">
        Boost your productivity with just one tool
      </h1>
      <p className="text">
        Plan,Organize,Collaborate,on every platform,for free.
      </p>
      <div className="hero-button">
        <button className="background--button--style">Get Started</button>
      </div>
      <div className="hero-image">
        <img src={image} alt="hero__image"></img>
      </div>
    </div>
  );
}

export default Hero;
