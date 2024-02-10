import React from "react";
import "./Services.css";
import image from "../../../Images/yellow-taxi-contribute.jpg";
import image2 from "../../../Images/room-contribute.jpg";

const Services = () => {
  return (
    <div>
      <div id="services-all">
        <ul>
          <li>
            <img className="carousel-img  " src={image} />
            <h3 className="img-head">Uber&Taxi</h3>
            <p className="img-paragraph">
              Welcome to our comprehensive transportation solutions, where
              convenience meets efficiency. Explore the world of hassle-free
              commuting with our integrated Uber and Taxi services. Whether
              you're a daily commuter or a visitor to a new city , our platform
              is designed to provide you with a reliable, safe, and comfortable
              travel experience
            </p>
            <input
              className="img-search"
              placeholder="Enter the location"
              type="text"
            />
            <i className="search-arrow bi bi-arrow-right-square-fill h4 "></i>
          </li>
          <li>
            <img className="carousel-img  " src={image2} />
            <h3 className="head22">Hotel&HomeStay</h3>
            <p className="img-paragraph2">
              Nestled in the heart of our curated destinations, Hidden Heavens
              Retreat is not just a place to stay; it's an immersive experience
              designed to elevate your journey. Whether you're seeking the
              comfort of a charming homestay or the amenities of a boutique
              hotel, our accommodations are carefully selected to enhance your
              connection with the hidden gems surrounding you.
            </p>
            <input
              className="img-search"
              placeholder="Enter the location"
              type="text"
            />
            <i className="search-arrow bi bi-arrow-right-square-fill h4 "></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
