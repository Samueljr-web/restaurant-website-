import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav>
            <label>Food City</label>
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
                    <NavLink className="link" to="/contact">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
