import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header id="header">
      <div className="center">
        <div id="logo">
          <img
            src={require("../../assets/greydive-logo.png")}
            className="app-logo"
            alt="greyditipo"
          />
          <span id="brand">
            <strong>Reto</strong> Greydive
          </span>
        </div>
        <nav id="menu">
          <ul>
            <li>
              <a href="/">
                <Link to="/">Formulario</Link>
              </a>
            </li>
            <li>
              <a href="/informacion">
                <Link to="/informacion">Información</Link>
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
