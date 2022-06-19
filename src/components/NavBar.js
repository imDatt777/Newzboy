import React from "react";
import '../styles/navbar.scss';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="main-nav-container">
      <div className="nav-title-container">
        <Link className="title-text" to="/">
          NewzBoy
        </Link>
      </div>
      <div className="links-container">
        <ul className="list">
          <li className="link-item">
            <Link className="link-text" to="/">
              Home
            </Link>
          </li>
          <li className="link-item">
            <Link className="link-text" to="/business">
              Business
            </Link>
          </li>
          <li className="link-item">
            <Link className="link-text" to="/entertainment">
              Entertainment
            </Link>
          </li>
          <li className="link-item">
            <Link className="link-text" to="/health">
              Health
            </Link>
          </li>
          <li className="link-item">
            <Link className="link-text" to="/science">
              Science
            </Link>
          </li>
          <li className="link-item">
            <Link className="link-text" to="/sports">
              Sports
            </Link>
          </li>
          <li className="link-item">
            <Link className="link-text" to="/technology">
              Technology
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
