import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import text from "../images/text.png";
import mail from "../images/mail.png";
import phone from "../images/phone.png";
import pin from "../images/pin.png";

import "./styles.css";

export default function Layout() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link to="/">
          <img src={logo} width="40" height="40" alt="" />
          <img src={text} width="271" height="35" alt="" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/services">
                Arts & Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <input
            type="text"
            className="search"
            placeholder="Search..."
            value=""
          />
          <input type="button" className="search" value="Search" />
        </div>
      </div>

      <footer className="footer">
        <div className="footer-left">
          Contact Information: <br />
          <img src={mail} width="25" height="20" alt="" />{" "}
          eylul.ozis@bahcesehir.edu.tr |{" "}
          <img src={phone} width="25" height="20" alt="" /> +123456789
        </div>

        <div className="footer-right">
          <img src={pin} width="25" height="20" alt="" /> Beşiktaş/istanbul
          <img
            className="footer-logo"
            src={logo}
            width="40"
            height="40"
            alt=""
          />
        </div>
      </footer>
    </nav>
  );
}
