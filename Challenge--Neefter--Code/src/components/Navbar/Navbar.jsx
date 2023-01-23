import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header id="header">
      <div className="center">
        <div id="logo">
          <img
            src={require("../../assets/neefter.png")}
            className="app-logo"
            alt="neefter"
          />
          <span id="brand">
            <strong>Neefter</strong>
          </span>
        </div>
        <nav id="menu">
          <ul>
            <li>
              <a href="/">
                Challenge <strong>Henry</strong>
              </a>
            </li>
          </ul>
        </nav>
        <div className="clearfix"></div>
      </div>
    </header>
  );
}

export default Navbar;
