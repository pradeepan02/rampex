import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = (props) => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <p className="full">Full Stack</p>
            <li >
              <Link className="link" to="/">Home</Link>
            </li>
            <li >
              <Link to="/about" className="link">About</Link>
            </li>
            <li >
              <Link to="/gallery" className="link">Gallery</Link>
            </li>
            <li >
              <Link to="/contact" className="link">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
