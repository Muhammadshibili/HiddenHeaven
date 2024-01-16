import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <div class="row">
          <div class="col">
            <img src="" class="logo" />
            <h1 id="brand1">HiddenHeaven</h1>
            <div class="social-icons">
              <i class="bi bi-instagram"></i>
              <i class="bi bi-facebook"></i>
              <i class="bi bi-twitter-x"></i>
            </div>
          </div>
          <div class="col1">
            <ul>
              <li>
                <a href="">hlep</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">Custommer Service</a>
              </li>
              <li>
                <a href="">How-to Guide</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
