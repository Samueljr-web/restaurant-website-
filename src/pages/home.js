import React from "react";
import Pizza from "../assets/pizza-with-tomatoes.png";
import Pizza2 from "../assets/pizza.png";
import Button from "../components/Button";
import "../styles/home.css";

const home = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-intro">
          <h2>
            Enjoy your <br /> dinner
          </h2>
          <p>
            lorem ipsum dolar sit amet lorem amet sit amet sit dolar concetua
            <br /> dolar concetua t sit dolar concetua t sit dolar concetua
          </p>
          <p id="p">
            t sit dolar concetua t sit dolar concetua t sit dolar concetua
          </p>
          <Button name="Contact Us" />
        </div>
        <div className="hero-image">
          <img src={Pizza} alt="hero" className="pizza1" />
        </div>
      </div>
    </div>
  );
};

export default home;
