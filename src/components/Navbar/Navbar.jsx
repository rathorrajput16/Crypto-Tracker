import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import arrow_icon from "../../assets/arrow_icon.png";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>

      {/* Navigation Links */}
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/trending" className={({ isActive }) => isActive ? "active" : ""}>
            Trending
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
            About
          </NavLink>
        </li>
      </ul>

      {/* Right Section */}
      <div className="nav-right">
        <select>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>

        <Link to="/signup">
          <button
            type="button"
            onClick={() => alert("Sign up clicked")}
          >
            Sign up
            <img src={arrow_icon} alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
