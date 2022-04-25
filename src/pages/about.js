import React from "react";
import images from "../components/images";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faBowlFood} from '@fortawesome/free-solid-svg-icons';
import "../styles/about.css";

function about() {
  return (
    <>
      <div className="about-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Discover Fresh Tasty Meals</p>
        </div>
      </div>

      <div className="about-values">
        <div className="container">
          <div className="about-values__content">
            <div className="about-values__title">
              <h2>Story</h2>
              <p>Our</p>
            </div>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi.{" "}
            </p>
            <img
              className="about-values__dish about-imgs"
              src={images[9]}
              alt=""
            />
          </div>
          <div className="about-values-images">
            <div>
              <img className="about-imgs" src={images[5]} alt="" />
            </div>
            <div>
              <img className="about-imgs" src={images[8]} alt="" />
            </div>
            <div>
              <img className="about-imgs" src={images[8]} alt="" />
            </div>
            <div>
              <img className="about-imgs" src={images[5]} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="online-res">
        <div className="container">
          <button className="about-btn">Make an Online Reservation</button>
          <p>or call us +65.4566743</p>
        </div>
      </div>

      <div className="about-values">
        <div className="container">
          <div className="about-values-images">
            <div>
              <img className="about-imgs" src={images[10]} alt="" />
            </div>
            <div>
              <img className="about-imgs" src={images[11]} alt="" />
            </div>
          </div>

          <div className="about-values__content">
            <div className="about-values__title">
              <h2>Value</h2>
              <p>Our</p>
            </div>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi.{" "}
            </p>
            <img
              className="about-values__dish about-imgs"
              src={images[12]}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default about;
