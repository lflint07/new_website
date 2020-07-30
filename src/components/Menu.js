import React from "react";
// import {Navbar, Nav} from "react-bootstrap";

function Menu() {
  return (
    <div>
      <nav id="menu">
        <div className="navbar">
          <ul>
            <li className="nav-item">
              <a href="#about">About</a>
            </li>
            <li className="nav-item">
              <a href="#experience">Experience</a>
            </li>
            <li className="nav-item">
              <a href="#work">Work</a>
            </li>
            <li className="nav-item">
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
