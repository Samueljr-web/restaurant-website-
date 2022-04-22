import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <label>Food City</label>
      <ul>
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="link" to="/products">
            Products
          </Link>
        </li>
        <li>
          <Link className="link active" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
