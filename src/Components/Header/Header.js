import React from "react";
import logo from "../../images/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        {/* <img src={logo} alt="logo"></img> */}
        <p>keep notes</p>
      </div>
      <nav className="header-nav">
        <ul className="header-nav-container">
          <li className="header-nav-container-links">About</li>
          <li className="header-nav-container-links">Blog</li>
          <li className="header-nav-container-links">
            <button className="border--button--style">Sign Up</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
