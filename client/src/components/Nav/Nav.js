import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Nav = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      Home
    </Link>
    <div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            to="/"
            className={
              window.location.pathname === "/" || window.location.pathname === "/home"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/dashboard"
            className={
              window.location.pathname === "/dashboard"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/scheduler"
            className={
              window.location.pathname === "/scheduler"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Calendar
          </Link>
        </li>

         <li className="nav-item">
          <Link
            to="/register"
            className={
              window.location.pathname === "/register"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Register
          </Link>
        </li>

      </ul>
    </div>
  </nav>
);

export default Nav;
