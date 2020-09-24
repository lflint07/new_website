import React from "react";
// import {Navbar, Nav} from "react-bootstrap";

function Menu() {
  return (
    <nav id="menu">
      <div className="navbar">
        <div className="nav-container">
          <ul>
            <li className="nav-item">
              <a href="#about">About</a>
            </li>
            <li className="nav-item">
              <a href="#experience">Experience</a>
            </li>
            <li className="nav-item">
              <a href="#work">Projects</a>
            </li>
            <li className="nav-item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
