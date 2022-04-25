import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  MdHome,
  MdCommentBank,
  MdShoppingCart,
  MdContactPage,
} from "react-icons/md";
import NavBrand from "../../assets/navbrand.png";
import "./Navbar.css";

function Navbar() {
  const [IsOpen, setIsOpen] = useState(false);
  const [nav, setnav] = useState(false);
  const addShadow = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    } else {
      setnav(false);
    }
  };
  window.addEventListener("scroll", addShadow);
  return (
    <div>
      <nav className={nav ? "shadowed" : null}>
        <div className="nav-logo">
          <img src={NavBrand} alt="logo" />
        </div>
        <ul>
          <li>
            <NavLink className="link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/products">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink className="link active-link" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
        <button className="menu" onClick={() => setIsOpen(!IsOpen)}>
          {IsOpen ? (
            <div className="close">
              <span className="close-icon close-icon1" />
              <span className="close-icon close-icon2" />
            </div>
          ) : (
            <div className="menubar">
              <span className="menu-open-icon first-bar" />
              <span className="menu-open-icon second-bar" />
              <span className="menu-open-icon third-bar" />
            </div>
          )}
        </button>
      </nav>
      {IsOpen && (
        <div className="mobile-navigation" onClick={() => setIsOpen(!IsOpen)}>
          <div className="links">
            <NavLink className="link" to="/">
              <MdHome />
            </NavLink>

            <NavLink className="link" to="/about">
              <MdCommentBank />
            </NavLink>

            <NavLink className="link" to="/products">
              <MdShoppingCart />
            </NavLink>

            <NavLink className="link active-link" to="/contact">
              <MdContactPage />
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
