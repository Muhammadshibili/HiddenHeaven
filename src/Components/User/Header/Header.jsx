import React from "react";
import "./Header.css";
import {Link} from "react-router-dom"

export const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <h1>HiddenHeaven</h1>
          </Link>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav ">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/" id="home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Services">
                  Service's
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contribute">
                  Contribute
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">
                  Aboute Us
                </Link>
              </li>
              <li className="nav-item">
                <span className="button">
                  <Link className="nave-button" to="/Login">
                    GET STARTED
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
