import React from "react";
import "./landing.css";

const Landing = () => {
  return (
    <div className="landing">
      <div className="contain">
        <div className="bubble">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="bubble">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="bubble">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="bubble">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="bubble">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="container" data-aos="fade-up" data-aos-duration="1000">
        <h1>Live smarter </h1>
        <p>Enhance your lifestyle.</p>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Landing;
