import React, { useState } from "react";
import "./Navbar.css";

function Navbar2() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/pielogo.png" alt="Logo" />
      </div>
      <div className={`navbar-center ${showMenu ? "active" : ""}`}>
        <ul className="navbar-links">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/about">ABOUT US</a>
          </li>
          <li>
            <a href="/events">EVENTS</a>
          </li>
          <li>
            <a href="/execom">EXECOM</a>
          </li>
          <li>
            <a href="/awards">AWARDS</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <button className="join-us-button">Contact</button>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
}

export default Navbar2;
