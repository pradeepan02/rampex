import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { AuthContext } from "./AuthContext";

const NavBar = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div>
      <header>
        <nav>
          <ul>
            <p className="full">Full Stack</p>
            {isAuthenticated ? (
              <>
                <li>
                  <Link className="link" to="/home">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="link">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="link">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="link">
                    Contact
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link className="link" to="/">
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="link">
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
