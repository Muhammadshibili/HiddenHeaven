import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <h1>HiddenHeaven</h1>
          </a>
          <button
            class="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNav ">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#" id="home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Service's
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contribute
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Aboute Us
                </a>
              </li>
              <li class="nav-item">
                <span class="button">
                  <a class="nave-button" href="">
                    GET STARTED
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

/*color: #FFF;

font-family: Resphekt;
font-size: 70px;
font-style: normal;
font-weight: 400;
line-height: normal;*/
