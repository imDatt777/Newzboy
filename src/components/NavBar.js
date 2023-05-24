import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [visible, setVisible] = useState(false);

  const toggleSidebar = () => {
    setVisible(!visible);
  };

  return (
    <div className="main-nav-container">
      <div className="nav-title-container" onClick={toggleSidebar}>
        <h1 className={"title-text"}>NewzBoy</h1>
      </div>
      <div className={`links-container ${visible ? "none" : ""}`}>
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
