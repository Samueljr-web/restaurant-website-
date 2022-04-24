import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookF, faTwitter, faInstagram, faPinterestP} from '@fortawesome/free-brands-svg-icons';

import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top-part">

          <div className="row">
            <h2>Logo</h2>
            <p>Slogan Company</p>
          </div>
          
          <div className="row">
            <h2>Logo</h2>
            <ul>
              <li>Meal</li>
              <li>Meal</li>
              <li>Meal</li>
            </ul>
          </div>

          <div className="row">
            <h2>Logo</h2>
            <ul>
              <li>Meal</li>
              <li>Meal</li>
              <li>Meal</li>
            </ul>
          </div>

          <div className="row">
            <h2>Logo</h2>
            <ul>
              <li>Meal</li>
              <li>Meal</li>
              <li>Meal</li>
            </ul>
          </div>

          <div className="row">
            <h2>Logo</h2>
            <ul>
              <li>Meal</li>
              <li>Meal</li>
              <li>Meal</li>
            </ul>
          </div>
        </div>

        <div className="lower-part">
            <div className="footer-socials">
                <div><FontAwesomeIcon icon= {faFacebookF} /></div>
                <div><FontAwesomeIcon icon= {faTwitter} /></div>
                <div><FontAwesomeIcon icon= {faInstagram} /></div>
                <div><FontAwesomeIcon icon= {faPinterestP} /></div>
            </div>
            <small>©Copyright All rights reserved</small>
        </div>

      </div>
    </div>
  );
}

export default Footer;
