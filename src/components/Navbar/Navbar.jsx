import React, { useRef } from "react";
import "./Navbar.css";
import NavLink from "../NavLink/NavLink";
import ScrambleLogo from "../ScrambleLogo/ScrambleLogo";
import Logo from "../Logo/Logo.jsx";
import gsap from "gsap";

const Navbar = () => {
  return (
    <div className="navbar-main">
      <div className="navbar-container">
        <div className="logo-main">
          <div className="logo">
            <div className="logo-name">
              <span>Rushikesh</span>
            </div>
          </div>
        </div>
        <div className="navlink-main">
          <span>
            <NavLink text="Work" />
          </span>
          <span>
            <NavLink text="About" />
          </span>
          <span>
            <NavLink text="Contact" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
