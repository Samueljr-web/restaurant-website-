import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
import NavBrand from "../../assets/navbrand.png";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top-part">
          <div className="row">
            <div className="brand-logo">
              <img src={NavBrand} alt="brand logo" />
            </div>
            <p>It Tastes better</p>
          </div>

          <div className="row">
            <h2>Services</h2>
            <ul>
              <Link to="#">Restaurant</Link>
              <Link to="#">Home Delivery</Link>
              <Link to="#">Event Catering</Link>
            </ul>
          </div>

          <div className="row">
            <h2>Quick Links</h2>
            <ul>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/products">Products</Link>
              <Link to="/contact">Contact</Link>
            </ul>
          </div>

          <div className="row">
            <h2>Reservations</h2>
            <ul>
              <Link to="/">Requestion An Invoice</Link>
              <Link to="/">Find A Reservation</Link>
              <Link to="/">Email Preferences</Link>
            </ul>
          </div>

          <div className="row">
            <h2>Policies</h2>
            <ul>
              <Link to="/">Privacy Policy</Link>
              <Link to="/">Refund Policy</Link>
              <Link to="/">Terms & Conditions</Link>
            </ul>
          </div>
        </div>

        <div className="lower-part">
          <div className="footer-socials">
            <div className="footer-social-links">
              <Link to="/">
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
            </div>
            <div className="footer-social-links">
              <Link to="/">
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
            </div>
            <div className="footer-social-links">
              <Link to="/">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </div>
            <div className="footer-social-links">
              <Link to="/">
                <FontAwesomeIcon icon={faPinterestP} />
              </Link>
            </div>
          </div>
          <small>©Copyright All rights reserved</small>
        </div>
      </div>
    </div>
  );
}

export default Footer;
