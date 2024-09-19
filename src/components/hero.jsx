import { memo } from "react";
import Home from "./home";
import Loginbutton from "./loginbutton";
import PropTypes from "prop-types";
import "./hero.css";

const Hero = memo(({ className = "" }) => {
  return (
    <section className={`hero ${className}`}>
      <img
        className="image-1-icon"
        loading="lazy"
        alt=""
        src="/image-1@2x.png"
      />
      <header className="frame-header">
        <div className="frame-child" />
        <a className="sanjivani">Sanjivani</a>
        <div className="navbar">
          <div className="navbar-links">
            <div className="navbar-buttons">
              <Home />
            </div>
            <div className="navbar-buttons1">
              <a className="about-us">About Us</a>
            </div>
            <div className="navbar-buttons2">
              <a className="languages">Languages</a>
            </div>
            <button className="navbar-buttons3">
              <Loginbutton />
              <a className="login">Login</a>
            </button>
            <button className="navbar-buttons4">
              <div className="navbar-buttons-item" />
              <a className="sign-up">Sign Up</a>
            </button>
          </div>
        </div>
        <img className="hero-divider-icon" alt="" src="/hero-divider@2x.png" />
      </header>
      <div className="image-2-parent">
        <div className="image-2" />
        <h1 className="video"></h1>
      </div>
    </section>
  );
});

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
